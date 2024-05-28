<template>
    <CardWithTitle :title="$props.title">
        <div class="personal-information">
            <div class="personal-information__item">
                <img src="../../assets/icons/address.svg" alt="holaluz" />
                <span>{{ $props.address }}</span>
            </div>
            <div class="personal-information__item">
                <img  src="../../assets/icons/pen.svg" alt="holaluz" />
                <span>{{ $props.cups }}</span>
            </div>
            <div class="personal-information__item">
                <img src="../../assets/icons/role.svg" alt="holaluz" />
                <span>{{ $props.role }}</span>
            </div>
            <div class="personal-information__item">
                <img src="../../assets/icons/building.svg" alt="holaluz" />
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
            type: String,
            required: true
        },
        cups: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        buildingType: {
            type: String,
            required: true
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