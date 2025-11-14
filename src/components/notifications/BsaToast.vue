<script setup lang="ts">
defineProps({
    title: { type: String, default: 'BsaToast' },
    content: { type: String, default: 'Pending implementation' }
});
</script>

<template>
    <div class="border rounded p-4 shadow">
        <h3 class="font-bold mb-2">{{ title }}</h3>
        <p>{{ content }}</p>
    </div>
</template>
