<template>
    <div>
        Salam
    </div>
</template>
<script setup>
import { useCheckStore } from "../stores/CheckStore"
let CheckStore = useCheckStore()

CheckStore.ShowComponent()
</script>