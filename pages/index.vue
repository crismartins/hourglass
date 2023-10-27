<template>
    <div class="dashboard">
        <h1 class="primary-title dashboard__title">
            <AppIcon IconName="mdi:greeting" /> 
            Good Afternoon Cristopher, It’s time to work!
        </h1>
        <div class="dashboard__data">
            <DashboardToday />
            <div class="dashboard__data__statuses">
                <DashboardWorkedHours />
                <DashboardEarnings />
            </div>
            <div class="dashboard__data__records">
                <DashboardHistory />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.dashboard{
    display: flex;
    gap: 40px;
    flex-direction: column;
    &__title{
        i{
            display: inline-block;
            color: var(--light_grey);
        }
    }
    &__data{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        &__statuses{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        &__records{
            grid-column: 1/ span 2;
        }
    }
}
</style>