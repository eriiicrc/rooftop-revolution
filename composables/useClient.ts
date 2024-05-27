
export const useClient = () => {

    const error: Ref<boolean> = ref(false)

    const store = useMainStore()

    const useFetchClients = async () => {
        await store.fetchClients()
    }

    const useSearchClient = async (cups: string) => {
        await useFetchClients()
        store.currentClient = store.clients.find(client => client.cups === cups)
        if (store.currentClient) {
            navigateTo('/client')
        } else {
            error.value = true
        }
    }

    return {
        useSearchClient: useSearchClient,
        error: error
    }
}