<script setup lang="ts">
import { BsaChartBar, BsaChartLine, BsaChartPie, BsaGauge, BsaSparkline } from '@/components';
</script>

<template>
    <div class="flex flex-col gap-4">
        <BsaChartBar />
        <BsaChartLine />
        <BsaChartPie />
        <BsaGauge />
        <BsaSparkline />
    </div>
</template>
