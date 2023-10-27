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

<style lang="scss" >
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
    &.primary{
        background-color: var(--blue);
        color: var(--pure_white);
        &:hover{
            background-color: var(--dark_blue);
        }
    }
    &.register{
        background-color: var(--green);
        color: var(--pure_white);
        gap: 12px;
        position: relative;
        &:hover{
            color: var(--darker_color);
        }
        &:before{
            content: '';
            display: block;
            width: 12px;
            aspect-ratio: 1;
            background-color: var(--pure_white);
            border-radius: 50%;
            box-shadow: 0 0 0 4px;
            color: var(--lighter_grey);
            transition: $transition_default;
            opacity: 0;
        }
        i{
            font-size: $size_24px;
            transition: rotate 0.8s ease 0.4s, left 0.4s ease;
            position: absolute;
            left:12px;
        }
        &.active{
            background-color: var(--pure_white);
            color: var(--grey);
            padding-right: 44px;
            &:before{
                background-color: var(--green);
                animation: 2s pulseShadows ease infinite;
                color: var(--light_green);
                opacity: 1;
            }
            &:hover{
                color: var(--darker_color);
            }
            i{
                rotate: 180deg;
                left: calc(100% - 36px);
            }
        }
    }
    &.full-width{
        width: 100%;
    }
    &.icon{
        i{
            font-size: $size_20px;
        }
    }
    &.link{
        background-color: transparent;
        color: var(--blue);
        padding: 0;
        font-size: 20px;
    }
    &.small{
        font-size: $size_14px;
        padding: 4px 12px;
        min-height: 32px;
    }
    &.clean{
        padding: 0;
        background-color: transparent;
        color: var(--light_grey);
    }
}

@keyframes pulseShadows{
    0%{
        box-shadow: 0 0 0 4px;
    }
    50%{
        box-shadow: 0 0 0 8px;
    }
    100%{
        box-shadow: 0 0 0 4px;
    }
}

</style>