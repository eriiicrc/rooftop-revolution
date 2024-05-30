<template>
    <div class="discount-info">
        <div v-if="clientAllowed" class="discount-info__allowed">
            <img src="../../assets/icons/allowed.svg"/>
            <span data-testid="allowed-msg">You are allowed to get enrolled with the <span class="discount-info__allowed__title">Rooftop revolution</span></span>
        </div>
        <div v-else class="discount-info__allowed">
            <img src="../../assets/icons/not-allowed.svg"/>
            <span data-testid="not-allowed-msg">You are not allowed to get enrolled with the <span class="discount-info__allowed__title">Rooftop revolution</span></span>
        </div>
        <div v-if="clientAllowed" class="discount-info__discount-type" data-testid="discount">
            <div class="discount-info__discount-type__title" data-testid="discount-type">{{ discount.type }}</div>
            <span class="discount-info__discount-type__discount" data-testid="discount-value">{{ discount.discount }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DiscountInformation',
    props: {
        discount: {
            type: Object as any,
            default: {}
        },
        clientAllowed: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style lang="scss" scoped>
.discount-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: fit-content;
    align-items: center;

    @media(min-width: 992px) {
        width: 100%;
    }

    &__allowed {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 100;
        gap: 12px;

        @media(min-width: 992px) {
            justify-content: center;
        }

        &__title {
            font-weight: bold;
        }
    }

    &__discount-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        background-color: #FFFF;
        border-radius: 5px;
        width: fit-content;
        box-shadow: 0px 4px 4px 0px #00000040;

        &__title {
            padding: 10px 16px;
            background-color:#EB409E;
            color: #FFFF;
            border-radius: 5px 5px 0px 0px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
        }

        &__discount {
            font-weight: 100;
            padding: 10px;
            font-size: 14px;
        }
    }
}
</style>
