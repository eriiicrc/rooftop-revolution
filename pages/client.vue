<template>
    <div v-if="clientExists()" class="client-page">
        <ClientHeader />
        <ClientInformation 
            :client-info="store.clientInfo"
            :supply-info="store.supplyInfo"
        />
    </div>
</template>

<script setup lang="ts">
import ClientHeader from '../components/client/ClientHeader.vue'
import ClientInformation from '../components/client/ClientInformation.vue'

const { clientExists, useSearchSupplyInformation } = useClient()
const store = useMainStore()
onMounted(async () => {
        await useSearchSupplyInformation()
})
</script>

<style lang="scss" scoped>
.client-page {
    background: #F7F6F1;
    height: 100vh;
}
</style>