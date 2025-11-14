import { ref, type Component } from 'vue'

const snackbarRef = ref<Component | null>(null)

export interface ToastOptions {
  title?: string
  message: string
  variant?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  closable?: boolean
  showProgress?: boolean
}

export function useToast() {
  const setSnackbarRef = (ref: Component | null) => {
    snackbarRef.value = ref
  }

  const show = (options: ToastOptions) => {
    if (snackbarRef.value && 'add' in snackbarRef.value) {
      ;(snackbarRef.value as any).add(options)
    } else {
      console.warn('Snackbar component not initialized. Make sure BsaSnackbar is in your app.')
    }
  }

  const success = (message: string, title?: string, duration?: number) => {
    show({
      message,
      title,
      variant: 'success',
      duration: duration || 3000,
      showProgress: true
    })
  }

  const error = (message: string, title?: string, duration?: number) => {
    show({
      message,
      title,
      variant: 'error',
      duration: duration || 5000,
      showProgress: true
    })
  }

  const warning = (message: string, title?: string, duration?: number) => {
    show({
      message,
      title,
      variant: 'warning',
      duration: duration || 4000,
      showProgress: true
    })
  }

  const info = (message: string, title?: string, duration?: number) => {
    show({
      message,
      title,
      variant: 'info',
      duration: duration || 3000,
      showProgress: true
    })
  }

  return {
    setSnackbarRef,
    show,
    success,
    error,
    warning,
    info
  }
}

