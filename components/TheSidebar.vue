<template>
    <aside class="sidebar">
        <header class="sidebar__header">
            <picture class="sidebar__header__avatar">
                <img :src="userData.avatar" :alt="userData.username">
            </picture>
            <div class="sidebar__header__user">
                <strong class="sidebar__header__user__name">
                    {{ userData.username }}
                </strong>
                <small class="sidebar__header__user__role">
                    <span>
                        {{ userData.role }}
                    </span>
                    <AppButton class="small clean" title="Logout">
                        <span class="visually-hidden">Logout</span>
                        <AppIcon IconName="tabler:logout" />
                    </AppButton>
                </small>
            </div>
        </header>
        <div class="sidebar__body">
            <ul class="sidebar__body__menu">
                <li 
                    v-for="item in menuItems"
                    :key="item.title"
                    class="sidebar__body__menu__item"
                >
                    <NuxtLink :to="item.url">
                        <AppIcon :IconName="item.icon" />
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <footer class="sidebar__footer">
            <strong class="sidebar__footer__logo">
                <AppIcon IconName="solar:hourglass-bold-duotone" /> hourglass
            </strong>
            <small class="sidebar__footer__copyright">
                Proudly <strong>Designed and Developed</strong> by <strong>Cristopher Martins</strong>
            </small>
        </footer>
    </aside>
</template>

<script setup>
import { ref } from '#imports'

const userData = ref({
    avatar: 'https://picsum.photos/44',
    username: 'Cristopher Martins',
    email: 'hello@cristophermartins.com',
    role: 'Frontend Developer'
})
const menuItems = ref([
    {icon: 'tabler:home', title: 'Dashboard', url: '/'},
    {icon: 'tabler:history', title: 'History', url: '/history'},
    {icon: 'tabler:report-search', title: 'Reports', url: '/reports'},
    {icon: 'tabler:settings-2', title: 'Settings', url: '/settings'}
])
</script>

<style lang="scss" scoped>
.sidebar{
    min-height: 100vh;
    min-height: 100dvh;
    background: var(--main_gradient);
    border-radius: 0 24px 24px 0;
    padding: 24px 20px;
    color: var(--pure_white);
    display: flex;
    flex-direction: column;
    &__header{
        display: flex;
        align-items: center;
        gap: 12px;
        &__avatar{
            display: grid;
            place-items: center;
            flex-shrink: 0;
            img{
                width: 44px;
                aspect-ratio: 1;
                border-radius: 12px;
                border: 2px solid var(--pure_white);
            }
        }
        &__user{
            &__name{
                font-size: $size_12px;
                color: var(--pure_white);
                display: block;
            }
            &__role{
                font-size: $size_12px;
                display: flex;
                gap: 12px;
                position: relative;
                span{
                    color: var(--light_grey);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    max-width: 118px;
                    overflow: hidden;
                }
            }
        }
    }
    &__body{
        flex-grow: 1;
        overflow: auto;
        &__menu{
            margin-block: 20px;
            &__item{
                padding-block: 4px;
                a{
                    display: flex;
                    gap: 8px;
                    color: var(--pure_white);
                    padding: 12px;
                    border-radius: 12px;
                    i{
                        font-size: $size_20px;
                    }
                    &:hover{
                        background-color: var(--lighter_grey);
                        color: var(--blue);
                    }
                    &.router-link-exact-active{
                        background-color: var(--pure_white);
                        color: var(--blue);
                    }
                }
            }
        }
    }
    &__footer{
        text-align: center;
        &__logo{
            display: flex;
            gap: 4px;
            justify-content: center;
            align-items: center;
            margin-bottom: 12px;
            i{
                font-size: $size_20px;
            }
        }
        &__copyright{
            display: block;
            font-size: $size_8px;
            color: var(--light_grey);
        }
    }
}
</style>