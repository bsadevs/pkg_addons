<template>
    <Teleport to="body">
        <div class="bsa-snackbar-container fixed z-50" :class="positionClasses">
            <TransitionGroup name="snackbar">
                <div v-for="snackbar in snackbars" :key="snackbar.id" :class="[
                    'bsa-snackbar rounded-lg shadow-lg p-4 mb-3 flex items-start gap-3 min-w-[300px] max-w-[500px] transition-colors duration-300',
                    variantClasses[snackbar.variant || 'info'],
                    darkModeClasses[snackbar.variant || 'info'],
                ]">
                    <!-- Icon -->
                    <div class="flex items-center shrink-0 mt-0.5">
                        <i :class="[iconMap[snackbar.variant || 'info'], 'text-xl text-white']"></i>
                    </div>

                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                        <h4 v-if="snackbar.title" class="font-semibold mb-1 text-white">
                            {{ snackbar.title }}
                        </h4>
                        <p class="text-sm text-white">{{ snackbar.message }}</p>

                        <!-- Progress Bar -->
                        <div v-if="snackbar.showProgress"
                            class="mt-2 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
                            <div class="h-full bg-white transition-all ease-linear duration-100"
                                :style="{ width: getProgress(snackbar) + '%' }"></div>
                        </div>
                    </div>

                    <!-- Close Button -->
                    <button v-if="snackbar.closable !== false"
                        class="flex items-center shrink-0 hover:opacity-80 text-white" @click="close(snackbar.id)">
                        <i class="pi pi-times"></i>
                    </button>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onUnmounted } from 'vue';

export interface Snackbar {
    id: string;
    message: string;
    title?: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    closable?: boolean;
    showProgress?: boolean;
    createdAt?: number;
}

interface Props {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const props = withDefaults(defineProps<Props>(), {
    position: 'top-right',
});

const snackbars = ref<Snackbar[]>([]);
let timers: Map<string, ReturnType<typeof setTimeout>> = new Map();
let progressInterval: ReturnType<typeof setInterval> | null = null;

const positionClasses = computed(() => {
    const positions = {
        'top-left': 'top-4 left-4',
        'top-center': 'top-4 left-1/2 -translate-x-1/2',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
        'bottom-right': 'bottom-4 right-4',
    };
    return positions[props.position];
});

const variantClasses = {
    success: 'bg-success-600 text-white',
    error: 'bg-danger-600 text-white',
    warning: 'bg-warning-600 text-white',
    info: 'bg-blue-600 text-white',
};

const darkModeClasses = {
    success: 'dark:bg-success-700 dark:text-white',
    error: 'dark:bg-danger-700 dark:text-white',
    warning: 'dark:bg-warning-700 dark:text-white',
    info: 'dark:bg-blue-700 dark:text-white',
};

const iconMap = {
    success: 'pi pi-check-circle',
    error: 'pi pi-times-circle',
    warning: 'pi pi-exclamation-triangle',
    info: 'pi pi-info-circle',
};

const add = (snackbar: Omit<Snackbar, 'id' | 'createdAt'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newSnackbar: Snackbar = {
        ...snackbar,
        id,
        createdAt: Date.now(),
        duration: snackbar.duration || 5000,
    };

    snackbars.value.push(newSnackbar);

    if (newSnackbar.duration && newSnackbar.duration > 0) {
        const timer = setTimeout(() => {
            close(id);
        }, newSnackbar.duration);
        timers.set(id, timer);
    }

    // Start progress animation if not already running
    if (!progressInterval && newSnackbar.showProgress) {
        progressInterval = setInterval(() => {
            // Force reactivity update for progress bars
            snackbars.value = [...snackbars.value];
        }, 100); // Update every 100ms for smooth animation
    }
};

const close = (id: string) => {
    const index = snackbars.value.findIndex((s) => s.id === id);
    if (index > -1) {
        snackbars.value.splice(index, 1);
    }

    const timer = timers.get(id);
    if (timer) {
        clearTimeout(timer);
        timers.delete(id);
    }
};

const getProgress = (snackbar: Snackbar): number => {
    if (!snackbar.createdAt || !snackbar.duration) return 100;
    const elapsed = Date.now() - snackbar.createdAt;
    return Math.max(0, 100 - (elapsed / snackbar.duration) * 100);
};

onUnmounted(() => {
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
});

defineExpose({ add, close });
</script>

<style>
.snackbar-enter-active,
.snackbar-leave-active {
    transition: all 0.3s ease;
}

.snackbar-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.snackbar-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>
