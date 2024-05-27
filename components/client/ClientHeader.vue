<template>
    <div class="client-header">
        <img src="../../assets/icons/holaluz.svg" alt="holaluz" />
        <img @click="navigateToSearchPage" class="client-header__logout" src="../../assets/icons/logout.svg" alt="logout" />
    </div>
</template>

<script lang="ts">
export default defineComponent({
    emits: ['navigateToSearchPage'],
    name: 'ClientHeader',
    setup(props: any, { emit }: any) {

        const navigateToSearchPage = () => {
            navigateTo('/search')
        }

        return {
            navigateToSearchPage
        }
    }
})
</script>


<style scoped lang="scss">
.client-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: #FFFF;
    
    &__logout {
        width: 30px;
        margin-right: 20px;
        cursor: pointer;
        padding: 10px;
    }
}
</style>