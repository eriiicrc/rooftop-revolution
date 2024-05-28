<template>
    <div class="client-header">
        <img @click="navigateTo('/')" class="client-header__brand" src="../../assets/icons/holaluz.svg"/>
        <img @click="navigateTo('/search')" class="client-header__logout" src="../../assets/icons/logout.svg"/>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    emits: ['navigateToSearchPage'],
    name: 'ClientHeader'
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

    &__brand {
        cursor: pointer;
    }
    
    &__logout {
        width: 30px;
        margin-right: 20px;
        cursor: pointer;
        padding: 10px;
    }
}
</style>