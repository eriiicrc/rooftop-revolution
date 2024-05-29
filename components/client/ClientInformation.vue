<template>
    <div class="client-info">
        <span class="client-info__title">Hi <span class="client-info__name">{{ clientInfo.full_name }}</span>,</span>
        <div class="client-info__cards">
            <PersonalInformation
                :title="clientInfo.full_name"
                :address="clientInfo.address"
                :cups="clientInfo.cups"
                :role="clientInfo.role"
                :building-type="clientInfo.building_type"
            />
            <SupplyInformation v-if="hasSupplyInfo"
                :tariff="supplyInfo.tariff"
                :invoiced-amount="supplyInfo.invoiced_amount"
                :role="supplyInfo.role"
                :p1="supplyInfo.power.p1"
                :p2="supplyInfo.power.p2"
                :neighbors="supplyInfo.neighbors"
            />
        </div>
        <DiscountInformation v-if="hasSupplyInfo"
            :discount="discount"
            :client-allowed="clientAllowed"
        />
    </div>
</template>

<script lang="ts">
import PersonalInformation from './PersonalInformation.vue';
import SupplyInformation from './SupplyInformation.vue';
import DiscountInformation from './DiscountInformation.vue';

export default defineComponent({
    name: 'ClientInformation',
    components: {
        PersonalInformation,
        SupplyInformation,
        DiscountInformation
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
        },
        hasSupplyInfo: {
            type: Boolean,
            default: false
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
}
</style>