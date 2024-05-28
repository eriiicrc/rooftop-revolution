<template>
    <div class="client-info">
        <span class="client-info__title">Hi <span class="client-info__name">{{ $props.clientInfo.full_name }}</span>,</span>
        <div class="client-info__cards">
            <PersonalInformation 
                :title="$props.clientInfo.full_name"
                :address="$props.clientInfo.address"
                :cups="$props.clientInfo.cups"
                :role="$props.clientInfo.role"
                :building-type="$props.clientInfo.building_type"
            />
            <SupplyInformation 
                :tariff="$props.supplyInfo.tariff"
                :invoiced-amount="$props.supplyInfo.invoiced_amount"
                :role="$props.supplyInfo.role"
                :p1="$props.supplyInfo.power?.p1"
                :p2="$props.supplyInfo.power?.p2"
                :neighbors="$props.supplyInfo.neighbors"
            />
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


        @media(min-width: 992px) {
            flex-direction: row;
        }
    }
}
</style>