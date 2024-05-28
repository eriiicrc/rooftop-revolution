<template>
    <div class="search-page">
        <SearchClient
            :show-error="error"
            @clean-error="cleanError"
            @search-client="searchClient"
        />
    </div>
</template>

<script setup lang="ts">
import SearchClient from '../components/search/SearchClient.vue'

const { useSearchClient, redirectToClient, error } = useClient()

const searchClient = async (cups: string) => {
    await useSearchClient(cups)
    redirectToClient()
}

const cleanError = () => error.value = false
</script>

<style lang="scss">
.search-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(270deg, #FDBA20 0%, #E5047A 100%);
    padding: 0 20px;
}
</style>