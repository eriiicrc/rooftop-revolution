<template>
    <CardWithTitle :title="$props.title">
        <div class="personal-information">
            <div v-if="$props.address" class="personal-information__item">
                <img src="../../assets/icons/address.svg"/>
                <span>{{ $props.address }}</span>
            </div>
            <div class="personal-information__item">
                <img  src="../../assets/icons/pen.svg"/>
                <span>{{ $props.cups }}</span>
            </div>
            <div v-if="$props.role" class="personal-information__item">
                <img src="../../assets/icons/role.svg"/>
                <span>{{ $props.role }}</span>
            </div>
            <div v-if="$props.buildingType" class="personal-information__item">
                <img src="../../assets/icons/building.svg"/>
                <span>{{ $props.buildingType }}</span>
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
        title: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        cups: {
            type: String,
            required: true
        },
        role: {
            type: String
        },
        buildingType: {
            type: String
        }
    }
})
</script>

<style lang="scss" scoped>
.personal-information {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-weight: 100;
    font-size: 14px;
    
    &__item {
        display: flex;
        align-items: center;
        gap: 8px;
        text-transform: capitalize;
    }
}
</style>