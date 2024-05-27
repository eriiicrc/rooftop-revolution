<template>
    <div class="search-page">
        <div class="search-page__modal">
            <img class="search-page__logo" src="../assets/icons/holaluz.svg" alt="holaluz" />
            <span class="search-page__title">Rooftop revolution</span>
            <span class="search-page__description">Enter your CUPS number to find out if you can be part of our Rooftop revolution</span>
            <input v-model="cups" class="search-page__input" />
            <button @click="searchClient" class="search-page__search-button">Search</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const cups: Ref<string> = ref('')

const store = useMainStore()

const searchClient = async () => {
    await store.fetchClients()
}
</script>

<style lang="scss">
.search-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 20px;

    &__modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        max-width: 300px;
        width: 100%;
        height: fit-content;
        border-radius: 10px;
        padding: 32px;
        text-align: center;
        gap: 20px;
    }

    &__logo {
        width: 200px;
    }

    &__title {
        font-weight: bold;
        font-size: 20px;
    }
    
    &__description {
        font-weight: 100;
        font-size: 16px;
    }

    &__input {
        padding: 4px 8px;
        outline: none;
        border-radius: 8px;
        border: 1px solid #37424D;
    }

    &__search-button {
        text-transform: uppercase;
        padding: 8px 10px;
        border-radius: 16px;
        border: none;
        color: #FFFF;
        background-color: #EB409E;
        font-weight: bold;
    }
}
</style>