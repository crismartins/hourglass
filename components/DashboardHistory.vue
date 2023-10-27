<template>
    <div class="history">
        <header class="history__header">
            <h2 class="secondary-title">
                History
            </h2>
            <AppButton class="primary small">
                See more
            </AppButton>
        </header>
        <ul class="history__records">
            <li class="history__records__item">
                <div class="history__records__item__card">
                    <header class="history__records__item__card__header">
                        <div class="history__records__item__card__header__day">
                            <AppIcon IconName="tabler:check" class="ok" />
                            <span>
                                day
                                <strong>
                                    date
                                </strong>
                            </span>
                        </div>
                        <AppButton class="small icon">
                            <AppIcon IconName="tabler:plus" />
                        </AppButton>
                    </header>
                    <ul class="history__records__item__card__list">
                        <li class="history__records__item__card__list__item enter">
                            <AppIcon IconName="tabler:arrow-right" />
                            <strong>
                                8:00
                            </strong>
                        </li>
                        <li class="history__records__item__card__list__item leave">
                            <AppIcon IconName="tabler:arrow-right" />
                            <strong>
                                8:00
                            </strong>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="history__records__item">
                <div class="history__records__item__card">
                    <header class="history__records__item__card__header">
                        <div class="history__records__item__card__header__day">
                            <AppIcon IconName="tabler:check" class="ok" />
                            <span>
                                day
                                <strong>
                                    date
                                </strong>
                            </span>
                        </div>
                        <AppButton class="small icon">
                            <AppIcon IconName="tabler:plus" />
                        </AppButton>
                    </header>
                    <ul class="history__records__item__card__list">
                        <li class="history__records__item__card__list__item enter">
                            <AppIcon IconName="tabler:arrow-right" />
                            <strong>
                                8:00
                            </strong>
                        </li>
                        <li class="history__records__item__card__list__item leave">
                            <AppIcon IconName="tabler:arrow-right" />
                            <strong>
                                8:00
                            </strong>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.history{
    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__records{
        margin-top: 28px;
        display: flex;
        gap: 12px;
        &__item{
            &__card{
                min-width: 232px;
                padding: 12px;
                border-radius: 12px;
                border: $border_default;
                &__header{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &__day{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        i{
                            width: 24px;
                            aspect-ratio: 1;
                            background-color: var(--lighter_color);
                            border-radius: 40px;
                            flex-shrink: 0;
                            &.ok{
                                color: var(--green);
                            }
                        }
                        span{
                            font-size: $size_12px;
                            color: var(--grey);
                            strong{
                                display: block;
                                font-size: $size_14px;
                                color: var(--darker_color);
                            }
                        }
                    }
                }
                &__list{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 12px;
                    &__item{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: $size_12px;
                        color: var(--darker_color);
                        i{
                            width: 20px;
                            aspect-ratio: 1;
                            background-color: var(--blue);
                            border-radius: 8px;
                            color: var(--pure_white);
                        }
                        &.leave{
                            i{
                                background-color: var(--light_grey);
                                rotate: 180deg;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>