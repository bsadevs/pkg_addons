<template>
    <BsaContainer title="Notifications & Alerts" description="Toast notifications, badges, and notification modals">
        <div class="space-y-6">
            <!-- Toast Notifications -->
            <BsaCard title="Toast Notifications / Snackbar">
                <div class="space-y-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Click buttons to show different toast notifications
                    </p>

                    <BsaButtonPanel align="left" wrap>
                        <BsaButtonDefault label="Success Toast" variant="success" icon="pi pi-check"
                            @click="showSuccessToast" />
                        <BsaButtonDefault label="Error Toast" variant="danger" icon="pi pi-times"
                            @click="showErrorToast" />
                        <BsaButtonDefault label="Warning Toast" variant="warning" icon="pi pi-exclamation-triangle"
                            @click="showWarningToast" />
                        <BsaButtonDefault label="Info Toast" variant="info" icon="pi pi-info-circle"
                            @click="showInfoToast" />
                    </BsaButtonPanel>

                    <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                        <p class="text-sm text-blue-800 dark:text-blue-100">
                            <i class="pi pi-info-circle mr-2"></i>
                            Toasts will appear in the top-right corner with auto-dismiss and progress bar
                        </p>
                    </div>
                </div>
            </BsaCard>

            <!-- Notification Badge -->
            <BsaCard title="Notification Badge">
                <div class="space-y-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Notification and message icons with badge counters
                    </p>

                    <div class="flex items-center gap-4 flex-wrap">
                        <!-- Alert Notifications -->
                        <BsaNotificationBadge :count="notificationCount" icon="pi pi-bell"
                            @click="showNotificationModal = true" />

                        <BsaNotificationBadge :count="5" icon="pi pi-bell" size="sm"
                            @click="showNotificationModal = true" />

                        <BsaNotificationBadge :count="100" icon="pi pi-bell" size="lg" pulse
                            @click="showNotificationModal = true" />

                        <!-- Message Notifications -->
                        <BsaNotificationBadge :count="messageCount" icon="pi pi-envelope"
                            @click="showMessageModal = true" />

                        <BsaNotificationBadge :count="0" icon="pi pi-envelope" show-dot ping
                            @click="showMessageModal = true" />
                    </div>

                    <BsaButtonPanel align="left" gap="lg">
                        <BsaButtonDefault label="Add Notification" icon="pi pi-plus" size="sm"
                            @click="addDemoNotification" />
                        <BsaButtonDefault label="Add Message" icon="pi pi-envelope" variant="info" size="sm"
                            @click="addDemoMessage" />
                        <BsaButtonDefault label="Reset Counts" variant="secondary" size="sm" outlined
                            @click="resetCounts" />
                    </BsaButtonPanel>
                </div>
            </BsaCard>

            <!-- Avatars -->
            <BsaCard title="Avatar Components">
                <div class="space-y-6">
                    <!-- User Avatars with Images -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">User Avatars (with
                            images)</h4>
                        <div class="flex items-center gap-4 flex-wrap">
                            <BsaAvatar src="https://i.pravatar.cc/150?img=1" name="John Doe" size="xs" />
                            <BsaAvatar src="https://i.pravatar.cc/150?img=5" name="Jane Smith" size="sm" />
                            <BsaAvatar src="https://i.pravatar.cc/150?img=8" name="Bob Johnson" size="md" />
                            <BsaAvatar src="https://i.pravatar.cc/150?img=9" name="Alice Williams" size="lg" />
                            <BsaAvatar src="https://i.pravatar.cc/150?img=12" name="Charlie Brown" size="xl" />
                            <BsaAvatar src="https://i.pravatar.cc/150?img=16" name="Diana Prince" size="2xl" />
                        </div>
                    </div>

                    <!-- Avatars with Status -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">Avatars with Status</h4>
                        <div class="flex items-center gap-4 flex-wrap">
                            <BsaAvatar name="Online User" status="online" size="lg" />
                            <BsaAvatar name="Offline User" status="offline" size="lg" />
                            <BsaAvatar name="Away User" status="away" size="lg" />
                            <BsaAvatar name="Busy User" status="busy" size="lg" />
                        </div>
                    </div>

                    <!-- Icon Avatars -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">Icon Avatars</h4>
                        <div class="flex items-center gap-4 flex-wrap">
                            <BsaAvatar icon="pi pi-user" size="md" />
                            <BsaAvatar icon="pi pi-bell" size="md" color="bg-warning-100 text-warning-600" />
                            <BsaAvatar icon="pi pi-exclamation-triangle" size="md"
                                color="bg-danger-100 text-danger-600" />
                            <BsaAvatar icon="pi pi-info-circle" size="md" color="bg-blue-100 text-blue-600" />
                        </div>
                    </div>

                    <!-- Avatars with Badges -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">Avatars with
                            Notification Badges</h4>
                        <div class="flex items-center gap-4 flex-wrap">
                            <BsaAvatar name="User" size="lg" :badge="3" />
                            <BsaAvatar name="User" size="lg" :badge="99" />
                            <BsaAvatar name="User" size="lg" :badge="150" />
                        </div>
                    </div>

                    <!-- Different Shapes -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">Different Shapes</h4>
                        <div class="flex items-center gap-4 flex-wrap">
                            <BsaAvatar name="Circle" size="lg" shape="circle" />
                            <BsaAvatar name="Rounded" size="lg" shape="rounded" />
                            <BsaAvatar name="Square" size="lg" shape="square" />
                        </div>
                    </div>
                </div>
            </BsaCard>

            <!-- User Menu -->
            <BsaCard title="User Menu / Settings Dropdown">
                <div class="space-y-4">
                    <p class="text-sm text-gray-600 mb-4">
                        Click the avatar to open user settings menu or click avatar image for custom modal
                    </p>

                    <div class="flex items-center gap-4 flex-wrap">
                        <div class="inline-block">
                            <BsaUserMenu :user="{
                                name: 'John Doe',
                                email: 'john.doe@example.com',
                                avatar: 'https://i.pravatar.cc/150?img=33',
                                status: 'online'
                            }" @menu-item-click="handleMenuClick" />
                        </div>

                        <BsaAvatar src="https://i.pravatar.cc/150?img=33" name="John Doe" size="lg" status="online"
                            clickable @click="showUserModal = true" />
                    </div>

                    <div v-if="lastAction" class="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p class="text-sm text-gray-700 dark:text-gray-300">
                            Last action: <span class="font-semibold">{{ lastAction }}</span>
                        </p>
                    </div>
                </div>
            </BsaCard>
        </div>

        <!-- Alert Notification Modal -->
        <BsaNotificationModal v-model="showNotificationModal" :notifications="mockNotifications"
            @notification-click="handleNotificationClick" @mark-as-read="markNotificationAsRead"
            @mark-all-as-read="markAllAsRead" @clear-all="clearAllNotifications" />

        <!-- Message Notification Modal -->
        <BsaModalDialog v-model="showMessageModal" title="Messages" size="md" :show-footer="false">
            <div class="space-y-1">
                <div v-if="mockMessages.length === 0" class="text-center py-8">
                    <i class="pi pi-envelope text-4xl text-gray-300 dark:text-gray-600 mb-3"></i>
                    <p class="text-gray-500 dark:text-gray-400">No messages</p>
                </div>

                <div v-for="message in mockMessages" :key="message.id" :class="[
                    'flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer',
                    { 'bg-blue-50 dark:bg-blue-900': !message.read }
                ]" @click="markMessageAsRead(message.id)">
                    <BsaAvatar :src="message.user.avatar" :name="message.user.name" size="md" />
                    <div class="flex-1 min-w-0">
                        <div class="flex items-start justify-between gap-2">
                            <div class="flex-1">
                                <p class="font-medium text-sm text-gray-900 dark:text-gray-100">
                                    {{ message.user.name }}
                                </p>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                                    {{ message.message }}
                                </p>
                            </div>
                            <button v-if="!message.read" class="flex-shrink-0 w-2 h-2 rounded-full bg-primary-600"
                                title="Mark as read" @click.stop="markMessageAsRead(message.id)"></button>
                        </div>
                        <p class="text-xs text-gray-400 mt-1">
                            {{ formatTime(message.timestamp) }}
                        </p>
                    </div>
                </div>
            </div>
        </BsaModalDialog>

        <!-- User Profile Modal -->
        <BsaModalDialog v-model="showUserModal" title="User Profile" size="md" :show-footer="false">
            <div class="text-center py-4">
                <BsaAvatar src="https://i.pravatar.cc/150?img=33" name="John Doe" size="2xl" status="online"
                    class="mx-auto mb-4" />
                <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">John Doe</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>

                <div class="mt-6 space-y-2">
                    <button
                        class="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        @click="handleModalAction('profile')">
                        <i class="pi pi-user text-primary-600 dark:text-primary-400"></i>
                        <span class="font-medium text-gray-900 dark:text-gray-100">View Profile</span>
                    </button>
                    <button
                        class="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        @click="handleModalAction('settings')">
                        <i class="pi pi-cog text-gray-600 dark:text-gray-300"></i>
                        <span class="font-medium text-gray-900 dark:text-gray-100">Account Settings</span>
                    </button>
                    <button
                        class="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        @click="handleModalAction('preferences')">
                        <i class="pi pi-sliders-h text-gray-600 dark:text-gray-300"></i>
                        <span class="font-medium text-gray-900 dark:text-gray-100">Preferences</span>
                    </button>
                    <button
                        class="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        @click="handleModalAction('support')">
                        <i class="pi pi-question-circle text-gray-600 dark:text-gray-300"></i>
                        <span class="font-medium text-gray-900 dark:text-gray-100">Help & Support</span>
                    </button>
                    <button
                        class="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-danger-50 rounded-lg transition-colors text-danger-600"
                        @click="handleModalAction('logout')">
                        <i class="pi pi-sign-out"></i>
                        <span class="font-medium">Log Out</span>
                    </button>
                </div>
            </div>
        </BsaModalDialog>

        <!-- Snackbar Container -->
        <BsaSnackbar ref="snackbarRef" position="top-right" />
    </BsaContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { BsaContainer, BsaCard, BsaButtonDefault, BsaButtonPanel, BsaModalDialog } from '@bsasolutions/pkg_coreui';
