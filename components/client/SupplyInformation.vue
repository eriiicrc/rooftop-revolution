<template>
     <CardWithTitle title="Supply Information">
        <div class="supply-information">
            <div v-if="tariff" class="supply-information__item">
                <span class="supply-information__item__title">Tariff:</span>
                <span class="supply-information__item__value" data-testid="tariff">{{ tariff }}</span>
            </div>
            <div v-if="invoicedAmount" class="supply-information__item">
                <span class="supply-information__item__title">Invoiced amount:</span>
                <span class="supply-information__item__value" data-testid="invoiced-amount">{{ invoicedAmount }}€</span>      
            </div>
            <div v-if="p1" class="supply-information__item">
                <span class="supply-information__item__title">Power 1:</span>
                <span class="supply-information__item__value" data-testid="p1">{{ p1 }}W</span>
            </div>
            <div v-if="p2" class="supply-information__item">
                <span class="supply-information__item__title">Power 2:</span>
                <span class="supply-information__item__value" data-testid="p2">{{ p2 }}W</span>
            </div>
            <div v-for="(neighbor, index) in neighbors" class="supply-information__item" :key="index" data-testid="neighbors">
                <span class="supply-information__item__title">Neighbor {{ index + 1 }}:</span>
                <span class="supply-information__item__value">{{ neighbor }}</span>
            </div>
        </div>
    </CardWithTitle>   
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CardWithTitle from './CardWithTitle.vue';

export default defineComponent({
    name: 'PersonalInformation',
    components: {
        CardWithTitle
    },
    props: {
        tariff: {
            type: String,
            default: ''
        },
        invoicedAmount: {
            type: Number,
            default: 0
        },
        p1: {
            type: Number,
            default: 0
        },
        p2: {
            type: Number,
            default: 0
        },
        neighbors: {
            type: Array as any,
            default: []
        }
    }
})
</script>

<style lang="scss" scoped>
.supply-information {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    @media(min-width: 476px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    &__item {
        display: flex;
        gap: 8px;
        flex: 1 1 50%;
        margin-bottom: 20px;
        justify-content: space-between;
        
        @media(min-width: 476px) {
            justify-content: flex-start;
        }

        &:last-child {
            margin-bottom: 0;
        }

        &__title {
            display: flex;
            font-weight: 100;
        }

        &__value {
            font-weight: bold;
        }
    }  
}
</style>