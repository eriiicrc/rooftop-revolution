import { BUILDING_TYPES, DISCOUNT, type SupplyPoint } from "~/types"

export const useClient = () => {

    const error: Ref<boolean> = ref(false)

    const isRevolutionRooftopAllowed: Ref<boolean> = ref(false)

    const discount = ref({})

    const store = useMainStore()

    const useRedirectToClient = () => {
        if (store.hasClientInfo()) {
            navigateTo({path: '/client', query: { cups: store.clientInfo.cups }})
        } else {
            error.value = true
        }
    }

    const useFetchClients = async () => {
        await store.fetchClients()
    }

    const useFetchSupplyInformation = async () => {
        await store.fetchSupplyPoints()
    }

    const useSearchClient = async (cups: string) => {
        await useFetchClients()
        store.findClientByCups(cups)
    }

    const useSearchSupplyInformation = async () => {
        await useFetchSupplyInformation()
        store.findSupplyInfoByCups(store.clientInfo.cups)
    }

    const useRevolutionRooftop = () => {
        if (store.clientInfo.building_type === BUILDING_TYPES.house && store.supplyInfo.neighbors.length) {
            isRevolutionRooftopAllowed.value = true
            useGetDiscountType()
        }
    }

    const useCalculateInvoicedAmount = (): number => {
        return store.supplyInfo.neighbors.reduce((total, neighbor) => {
            const neighborInfo: SupplyPoint = store.findNeighborByCups(neighbor)
            return total + neighborInfo.invoiced_amount
        }, 0)
    }
    
    const useIsPowerNeighborsLowerThanClient = (): boolean => {
        return store.supplyInfo.neighbors.every(neighbor => {
            const neighborInfo: SupplyPoint = store.findNeighborByCups(neighbor)
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

    return {
        useSearchClient: useSearchClient,
        error: error,
        useSearchSupplyInformation: useSearchSupplyInformation,
        useRedirectToClient: useRedirectToClient,
        useRevolutionRooftop: useRevolutionRooftop,
        isRevolutionRooftopAllowed: isRevolutionRooftopAllowed,
        discount: discount
    }
}