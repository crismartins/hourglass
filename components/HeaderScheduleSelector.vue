<template>
    <div class="select__schedule" :class="{ active : openedOptions}">
        <AppButton class="clean select__schedule__button full-width" @click="toggleOptions">
            <picture class="select__schedule__button__image">
                <img :src="selectedCompany.logo" :alt="selectedCompany.name">
            </picture>
            <span class="select__schedule__button__info">
                <strong>{{ selectedCompany.name }}</strong>
                <small class="select__schedule__button__info__time">
                    {{ selectedCompany.schedule }}
                </small>
            </span>
            <AppIcon IconName="tabler:switch-vertical" />
        </AppButton>
        <div class="select__schedule__options" :class="{ active : openedOptions}">
            <ul class="select__schedule__options__list">
                <li class="select__schedule__options__list__item">
                    <NuxtLink>
                        <AppIcon IconName="tabler:alarm"/>
                        <strong>
                            Time Tracker
                        </strong>
                    </NuxtLink>
                </li>
                <li class="select__schedule__options__list__item add">
                    <AppButton class="icon primary full-width">
                        <AppIcon IconName="tabler:square-rounded-plus" />
                        Add company
                    </AppButton>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { toRefs, ref } from '#imports'

const props = defineProps({
    selectedCompany: {
        type: Object,
        required: true
    },
    selectOptions: {
        type: Array,
        required: true
    }
})
const { selectedCompany, selectOptions } = toRefs(props)

const openedOptions = ref(false)

function toggleOptions(){
    openedOptions.value = !openedOptions.value
}
</script>

<style lang="scss" scoped>
.select__schedule{
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    transition: $transition_default;
    min-width: 220px;
    &:hover{
        background-color: var(--pure_white);
    }
    &.active{
        border-radius: 12px 12px 0 0;
        background-color: var(--pure_white);
    }
    &__button{
        gap: 12px;
        position: relative;
        z-index: 2;
        &__image{
            display: grid;
            place-items: center;
            flex-shrink: 0;
            width: 38px;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 2px solid var(--light_grey);
            overflow: hidden;
            background-color: var(--pure_white);
            img{
                object-fit: cover;
                min-width: 100%;
                min-height: 100%;
            }
        }
        &__info{
            text-align: left;
            flex-grow: 1;
            color: var(--darker_color);
            font-size: $size_14px;
            &__time{
                display: block;
                font-size: $size_12px;
            }
        }
        i{
            font-size: $size_24px;
        }
    }
    &__options{
        top: 100%;
        left: 0;
        width: 100%;
        display: grid;
        grid-template-rows: 0fr;
        transition: $transition_default;
        position: absolute;
        border-radius: 0 0 12px 12px;
        background-color: var(--pure_white);
        &.active{
            z-index: 1;
            grid-template-rows: 1fr;
            box-shadow: 0 16px 16px 4px var(--lighter_grey);
        }
        &__list{
            overflow: hidden;
            &__item{
                &.add{
                    padding: 12px;
                }
                a{
                    display: flex;
                    padding: 12px;
                    gap: 8px;
                    align-items: center;
                    color: var(--darker_color);
                    i{
                        display: grid;
                        place-items: center;
                        flex-shrink: 0;
                        width: 38px;
                        aspect-ratio: 1;
                        border-radius: 50%;
                        border: 2px solid var(--light_grey);
                        overflow: hidden;
                        background-color: var(--pure_white);
                        font-size: $size_24px;
                        color: var(--grey);
                    }
                    strong{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &:hover{
                        background-color: var(--lighter_grey);
                    }
                }
            }
        }
    }
}
</style>