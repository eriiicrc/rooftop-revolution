<template>
    <div class="search-page">
        <div class="search-page__modal">
            <img class="search-page__logo" src="../assets/icons/holaluz.svg" alt="holaluz" />
            <span class="search-page__title">Rooftop revolution</span>
            <span class="search-page__description">Enter your CUPS number to find out if you can be part of our Rooftop revolution</span>
            <div class="search-page__form">
                <input v-model="cups" @keydown.enter="searchClient" @input="cleanError" class="search-page__input" />
                <span v-if="error" class="search-page__error">Client not found, please try again</span>
            </div>
            <button @click="searchClient" class="search-page__search-button">Search</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const cups: Ref<string> = ref('')
const { useSearchClient, error } = useClient()

const searchClient = async () => {
    await useSearchClient(cups.value)
}

const cleanError = () => error.value = false
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
        gap: 32px;
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

    &__form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__input {
        padding: 4px 8px;
        outline: none;
        border-radius: 8px;
        border: 1px solid #37424D;
    }

    &__error {
        color: #DA0000;
        font-size: 10px;
        font-weight: 100;
    }

    &__search-button {
        text-transform: uppercase;
        padding: 8px 12px;
        border-radius: 16px;
        border: none;
        color: #FFFF;
        background-color: #EB409E;
        font-weight: bold;
        cursor: pointer;
    }

}
</style>