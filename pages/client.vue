<template>
    <div v-if="clientExists()" class="client-page">
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

const { clientExists, useSearchSupplyInformation, useRevolutionRooftop, isRevolutionRooftopAllowed, discount } = useClient()
const store = useMainStore()

onMounted(async () => {
    if (clientExists()) {
        await useSearchSupplyInformation(store.clientInfo.cups)
        useRevolutionRooftop()
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