<template>
    <div v-if="supplyInfo && clientInfo" class="client-info">
        <span class="client-info__title">Hi <span class="client-info__name">{{ clientInfo.full_name }}</span>,</span>
        <div class="client-info__cards">
            <PersonalInformation 
                :title="clientInfo.full_name"
                :address="clientInfo.address"
                :cups="clientInfo.cups"
                :role="clientInfo.role"
                :building-type="clientInfo.building_type"
            />
            <SupplyInformation 
                :tariff="supplyInfo.tariff"
                :invoiced-amount="supplyInfo.invoiced_amount"
                :role="supplyInfo.role"
                :p1="supplyInfo.power?.p1"
                :p2="supplyInfo.power?.p2"
                :neighbors="supplyInfo.neighbors"
            />
        </div>
        <div v-if="clientAllowed" class="client-info__allowed">
            <img src="../../assets/icons/allowed.svg"/>
            <span>You are allowed to get enrolled with the <span class="client-info__allowed__title">Rooftop revolution</span></span>
        </div>
        <div v-else class="client-info__allowed">
            <img src="../../assets/icons/not-allowed.svg"/>
            <span>You are not allowed to get enrolled with the <span class="client-info__allowed__title">Rooftop revolution</span></span>
        </div>
        <div v-if="discount.type" class="client-info__discount-type">
            <div class="client-info__discount-type__title">{{ discount.type }}</div>
            <span class="client-info__discount-type__discount">{{ discount.discount }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import PersonalInformation from './PersonalInformation.vue';
import SupplyInformation from './SupplyInformation.vue';
export default defineComponent({
    name: 'ClientInformation',
    components: {
        PersonalInformation,
        SupplyInformation
    },
    props: {
        clientInfo: {
            type: Object as any,
        },
        supplyInfo: {
            type: Object as any,
        },
        clientAllowed: {
            type: Boolean,
            default: false
        },
        discount: {
            type: Object as any
        }
    }
})
</script>

<style lang="scss" scoped>
.client-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 56px;
    text-align: left;
    gap: 36px;

    &__title {
        font-size: 20px;
        width: fit-content;
        padding-bottom: 10px;
        border-bottom: 2px solid;
        border-image: linear-gradient(to right, #E5047A, #FDBA20) 1;
    }

    &__name {
        font-weight: bold;
    }

    &__cards {
        display: flex;
        flex-direction: column;
        gap: 36px;
        justify-content: center;

        @media(min-width: 992px) {
            flex-direction: row;
        }
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