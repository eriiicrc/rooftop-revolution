import type { Client, SupplyPoint } from "~/types"

export const useClient = () => {

    const error: Ref<boolean> = ref(false)

    const store = useMainStore()

    const clientExists = () => store.clientInfo.cups !== undefined

    const useFetchClients = async () => {
        await store.fetchClients()
    }

    const useSearchClient = async (cups: string) => {
        await useFetchClients()
        store.clientInfo = store.clients.find(client => client.cups === cups) || {} as Client
        if (store.clientInfo && clientExists()) {
            navigateTo('/client')
        } else {
            error.value = true
        }
    }

    const useFetchSupplyInformation = async () => {
        await store.fetchSupplyPoints()
    }

    const useSearchSupplyInformation = async () => {
        if (clientExists()) {
            await useFetchSupplyInformation()
            store.supplyInfo = store.supplyPoints.find(supplyPoint => supplyPoint.cups === store.clientInfo.cups) || {} as SupplyPoint
        } else {
            navigateTo('/search')
        }
        
    }

    return {
        useSearchClient: useSearchClient,
        error: error,
        useSearchSupplyInformation: useSearchSupplyInformation,
        clientExists: clientExists
    }
}