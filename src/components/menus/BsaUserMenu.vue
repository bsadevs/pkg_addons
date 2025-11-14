<template>
    <div class="bsa-user-menu relative" ref="menuRef">
        <!-- Trigger -->
        <button
            class="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg px-2 py-1.5 transition-colors"
            @click="toggleMenu">
            <BsaAvatar :src="user?.avatar" :name="user?.name" :status="user?.status" size="md" clickable />
            <div v-if="showName" class="text-left hidden md:block">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ user?.name }}</p>
                <p v-if="user?.email" class="text-xs text-gray-500 dark:text-gray-400">{{ user?.email }}</p>
            </div>
            <i class="pi pi-chevron-down text-xs text-gray-500 dark:text-gray-400 ml-1"></i>
        </button>

        <!-- Dropdown Menu -->
        <Transition name="dropdown">
            <div v-if="isOpen" :class="[
                'absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-1',
                'z-50',
            ]">
                <!-- User Info -->
                <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                    <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ user?.name }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ user?.email }}</p>
                </div>

                <!-- Menu Items -->
                <div class="py-1">
                    <button v-for="item in menuItems" :key="item.label" :class="[
                        'w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                        'hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors',
                        item.variant === 'danger'
                            ? 'text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20'
                            : '',
                    ]" @click="handleItemClick(item)">
                        <i :class="[item.icon, 'text-base']"></i>
                        <span>{{ item.label }}</span>
                    </button>
                </div>

                <!-- Custom Slot -->
                <div v-if="$slots.default" class="border-t border-gray-100 dark:border-gray-700 py-1">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BsaAvatar from '../avatars/BsaAvatar.vue';

export interface User {
    name: string;
    email?: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
}

export interface MenuItem {
    label: string;
    icon: string;
    action: string;
    variant?: 'default' | 'danger';
}

interface Props {
    user: User;
    showName?: boolean;
    menuItems?: MenuItem[];
}

withDefaults(defineProps<Props>(), {
    showName: true,
    menuItems: () => [
        { label: 'My Profile', icon: 'pi pi-user', action: 'profile' },
        { label: 'Account Settings', icon: 'pi pi-cog', action: 'settings' },
        { label: 'Preferences', icon: 'pi pi-sliders-h', action: 'preferences' },
        { label: 'Help & Support', icon: 'pi pi-question-circle', action: 'support' },
        { label: 'Log Out', icon: 'pi pi-sign-out', action: 'logout', variant: 'danger' },
    ],
});

const emit = defineEmits<{
    'menu-item-click': [action: string, item: MenuItem];
}>();

const isOpen = ref(false);
const menuRef = ref<HTMLElement>();

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const handleItemClick = (item: MenuItem) => {
    emit('menu-item-click', item.action, item);
    isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
