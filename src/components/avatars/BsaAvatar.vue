<template>
    <div :class="[
        'bsa-avatar inline-flex items-center justify-center overflow-hidden',
        shapeClasses,
        sizeClasses,
        statusClasses,
        { 'cursor-pointer hover:opacity-80 transition-opacity': clickable },
    ]" @click="onClick">
        <!-- Image Avatar -->
        <img v-if="src" :src="src" :alt="alt || name" class="w-full h-full object-cover" />

        <!-- Icon Avatar -->
        <i v-else-if="icon" :class="[icon, iconSizeClasses]"></i>

        <!-- Name Initials Avatar -->
        <span v-else-if="name" :class="['font-semibold', textSizeClasses]">
            {{ initials }}
        </span>

        <!-- Default User Icon -->
        <i v-else :class="['pi pi-user', iconSizeClasses]"></i>

        <!-- Status Badge -->
        <span v-if="status" :class="[
            'absolute rounded-full border-2 border-white dark:border-gray-800',
            statusBadgeClasses,
            statusPositionClasses,
        ]"></span>

        <!-- Notification Badge -->
        <span v-if="badge" :class="[
            'absolute rounded-full bg-danger-500 text-white text-xs font-bold flex items-center justify-center',
            badgeSizeClasses,
            badgePositionClasses,
        ]">
            {{ badge > 99 ? '99+' : badge }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    src?: string;
    name?: string;
    alt?: string;
    icon?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    shape?: 'circle' | 'square' | 'rounded';
    status?: 'online' | 'offline' | 'away' | 'busy';
    badge?: number;
    color?: string;
    clickable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    shape: 'circle',
    clickable: false,
});

const emit = defineEmits<{
    click: [event: MouseEvent];
}>();

const sizeClasses = computed(() => {
    const sizes = {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
        '2xl': 'w-24 h-24',
    };
    return sizes[props.size];
});

const shapeClasses = computed(() => {
    if (props.shape === 'circle') return 'rounded-full';
    if (props.shape === 'rounded') return 'rounded-lg';
    return 'rounded-none';
});

const statusClasses = computed(() => {
    if (props.src || props.name) return '';

    const colorMap = {
        online: 'bg-success-100 dark:bg-success-900 text-success-600 dark:text-success-400',
        offline: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
        away: 'bg-warning-100 dark:bg-warning-900 text-warning-600 dark:text-warning-400',
        busy: 'bg-danger-100 dark:bg-danger-900 text-danger-600 dark:text-danger-400',
    };

    if (props.status && colorMap[props.status]) {
        return colorMap[props.status];
    }

    return props.color || 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400';
});

const iconSizeClasses = computed(() => {
    const sizes = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-4xl',
    };
    return sizes[props.size];
});

const textSizeClasses = computed(() => {
    const sizes = {
        xs: 'text-[8px]',
        sm: 'text-[10px]',
        md: 'text-xs',
        lg: 'text-sm',
        xl: 'text-base',
        '2xl': 'text-2xl',
    };
    return sizes[props.size];
});

const initials = computed(() => {
    if (!props.name) return '';
    const names = props.name.split(' ');
    if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
});

const statusBadgeClasses = computed(() => {
    const colors = {
        online: 'bg-success-500',
        offline: 'bg-gray-400',
        away: 'bg-warning-500',
        busy: 'bg-danger-500',
    };
    return colors[props.status || 'offline'];
});

const statusPositionClasses = computed(() => {
    const positions = {
        xs: 'w-1.5 h-1.5 -bottom-0 -right-0',
        sm: 'w-2 h-2 -bottom-0 -right-0',
        md: 'w-2.5 h-2.5 -bottom-0.5 -right-0.5',
        lg: 'w-3 h-3 -bottom-0.5 -right-0.5',
        xl: 'w-4 h-4 -bottom-1 -right-1',
        '2xl': 'w-5 h-5 -bottom-1 -right-1',
    };
    return positions[props.size];
});

const badgeSizeClasses = computed(() => {
    const sizes = {
        xs: 'w-3 h-3 text-[8px]',
        sm: 'w-4 h-4 text-[9px]',
        md: 'w-5 h-5 text-[10px]',
        lg: 'w-6 h-6 text-xs',
        xl: 'w-7 h-7 text-xs',
        '2xl': 'w-8 h-8 text-sm',
    };
    return sizes[props.size];
});

const badgePositionClasses = computed(() => {
    const positions = {
        xs: '-top-1 -right-1',
        sm: '-top-1 -right-1',
        md: '-top-1.5 -right-1.5',
        lg: '-top-2 -right-2',
        xl: '-top-2 -right-2',
        '2xl': '-top-3 -right-3',
    };
    return positions[props.size];
});

const onClick = (event: MouseEvent) => {
    if (props.clickable) {
        emit('click', event);
    }
};
</script>

<style>
.bsa-avatar {
    position: relative;
}
</style>
