import { BUILDING_TYPES, DISCOUNT, type Discount, type SupplyPoint } from "~/types"
import { ref } from 'vue'
import { useMainStore } from '@/stores'
import { useRoute } from 'vue-router'

export const useClient = () => {

    const error: Ref<boolean> = ref(false)

    const isRevolutionRooftopAllowed: Ref<boolean> = ref(false)

    const discount: Ref<Discount> = ref({} as Discount)

    const store = useMainStore()

    const { query } = useRoute()

    const useHasClientInfo = () => store.hasClientInfo()

    const useNavigateToClient = () => {
        navigateTo({ path: '/client', query: { cups: store.clientInfo.cups }})
    }

    const useCleanError = () => error.value = false

    const useFetchClients = async () => {
        await store.fetchClients()
    }

    const useFetchSupplyPoints = async () => {
        await store.fetchSupplyPoints()
    }

    const useSearchClient = (cups: string) => {
        store.setClientByCups(cups)
        if (!useHasClientInfo()) {
            error.value = true
        }
    }    

    const useSearchSupplyInformation = () => {
        store.setSupplyInfoByCups(store.clientInfo.cups)
    }

    const useRevolutionRooftop = () => {
        if (store.clientInfo.building_type === BUILDING_TYPES.house && store.supplyInfo.neighbors.length) {
            isRevolutionRooftopAllowed.value = true
            useGetDiscountType()
        }
    }

    const useCalculateInvoicedAmount = (): number => {
        return store.supplyInfo.neighbors.reduce((total, neighbor) => {
            const neighborInfo: SupplyPoint = store.getNeighborByCups(neighbor)
            return total + neighborInfo.invoiced_amount
        }, 0)
    }
    
    const useIsPowerNeighborsLowerThanClient = (): boolean => {
        return store.supplyInfo.neighbors.every(neighbor => {
            const neighborInfo: SupplyPoint = store.getNeighborByCups(neighbor)
            return neighborInfo.power.p1 < store.supplyInfo.power.p1 && neighborInfo.power.p2 < store.supplyInfo.power.p2
        })
    }
    
    const useGetDiscountType = () => {
        const invoicedAmount: number = useCalculateInvoicedAmount()
        const isPowerNeighborsLowerThanClient: boolean = useIsPowerNeighborsLowerThanClient()
    
        if (invoicedAmount > 100) {
            discount.value = DISCOUNT.special
        } else if (isPowerNeighborsLowerThanClient) {
            discount.value = DISCOUNT.basic
        } else {
            discount.value = DISCOUNT.standard
        }
    }

    const useSearchSupplyInfoAndDiscount = () => {
        useSearchSupplyInformation()
        if (store.hasClientSupplyPointInfo()) {
            useRevolutionRooftop()
        }
    }

    const useNavigateToSearch = () => {
        navigateTo('/search')
    }

    const useInitClientPage = async () => {
        if (useHasClientInfo()) {
            await useFetchSupplyPoints()
            useSearchSupplyInfoAndDiscount()
            return
        }
    
        if (!query.cups) {
            useNavigateToSearch()
            return
        }
    
        await useFetchClients()
        useSearchClient(query.cups.toString())
    
        if (!useHasClientInfo()) {
            useNavigateToSearch()
            return
        }
        await useFetchSupplyPoints()
        useSearchSupplyInfoAndDiscount()
    }

    return {
        error: error,
        isRevolutionRooftopAllowed: isRevolutionRooftopAllowed,
        discount: discount,
        useNavigateToClient: useNavigateToClient,
        useCleanError: useCleanError,
        useFetchClients: useFetchClients,
        useSearchClient: useSearchClient,
        useInitClientPage: useInitClientPage
    }
}