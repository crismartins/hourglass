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
                            {{ timeFormated() }}
                        </strong>
                    </span>
                </div>
                <AppButton 
                    class="register" 
                    :class="{ active : trackingTime }"
                    @click="toggleTracking"
                >
                    {{ trackingTime ? 'Take a Break' : 'Start Working'}}
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

const trackingTime = ref(false)

const timeTracked = reactive({
    hours: 0,
    min: 0,
    sec: 0
})

const t = setInterval(() => {
    if(trackingTime.value){
        timeTracked.sec++
        if(timeTracked.sec == 61){
            timeTracked.min++
            timeTracked.sec = 1
            if(timeTracked.min == 61){
                timeTracked.hours++
                timeTracked.min = 1
            }
        }
    }
}, 1000);
    
function timeFormated(){
    let hours = String(timeTracked.hours).padStart(2, '0')
    let minutes = String(timeTracked.min).padStart(2, '0')
    let seconds = String(timeTracked.sec).padStart(2, '0')
    const time = `${hours} : ${minutes} : ${seconds}`
    return time
}

function toggleTracking(){
    trackingTime.value = !trackingTime.value
}

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
                min-width: 140px;
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
            &__switcher{
                background-color: var(--darker_color);
                border-radius: 12px;
                padding: 12px;
                width: 44px;
                aspect-ratio: 1;
                color: var(--lighter_color);
            }
        }
    }
}
</style>