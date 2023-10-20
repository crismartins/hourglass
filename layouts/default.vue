<template>
    <div class="app__container">
        <TheSidebar />

        <main class="app__container__main">
            <TheHeader />
            <slot/>
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
}
</style>