import BsaAvatar from '@/components/avatars/BsaAvatar.vue'
import BsaSnackbar from '@/components/notifications/BsaSnackbar.vue'
import BsaNotificationBadge from '@/components/notifications/BsaNotificationBadge.vue'
import BsaNotificationModal from '@/components/notifications/BsaNotificationModal.vue'
import BsaUserMenu from '@/components/menus/BsaUserMenu.vue'
import { useToast } from '@/composables/notifications/useToast'
import type { Notification } from '@/components/notifications/BsaNotificationModal.vue'

const { setSnackbarRef, success, error, warning, info } = useToast()
const snackbarRef = ref()

const showNotificationModal = ref(false)
const showMessageModal = ref(false)
const showUserModal = ref(false)
const notificationCount = ref(3)
const messageCount = ref(2)
const lastAction = ref('')

const mockNotifications = ref<Notification[]>([
    {
        id: '1',
        user: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=5' },
        message: 'liked your post',
        timestamp: new Date(Date.now() - 5 * 60000),
        read: false
    },
    {
        id: '2',
        user: { name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=8' },
        message: 'commented on your photo',
        timestamp: new Date(Date.now() - 30 * 60000),
        read: false
    },
    {
        id: '3',
        user: { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=9' },
        message: 'sent you a friend request',
        timestamp: new Date(Date.now() - 2 * 3600000),
        read: true
    }
])

const mockMessages = ref<Notification[]>([
    {
        id: 'm1',
        user: { name: 'Alex Turner', avatar: 'https://i.pravatar.cc/150?img=12' },
        message: 'Hey! Are we still meeting tomorrow?',
        timestamp: new Date(Date.now() - 10 * 60000),
        read: false
    },
    {
        id: 'm2',
        user: { name: 'Jessica Lee', avatar: 'https://i.pravatar.cc/150?img=16' },
        message: 'Thanks for your help with the project!',
        timestamp: new Date(Date.now() - 45 * 60000),
        read: false
    }
])

const formatTime = (timestamp: Date | string): string => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`

    return date.toLocaleDateString()
}

onMounted(() => {
    setSnackbarRef(snackbarRef.value)
})

const showSuccessToast = () => {
    success('Operation completed successfully!', 'Success')
}

const showErrorToast = () => {
    error('An error occurred. Please try again.', 'Error')
}

const showWarningToast = () => {
    warning('Please review your input before proceeding.', 'Warning')
}

const showInfoToast = () => {
    info('Your session will expire in 5 minutes.', 'Information')
}

const addDemoNotification = () => {
    notificationCount.value++
    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']
    const avatars = [1, 2, 3, 4, 6, 7, 10, 11, 13, 14]
    const actions = ['liked your post', 'commented on your photo', 'shared your article', 'mentioned you']

    mockNotifications.value.unshift({
        id: Date.now().toString(),
        user: {
            name: names[Math.floor(Math.random() * names.length)],
            avatar: `https://i.pravatar.cc/150?img=${avatars[Math.floor(Math.random() * avatars.length)]}`
        },
        message: actions[Math.floor(Math.random() * actions.length)],
        timestamp: new Date(),
        read: false
    })

    info('New notification received!', 'Notification')
}

