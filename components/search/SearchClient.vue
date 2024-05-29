<template>
    <div class="client-search__modal">
        <img class="client-search__logo" src="../../assets/icons/holaluz.svg"/>
        <span class="client-search__title">Rooftop revolution</span>
        <span class="client-search__description">Enter your CUPS number to find out if you can be part of our Rooftop revolution</span>
        <div class="client-search__form">
            <input v-model="cups" @keydown.enter="searchClient" @input="cleanError" class="client-search__input" />
            <span v-if="error && cups" class="client-search__error">Client not found, please try again</span>
            <span v-else-if="error && cups === ''" class="client-search__error">CUPS is required!</span>
        </div>
        <button @click="searchClient" class="client-search__search-cta">Search</button>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    emits: ['searchClient', 'cleanError'],
    name: 'ClientSearch',
    props: {
        error: {
            type: Boolean,
            default: false,
        }
    },
    setup(props: any, { emit }: any) {

        const cups: Ref<string> = ref('')
        const searchClient = () => {
            emit('searchClient', cups.value)
        }
        const cleanError = () => {
            emit('cleanError')
        }

        return {
            cups,
            searchClient,
            cleanError
        }
    }
})
</script>

<style lang="scss" scoped>
.client-search {
    &__modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFFF;
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
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;
        width: 80%;
    }

    &__input {
        padding: 4px 8px;
        width: 80%;
        outline: none;
        border-radius: 8px;
        border: 1px solid #37424D;
    }

    &__error {
        position: absolute;
        top: 30px;
        color: #DA0000;
        font-size: 10px;
        font-weight: 100;
    }

    &__search-cta {
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