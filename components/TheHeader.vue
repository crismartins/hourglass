<template>
    <header class="header">
        <HeaderScheduleSelector :selectedCompany="companyData" :selectoptions="companyData" />

        <div class="header__right">
            <div class="header__right__tracking">
                <div class="header__right__tracking__time">
                    <AppIcon IconName="tabler:alarm" />
                    <span class="header__right__tracking__time__info">
                        <strong class="header__right__tracking__time__info__title">
                            Tracking
                        </strong>
                        <strong class="header__right__tracking__time__info__time">
                            time
                        </strong>
                    </span>
                </div>
                <AppButton class="register">
                    Take a break
                    <AppIcon IconName="tabler:arrow-right" />
                </AppButton>
            </div>

            <div class="header__right__theme">
                <AppButton class="icon header__right__theme__switcher">
                    <AppIcon IconName="tabler:moon" />
                </AppButton>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from '#imports'
const companyData = ref({
    logo: 'https://picsum.photos/44',
    name: 'Company',
    schedule: 'from 8h to 5h'
})
</script>

<style lang="scss" scoped>
.header{
    margin: 16px 40px;
    background-color: var(--lighter_color);
    border-radius: 12px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    &__right{
        display: flex;
        align-items: center;
        gap: 20px;
        &__tracking{
            display: flex;
            align-items: center;
            gap: 20px;
            &__time{
                display: flex;
                gap: 8px;
                align-items: center;
                i{
                    font-size: $size_36px;
                    color: var(--light_grey);
                }
                &__info{
                    &__title{
                        text-transform: uppercase;
                        font-size: $size_12px;
                        display: block;
                    }
                    &__time{
                        color: var(--darker_color);
                    }
                }
            }
        }
        &__theme{

        }
    }
}
</style>