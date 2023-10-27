<template>
    <div class="earnings">
        <header class="earnings__header">
            <h2 class="secondary-title">
                Earnings
            </h2>
            <time>
                {{ moment(today).format('MMMM d, YYYY') }}
            </time>
        </header>
        <div class="earnings__body">
            <ul class="earnings__body__list">
                <li class="earnings__body__list__item">
                    <h3 class="tertiary-title">
                        Salary / Hour
                    </h3>
                    <span class="earnings__body__list__item__total">
                        <strong >
                            8:00
                        </strong>
                        <AppButton class="link">
                            <AppIcon IconName="tabler:eye" />
                        </AppButton>
                    </span>
                </li>
                <li class="earnings__body__list__item">
                    <h3 class="tertiary-title">
                        Discounts
                    </h3>
                    <span class="earnings__body__list__item__total">
                        <strong >
                            8:00
                        </strong>
                        <AppButton class="link">
                            <AppIcon IconName="tabler:eye" />
                        </AppButton>
                    </span>
                </li>
                <li class="earnings__body__list__item">
                    <h3 class="tertiary-title">
                        Total
                    </h3>
                    <span class="earnings__body__list__item__total">
                        <strong >
                            8:00
                        </strong>
                        <AppButton class="link">
                            <AppIcon IconName="tabler:eye-closed" />
                        </AppButton>
                    </span>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment'

const today = new Date()

</script>

<style lang="scss" scoped>
.earnings{
    border: $border_default;
    padding: 20px;
    border-radius: 12px;
    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        time{
            font-size: $size_14px;
            margin-bottom: 12px;
        }
    }
    &__body{
        &__list{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 20px;
            &__item{
                &__total{
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    strong{
                        font-size: $size_24px;
                        color: var(--darker_color);
                        &.empty{
                            color: var(--light_grey);
                        }
                    }
                    
                }
            }
        }
    }
}
</style>