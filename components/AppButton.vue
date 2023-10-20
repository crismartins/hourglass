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
        }
        i{
            font-size: $size_24px;
        }
        &.active{
            background-color: var(--pure_white);
            color: var(--grey);
            &:before{
                background-color: var(--green);
                animation: 2s pulseShadows ease infinite;
                color: var(--light_green);
            }
            i{
                rotate: 180deg;
                animation: 2s takeBreak ease;
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
    &.small{
        font-size: $size_14px;
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
@keyframes takeBreak{
    
    20%{
        transform: rotate(180deg);
    }
    90%{
        transform: translateX(-120px) rotate(180deg);
    }
    100%{
        opacity: 0;
    }
}
</style>