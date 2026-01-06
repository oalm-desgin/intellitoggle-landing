<template>
  <div
    class="feature-flag-demo transition-all duration-300"
    :style="{
      position: 'absolute',
      bottom: '32px',
      left: '32px',
      width: '280px',
      minHeight: '110px',
      padding: '16px 20px',
      borderRadius: '12px',
      background: newUI ? 'rgba(66, 56, 158, 0.25)' : 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(12px)',
      border: newUI ? '2px solid #84CC16' : '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: newUI ? '0 8px 32px rgba(132, 204, 22, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.2)',
      zIndex: 20,
    }"
  >
    <div class="flex items-center justify-between mb-3">
      <span class="text-white font-semibold" style="font-size: 14px;">
        Live Preview
      </span>
      <button
        @click="toggleFeature"
        class="relative inline-flex items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        :style="toggleButtonStyle"
        aria-label="Toggle New UI feature"
      >
        <span
          class="inline-block rounded-full transition-transform duration-300"
          :style="toggleKnobStyle"
        ></span>
      </button>
    </div>
    
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span
          class="text-white text-xs font-medium transition-opacity duration-300"
          :style="{ opacity: newUI ? 0.5 : 1 }"
        >
          Legacy UI
        </span>
        <span
          class="text-white text-xs font-medium transition-opacity duration-300"
          :style="{ opacity: newUI ? 1 : 0.5 }"
        >
          New UI
        </span>
      </div>
      <div 
        v-if="newUI"
        class="text-xs font-semibold px-2 py-1 rounded"
        style="background: #84CC16; color: white;"
      >
        Active ✓
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const emit = defineEmits(['toggle'])

const newUI = ref(false)
const isVisible = ref(false)

// Toggle button styles
const toggleButtonStyle = computed(() => ({
  width: '48px',
  height: '24px',
  backgroundColor: newUI.value ? '#42389E' : '#6B7280',
  padding: '2px',
}))

// Toggle knob styles
const toggleKnobStyle = computed(() => ({
  width: '20px',
  height: '20px',
  backgroundColor: '#FFFFFF',
  transform: newUI.value ? 'translateX(24px)' : 'translateX(0)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}))

const toggleFeature = () => {
  newUI.value = !newUI.value
  // Persist to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('feature-new-ui', String(newUI.value))
  }
  // Emit event to trigger rumble animation
  emit('toggle')
}

onMounted(() => {
  // Restore state from localStorage
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('feature-new-ui')
    if (saved !== null) {
      newUI.value = saved === 'true'
    }
  }
  
  // Trigger slide-in animation
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
</style>

