<template>
     <CardWithTitle title="Supply Information">
        <div class="supply-information">
            <div class="supply-information__item">
                <span class="supply-information__item__title">Tariff:</span>
                <span>{{ $props.tariff }}</span>
            </div>
            <div class="supply-information__item">
                <span class="supply-information__item__title">Invoiced amount:</span>
                <span>{{ $props.invoicedAmount }}€</span>      
            </div>
            <div class="supply-information__item">
                <span class="supply-information__item__title">Power 1:</span>
                <span>{{ $props.p1 }}W</span>
            </div>
            <div class="supply-information__item">
                <span class="supply-information__item__title">Power 2:</span>
                <span>{{ $props.p2 }}W</span>
            </div>
            <div v-for="(neighbor, index) in $props.neighbors" class="supply-information__item" :key="index">
                <span class="supply-information__item__title">Neighbor {{ index + 1 }}:</span>
                <span>{{ neighbor }}</span>
            </div>
        </div>
    </CardWithTitle>   
</template>


<script lang="ts">
import CardWithTitle from './CardWithTitle.vue';

export default defineComponent({
    name: 'PersonalInformation',
    components: {
        CardWithTitle
    },
    props: {
        tariff: {
            type: String
        },
        invoicedAmount: {
            type: String
        },
        p1: {
            type: String
        },
        p2: {
            type: String
        },
        neighbors: {
            type: Array as any
        }
    }
})
</script>

<style lang="scss" scoped>
.supply-information {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    &__item {
        display: flex;
        gap: 8px;
        flex: 1 1 50%;
        margin-bottom: 20px;

        &__title {
            display: flex;
            font-weight: 100;
        }
    }  
}
</style>