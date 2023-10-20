<template>
    <nuxt-link 
        v-if="hasLink" 
        :to="hasLink" 
        class="button" 
    >
        <slot />
    </nuxt-link>
    <button v-else class="button">
        <slot />
    </button>
</template>

<script setup>
import { toRefs } from '#imports'
const props = defineProps({
    hasLink: {
        type: String
    }
})

const { hasLink } = toRefs(props)
</script>

<style lang="scss">
.button{
    background-color: var(--lighter_grey);
    color: var(--blue);
    border-radius: 40px;
    border: 0;
    padding: 12px 20px;
    font-size: $size_16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    gap: 8px;
    transition: $transition_default;
    width: fit-content;
    @media(max-width:$br_mobile){
        font-size: $size_20px;
    }
    &.small{
        font-size: $size_14px;
    }
    &.clean{
        padding: 0;
        background-color: transparent;
        color: var(--light_grey);
    }
}
</style>