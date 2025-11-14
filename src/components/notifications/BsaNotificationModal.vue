<template>
    <BsaModalDialog v-model="isOpen" title="Notifications" size="md" :show-footer="false">
        <div class="space-y-1">
            <!-- Empty State -->
            <div v-if="notifications.length === 0" class="text-center py-8">
                <i class="pi pi-bell text-4xl text-gray-300 dark:text-gray-600 mb-3"></i>
                <p class="text-gray-500 dark:text-gray-400">No notifications</p>
            </div>

            <!-- Notification List -->
            <div v-for="notification in notifications" :key="notification.id" :class="[
                'flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer',
                { 'bg-blue-50 dark:bg-blue-900/20': !notification.read },
            ]" @click="handleNotificationClick(notification)">
                <!-- Avatar -->
                <BsaAvatar :src="notification.user.avatar" :name="notification.user.name" :icon="notification.icon"
                    size="md" />

                <!-- Content -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2">
                        <div class="flex-1">
                            <p class="font-medium text-sm text-gray-900 dark:text-gray-100">
                                {{ notification.user.name }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                                {{ notification.message }}
                            </p>
                        </div>
                        <button v-if="!notification.read"
                            class="shrink-0 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"
                            title="Mark as read" @click.stop="markAsRead(notification.id)"></button>
                    </div>
                    <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {{ formatTime(notification.timestamp) }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Footer Actions -->
        <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
            <button
                class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                @click="markAllAsRead">
                Mark all as read
            </button>
            <button
                class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 font-medium"
                @click="clearAll">
                Clear all
            </button>
        </div>
    </BsaModalDialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { BsaModalDialog } from '@bsasolutions/pkg_coreui';
import BsaAvatar from '../avatars/BsaAvatar.vue';

export interface Notification {
    id: string;
    user: {
        name: string;
        avatar?: string;
    };
    icon?: string;
    message: string;
    timestamp: Date | string;
    read: boolean;
    type?: 'message' | 'alert' | 'warning' | 'info';
}

interface Props {
    modelValue: boolean;
    notifications: Notification[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
    'update:modelValue': [value: boolean];
    'notification-click': [notification: Notification];
    'mark-as-read': [id: string];
    'mark-all-as-read': [];
    'clear-all': [];
}>();

const isOpen = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});

const handleNotificationClick = (notification: Notification) => {
    emit('notification-click', notification);
    if (!notification.read) {
        emit('mark-as-read', notification.id);
    }
};

const markAsRead = (id: string) => {
    emit('mark-as-read', id);
};

const markAllAsRead = () => {
    emit('mark-all-as-read');
};

const clearAll = () => {
    emit('clear-all');
};

const formatTime = (timestamp: Date | string): string => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString();
};
</script>
