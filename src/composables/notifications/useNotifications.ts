import { ref, computed } from 'vue'
import type { Notification } from '@/components/notifications/BsaNotificationModal.vue'

export function useNotifications() {
  const notifications = ref<Notification[]>([])

  const unreadCount = computed(() => {
    return notifications.value.filter(n => !n.read).length
  })

  const hasUnread = computed(() => unreadCount.value > 0)

  const addNotification = (notification: Omit<Notification, 'id' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      read: false,
      timestamp: notification.timestamp || new Date()
    }
    notifications.value.unshift(newNotification)
  }

  const markAsRead = (id: string) => {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }

  const markAllAsRead = () => {
    notifications.value.forEach(n => {
      n.read = true
    })
  }

  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearAll = () => {
    notifications.value = []
  }

  const clearRead = () => {
    notifications.value = notifications.value.filter(n => !n.read)
  }

  return {
    notifications,
    unreadCount,
    hasUnread,
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAll,
    clearRead
  }
}






