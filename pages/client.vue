<template>
    <div v-if="store.hasClientInfo()" class="client-page">
        <ClientHeader />
        <ClientInformation 
            :client-info="store.clientInfo"
            :supply-info="store.supplyInfo"
            :client-allowed="isRevolutionRooftopAllowed"
            :discount="discount"
            :has-supply-info="store.hasClientSupplyPointInfo()"
        />
    </div>
</template>

<script setup lang="ts">
import ClientHeader from '../components/client/ClientHeader.vue'
import ClientInformation from '../components/client/ClientInformation.vue'

const { useInitClientPage, isRevolutionRooftopAllowed, discount } = useClient()
const store = useMainStore()

onMounted(async () => {
    await useInitClientPage()
})
</script>

<style lang="scss" scoped>
.client-page {
    padding-bottom: 20px;
}
</style>