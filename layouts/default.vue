<template>
    <div class="app__container">
        <TheSidebar />

        <main class="app__container__main">
            <TheHeader />
            <div class="app__container__main__page">
                <slot/>
            </div>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app__container{
    max-height: 100vh;
    max-height: 100dvh;
    display: grid;
    grid-template-columns: 240px 1fr;
    &__main{
        max-height: 100vh;
        max-height: 100dvh;
        display: flex;
        flex-direction: column;
        &__page{
            padding: 28px 40px;
        }
    }
}
</style>