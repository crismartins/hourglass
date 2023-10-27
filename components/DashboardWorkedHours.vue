<template>
    <div class="worked">
        <header class="worked__header">
            <h2 class="secondary-title">
                Worked hours
            </h2>
            <time>
                {{ moment(today).format('MMMM d, YYYY') }}
            </time>
        </header>
        <div class="worked__body">
            <ul class="worked__body__list">
                <li class="worked__body__list__item">
                    <h3 class="tertiary-title">
                        Absense
                    </h3>
                    <strong class="negative">
                        8:00
                    </strong>
                </li>
                <li class="worked__body__list__item">
                    <h3 class="tertiary-title">
                        Overtime
                    </h3>
                    <strong class="empty">
                        0:00
                    </strong>
                </li>
                <li class="worked__body__list__item">
                    <h3 class="tertiary-title">
                        Total
                    </h3>
                    <strong>
                        32:00
                    </strong>
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
.worked{
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
                strong{
                    font-size: $size_24px;
                    color: var(--darker_color);
                    &.negative{
                        color: var(--red);
                    }
                    &.empty{
                        color: var(--light_grey);
                    }
                }
            }
        }
    }
}
</style>