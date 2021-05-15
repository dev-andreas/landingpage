<template>
    <div class="ml-1 w-8 h-8">
        <div class="loading-shape w-full h-full rounded-full">

        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style>
    .loading-shape {
        border: 0.15rem #bbe2ff solid;
        border-bottom: 0.15rem #008fff solid;
        animation: spin 1s linear infinite;
    }
</style>