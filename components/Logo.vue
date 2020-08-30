<template>
    <picture>
        <img src="@/assets/imgs/dnd_ampersant.png" alt="Logo of dnd" />
    </picture>
</template>

<style scoped>
picture {
    animation: 1s appear;
    @apply mx-auto w-40;
}

@keyframes appear {
    0% {
        opacity: 0;
    }
}
</style>
