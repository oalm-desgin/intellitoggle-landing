<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      style="background: rgba(0, 0, 0, 0.75);"
      @click.self="handleClose"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <!-- Modal Card -->
      <div
        ref="modalRef"
        class="bg-white rounded-lg shadow-xl w-full max-w-md relative focus:outline-none"
        @keydown.esc="handleClose"
        @keydown.tab="handleTab"
      >
        <!-- Close Button -->
        <button
          ref="closeButtonRef"
          type="button"
          @click="handleClose"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 rounded-full p-1 transition-colors"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Modal Content -->
        <div class="p-8">
          <!-- Title -->
          <h2
            id="modal-title"
            class="text-2xl font-bold mb-2"
            style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            Join AI Early Access
          </h2>
          
          <!-- Description -->
          <p id="modal-description" class="text-gray-600 mb-6">
            Be the first to try out our new AI features. Enter your email to get early access.
          </p>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Email Input -->
            <div>
              <label for="email-input" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div class="relative">
                <input
                  ref="emailInputRef"
                  id="email-input"
                  v-model="email"
                  type="email"
                  required
                  autocomplete="email"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors',
                    emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-purple',
                    emailValid && email ? 'border-green-500' : ''
                  ]"
                  placeholder="you@example.com"
                  :aria-invalid="emailError ? 'true' : 'false'"
                  :aria-describedby="emailError || suggestedDomain ? 'email-error email-suggestion' : ''"
                  @blur="validateEmail"
                  @input="clearErrors"
                />
                <!-- Validation Icon -->
                <div v-if="email && !emailError" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg v-if="emailValid" class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <!-- Error Message -->
              <p
                v-if="emailError"
                id="email-error"
                class="mt-2 text-sm text-red-600"
                role="alert"
              >
                {{ emailError }}
              </p>

              <!-- Typo Suggestion Banner -->
              <div
                v-if="suggestedDomain"
                id="email-suggestion"
                class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg"
                role="alert"
              >
                <div class="flex items-center justify-between">
                  <p class="text-sm text-blue-800">
                    Did you mean <strong>@{{ suggestedDomain }}</strong>?
                  </p>
                  <button
                    type="button"
                    @click="applySuggestion"
                    class="text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                  >
                    Fix
                  </button>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              ref="submitButtonRef"
              type="submit"
              :disabled="isSubmitting || !emailValid"
              class="w-full bg-brand-gold text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            >
              <span v-if="!isSubmitting">
                <span
                  style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
                >
                  Join Early Access
                </span>
              </span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const emit = defineEmits(['close'])

// Refs
const modalRef = ref(null)
const emailInputRef = ref(null)
const closeButtonRef = ref(null)
const submitButtonRef = ref(null)
const previousActiveElement = ref(null)

// State
const email = ref('')
const emailError = ref('')
const emailValid = ref(false)
const suggestedDomain = ref('')
const isSubmitting = ref(false)

// Common domain typos
const commonDomainTypos = {
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gmil.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'outlokc.com': 'outlook.com',
  'yahooo.com': 'yahoo.com',
  'yaho.com': 'yahoo.com',
  'yahoo.com.com': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'hotmali.com': 'hotmail.com',
  'protonmai.com': 'protonmail.com',
  'protonmial.com': 'protonmail.com'
}

// Email validation
const validateEmail = () => {
  emailError.value = ''
  suggestedDomain.value = ''
  emailValid.value = false

  if (!email.value) {
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return
  }

  // Extract domain
  const domain = email.value.split('@')[1]?.toLowerCase()
  
  if (!domain) {
    emailError.value = 'Please enter a valid email address'
    return
  }

  // Check for typos
  if (commonDomainTypos[domain]) {
    suggestedDomain.value = commonDomainTypos[domain]
    emailError.value = 'Did you mean @' + commonDomainTypos[domain] + '?'
    return
  }

  // Valid email
  emailValid.value = true
}

const clearErrors = () => {
  if (emailError.value && !suggestedDomain.value) {
    emailError.value = ''
  }
}

const applySuggestion = () => {
  if (suggestedDomain.value) {
    const localPart = email.value.split('@')[0]
    email.value = localPart + '@' + suggestedDomain.value
    suggestedDomain.value = ''
    emailError.value = ''
    emailValid.value = true
    // Focus back on input
    nextTick(() => {
      emailInputRef.value?.focus()
    })
  }
}

// Focus trap
const handleTab = (e) => {
  const focusableElements = [
    emailInputRef.value,
    submitButtonRef.value,
    closeButtonRef.value
  ].filter(el => el && !el.disabled)

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (e.shiftKey) {
    // Shift + Tab
    if (document.activeElement === firstElement) {
      e.preventDefault()
      lastElement?.focus()
    }
  } else {
    // Tab
    if (document.activeElement === lastElement) {
      e.preventDefault()
      firstElement?.focus()
    }
  }
}

// Close handler
const handleClose = () => {
  // Return focus to previous element
  if (previousActiveElement.value && typeof previousActiveElement.value.focus === 'function') {
    previousActiveElement.value.focus()
  }
  emit('close')
}

// Submit handler
const handleSubmit = async () => {
  if (!emailValid.value || isSubmitting.value) {
    return
  }

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('lead_capture_joined', 'true')
    localStorage.setItem('lead_capture_email', email.value)
    localStorage.setItem('lead_capture_timestamp', Date.now().toString())
  }

  isSubmitting.value = false

  // Close modal after success
  setTimeout(() => {
    handleClose()
  }, 500)
}

// Body scroll lock
const lockBodyScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const unlockBodyScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

// Lifecycle
onMounted(() => {
  // Store previous active element
  previousActiveElement.value = document.activeElement

  // Lock body scroll
  lockBodyScroll()

  // Focus email input
  nextTick(() => {
    emailInputRef.value?.focus()
  })

  // Prevent ESC from bubbling
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
    }
  }
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  unlockBodyScroll()
})
</script>

