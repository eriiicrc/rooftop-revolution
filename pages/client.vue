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

const { useSearchSupplyInformation, useRevolutionRooftop, useSearchClient, isRevolutionRooftopAllowed, discount } = useClient()
const store = useMainStore()

const { query } = useRoute()

const loadClientPage = async () => {
    await useSearchSupplyInformation()
    useRevolutionRooftop()
}

onMounted(async () => {
    if (store.hasClientInfo()) {
        await loadClientPage()
    } else if (query.cups && typeof query.cups === 'string') {
        await useSearchClient(query.cups)
        await loadClientPage()
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