import { BUILDING_TYPES, DISCOUNT, type Discount, type SupplyPoint } from "~/types"

export const useClient = () => {

    const error: Ref<boolean> = ref(false)

    const isRevolutionRooftopAllowed: Ref<boolean> = ref(false)

    const discount: Ref<Discount> = ref({} as Discount)

    const store = useMainStore()

    const useRedirectToClient = () => {
        if (store.hasClientInfo()) {
            navigateTo({path: '/client', query: { cups: store.clientInfo.cups }})
        } else {
            error.value = true
        }
    }

    const useCleanError = () => error.value = false

    const useFetchClients = async () => {
        await store.fetchClients()
    }

    const useFetchSupplyPoints = async () => {
        await store.fetchSupplyPoints()
    }

    const useSearchClient = (cups: string) => {
        store.getClientByCups(cups)
    }    

    const useSearchSupplyInformation = async () => {
        store.getSupplyInfoByCups(store.clientInfo.cups)
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

    const useInitClientPage = async () => {
        await useFetchSupplyPoints()
        await useSearchSupplyInformation()
        useRevolutionRooftop()
    }

    return {
        error: error,
        isRevolutionRooftopAllowed: isRevolutionRooftopAllowed,
        discount: discount,
        useRedirectToClient: useRedirectToClient,
        useCleanError: useCleanError,
        useFetchClients: useFetchClients,
        useSearchClient: useSearchClient,
        useInitClientPage: useInitClientPage
    }
}