const addDemoMessage = () => {
    messageCount.value++
    const names = ['Tom Wilson', 'Lisa Anderson', 'David Martinez', 'Emma Thompson']
    const avatars = [17, 18, 19, 20, 21, 22, 23, 24]
    const messages = ['Can you review my code?', 'Meeting at 3 PM today', 'Great work on the presentation!', 'Let\'s catch up soon']

    mockMessages.value.unshift({
        id: `m${Date.now()}`,
        user: {
            name: names[Math.floor(Math.random() * names.length)],
            avatar: `https://i.pravatar.cc/150?img=${avatars[Math.floor(Math.random() * avatars.length)]}`
        },
        message: messages[Math.floor(Math.random() * messages.length)],
        timestamp: new Date(),
        read: false
    })

    info('New message received!', 'Message')
}

const resetCounts = () => {
    notificationCount.value = 0
    messageCount.value = 0
}

const handleNotificationClick = (notification: Notification) => {
    console.log('Notification clicked:', notification)
}

const markNotificationAsRead = (id: string) => {
    const notification = mockNotifications.value.find(n => n.id === id)
    if (notification) {
        notification.read = true
        notificationCount.value = Math.max(0, notificationCount.value - 1)
    }
}

const markAllAsRead = () => {
    mockNotifications.value.forEach(n => {
        n.read = true
    })
    notificationCount.value = 0
}

const clearAllNotifications = () => {
    mockNotifications.value = []
    notificationCount.value = 0
    showNotificationModal.value = false
}

const markMessageAsRead = (id: string) => {
    const message = mockMessages.value.find(m => m.id === id)
    if (message && !message.read) {
        message.read = true
        messageCount.value = Math.max(0, messageCount.value - 1)
    }
}

const handleMenuClick = (action: string) => {
    lastAction.value = action
    console.log('Menu action:', action)

    if (action === 'logout') {
        warning('Logging out...', 'Logout')
    } else {
        info(`Opening ${action}...`, action)
    }
}

const handleModalAction = (action: string) => {
    lastAction.value = action
    showUserModal.value = false

    if (action === 'logout') {
        warning('Logging out...', 'Logout')
    } else {
        info(`Opening ${action}...`, action)
    }
}

// Avatar size classes for outline avatars
const sizeClasses: Record<string, string> = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
}

const iconSizeClasses: Record<string, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl',
    '2xl': 'text-3xl'
}
</script>
