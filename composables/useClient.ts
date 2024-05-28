import { BUILDING_TYPES, DISCOUNT, type SupplyPoint } from "~/types"

export const useClient = () => {

    const error: Ref<boolean> = ref(false)

    const isRevolutionRooftopAllowed: Ref<boolean> = ref(false)

    const discount = ref({})

    const store = useMainStore()

    const clientExists = () => store.clientInfo.cups !== undefined

    const redirectToClient = () => {
        if (clientExists()) {
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

    const useSearchSupplyInformation = async (cups: string) => {
            await useFetchSupplyInformation()
            store.findSupplyInfoByCups(cups)
    }

    const useRevolutionRooftop = () => {
        if (store.clientInfo.building_type === BUILDING_TYPES.house && store.supplyInfo.neighbors.length) {
            isRevolutionRooftopAllowed.value = true
            useGetDiscountType()
        }
    }

    const useGetDiscountType = () => {
        let invoicedAmount: number = 0
        let isPowerLessThanNeighbors: boolean = true
        store.supplyInfo.neighbors.forEach(neighbor => {
            const neighborInfo: SupplyPoint = store.findNeighborByCups(neighbor)
            invoicedAmount += neighborInfo.invoiced_amount
            if (isPowerLessThanNeighbors) {
                isPowerLessThanNeighbors = neighborInfo.power.p1 < store.supplyInfo.power.p1 && neighborInfo.power.p2 < store.supplyInfo.power.p2
            }
        })
        if (invoicedAmount > 100) {
            discount.value = DISCOUNT.special
        } else if (!isPowerLessThanNeighbors) {
            discount.value = DISCOUNT.basic
        } else {
            discount.value = DISCOUNT.standard
        }
    }

    return {
        useSearchClient: useSearchClient,
        error: error,
        useSearchSupplyInformation: useSearchSupplyInformation,
        clientExists: clientExists,
        redirectToClient: redirectToClient,
        useRevolutionRooftop: useRevolutionRooftop,
        isRevolutionRooftopAllowed: isRevolutionRooftopAllowed,
        discount: discount
    }
}