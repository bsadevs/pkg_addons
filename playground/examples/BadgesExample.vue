<script setup lang="ts">
import { BsaAvatar } from '@/components';
import { BsaUserMenu } from '@/components';
</script>

<template>
    <div class="flex flex-col gap-4">
        <BsaAvatar />
        <BsaUserMenu :user="{ name: 'John', email: 'jhon@mail.com', avatar: 'assets/images/user.png' }" />
    </div>
</template>
