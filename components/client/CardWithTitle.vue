<template>
    <div class="card">
        <span class="card__name">{{ $props.title }}</span>
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: 'CardWithTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
})
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 350px;
    min-height: 125px;
    max-height: fit-content;
    background-color: #FFFF;
    padding: 32px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px #00000040;

    @media(min-width: 992px) {
        width: 100%;
    }

    &__name {
        font-weight: bold;
    }
}
</style>
