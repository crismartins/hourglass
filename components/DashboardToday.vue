<template>
    <div class="dashboard__today">
        <h2 class="secondary-title">
            Today
        </h2>
        <h3 class="tertiary-title">
            Now Working
        </h3>
        <ul class="dashboard__today__date">
            <li class="dashboard__today__date__info">
                <strong>
                   {{ moment(today).format('dddd, MMMM d, YYYY') }}
                </strong>
            </li>
            <li class="dashboard__today__date__info">
                <strong>
                   {{ moment(today).format('h:mm:ssa') }}
                </strong>
            </li>
        </ul>
        <div class="dashboard__today__records">
            <div class="dashboard__today__records__progress">
                <p class="dashboard__today__records__progress__text">62%</p>
                <progress class="dashboard__today__records__progress__bar" value="62" max="100"> 32% </progress>
            </div>

            <ul class="dashboard__today__records__points">
                <li class="dashboard__today__records__points__item">
                    <AppIcon class="status-icon" IconName="tabler:arrow-right" />
                    <time>
                        {{ moment(today).format('h:mma') }}
                    </time>
                    <small>
                        <AppIcon IconName="tabler:map-pin-filled" /> 
                        Local
                    </small>
                </li>
                <li class="dashboard__today__records__points__item leave">
                    <AppIcon class="status-icon" IconName="tabler:arrow-right" />
                    <time>
                        {{ moment(today).format('h:mma') }}
                    </time>
                    <small>
                        <AppIcon IconName="tabler:map-pin-filled" /> Local
                    </small>
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
.dashboard__today{
    &__date{
        display: flex;
        align-items: center;
        &__info{
            border-left: $border_default;
            padding-inline: 20px;
            color: var(--darker_color);
            font-size: $size_24px;
            &:first-child{
                border: none;
                padding-left: 0;
            }
        }
    }
    &__records{
        &__progress{
            margin-block: 20px;
            &__text{
                margin: 0px;
            }
            &__bar{
                -webkit-appearance: none;
                appearance: none;
                width: 100%;
                height: 8px;
                &::-webkit-progress-bar {
                    background-color: var(--lighter_color);
                    border: $border_default;
                    border-radius: 20px;
                    overflow: hidden;
                }
                &::-webkit-progress-value {
                    background-image: var(--main_gradient);
                }
            }
        }
        &__points{
            display: flex;
            justify-content: space-between;
            overflow-x:auto;
            &__item{
                border-left: 1px dashed var(--lighter_grey);
                padding-inline: 16px;
                &:first-child{
                    border: none;
                    padding-left: 0;
                }
                
                .status-icon{
                    width: 28px;
                    aspect-ratio: 1;
                    border-radius: 8px;
                    color: var(--pure_white);
                    margin-bottom: 12px;
                    background-color: var(--blue);
                    font-size: $size_24px;
                }
                time{
                    color: var(--darker_color);
                    font-size: $size_14px;
                    font-weight: 500;
                }
                small{
                    font-size: $size_12px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 4px;
                    i{
                        font-size: $size_20px;
                    }
                }
                &.enter{
                    .status-icon{
                        background-color: var(--blue);
                    }
                }
                &.leave{
                    .status-icon{
                        background-color: var(--light_grey);
                        rotate: 180deg;
                    }
                }
            }
        }
    }
}
</style>