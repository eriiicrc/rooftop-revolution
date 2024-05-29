<template>
    <div v-if="store.hasClientInfo()" class="client-page">
        <ClientHeader />
        <ClientInformation 
            :client-info="store.clientInfo"
            :supply-info="store.supplyInfo"
            :client-allowed="isRevolutionRooftopAllowed"
            :discount="discount"
        />
    </div>
</template>

<script setup lang="ts">
import ClientHeader from '../components/client/ClientHeader.vue'
import ClientInformation from '../components/client/ClientInformation.vue'

const { useInitClientPage, useFetchClients, useSearchClient, isRevolutionRooftopAllowed, discount } = useClient()
const store = useMainStore()

const { query } = useRoute()

onMounted(async () => {
    if (store.hasClientInfo()) {
        await useInitClientPage()
    } else if (query.cups) {
        await useFetchClients()
        useSearchClient(query.cups.toString())
        await useInitClientPage()
    } else {
        navigateTo('/search')
    }
})
</script>

<style lang="scss" scoped>
.client-page {
    padding-bottom: 20px;
}
</style>