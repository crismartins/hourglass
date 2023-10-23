<template>
    <div class="dashboard">
        <h1 class="primary-title dashboard__title">
            <AppIcon IconName="mdi:greeting" /> 
            Good Afternoon Cristopher, It’s time to work!
        </h1>
        <div class="dashboard__data">
            <div class="dashboard__data__today">
                <h2>
                    Today
                </h2>
                <div>
                    <strong>
                        <NuxtTime :datetime="new Date()" hour="numeric" minute="numeric" second="numeric" />
                    </strong>
                </div>
            </div>
            <div class="dashboard__data__records">
                <div class="dashboard__data__records__worked">
                    <header class="dashboard__data__records__worked__header">
                        <h2>
                            Worked Hours
                        </h2>
                        <span>
                            date
                        </span>
                    </header>
                    <div class="dashboard__data__records__worked__body">
                        <ul>
                            <li>
                                <h3>
                                    Absense
                                </h3>
                                <strong>
                                    0:00
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
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
}
</style>