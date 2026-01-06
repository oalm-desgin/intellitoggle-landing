<template>
  <section class="px-[27px] md:px-[120px] py-12 md:py-20 relative overflow-hidden" style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); min-height: 1100px;">
    <!-- Bottom white overlay for smooth transition into Trusted section -->
    <div
      class="absolute bottom-0 left-0 right-0 pointer-events-none"
      style="height: 45%; background: #FFFFFF; z-index: 1;"
      aria-hidden="true"
    ></div>

    <!-- Background Vector from Figma - Provides the straight diagonal cut and grey area (rendered above white overlay) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" style="z-index: 2;">
      <img
        src="/vector-hero.svg"
        alt=""
        class="w-full h-full object-cover object-top"
        aria-hidden="true"
      />
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Hero Content -->
      <div class="text-center mb-8 md:mb-12">
        <!-- Hero headline frame (everything down through "Starting at…") -->
        <img
          src="/dart native frame.png"
          alt="The First Dart-Native Feature Flag With DartCodeAI"
          class="mx-auto mb-6 w-full h-auto"
          style="max-width: 1480px;"
        />

        <!-- Validity - moved above buttons -->
        <p class="text-gray-300 text-sm mb-4">
          Valid till 15th September,2025
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <!-- Get Access Button - 260x43px, gold bg, gradient text -->
          <button
            class="flex items-center justify-center bg-brand-gold rounded-lg hover:bg-brand-gold-hover transition-colors"
            style="width: 260px; height: 43px; padding: 7px 44px; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
          >
            <span 
              class="font-semibold text-xl leading-[100%]"
              style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
            >
              Get Access
            </span>
          </button>
          
          <!-- Join AI Early Access Button - 260x43px, transparent with gold border -->
          <button
            @click="showModal = true"
            class="flex items-center justify-center rounded-lg hover:bg-brand-gold/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            style="width: 260px; height: 43px; padding: 7px 11px; border: 1px solid #F9A71E; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
            :aria-label="hasJoined ? 'Already joined early access' : 'Join AI Early Access'"
          >
            <span class="font-semibold text-xl leading-[100%] text-brand-gold">
              {{ hasJoined ? 'Joined ✓' : 'Join AI Early Access' }}
            </span>
          </button>
        </div>
      </div>

      <!-- Hero Image with Blurred Backdrop -->
      <div class="flex justify-center relative mt-12 mb-16 md:mb-20" style="min-height: 900px;">
        <!-- Blurred backdrop - same aspect/dimensions as GIF, scaled up slightly -->
        <div 
          class="absolute hidden md:block overflow-hidden"
          style="width: 1280px; height: 632px; border-radius: 16px; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.08); box-shadow: 0px 0px 10px 10px #0000000D; z-index: 1;"
        >
          <img
            src="/blur pic.png"
            alt=""
            style="position: absolute; left: 50%; top: 50%; width: 1280px; height: 632px; transform: translate(-50%, -50%); object-fit: cover; object-position: center; filter: blur(10px); opacity: 0.55;"
            aria-hidden="true"
          />
        </div>
        
        <!-- Dashboard GIF wrapper with relative positioning for the demo overlay -->
        <div 
          class="relative z-10 inline-block"
          :class="{ 'animate-rumble': isRumbling }"
          @animationend="isRumbling = false"
        >
          <img
            src="/a16a54c0ed5f6f51ebdf88e460f46b7aecc8dbfd.gif"
            alt="IntelliToggle Dashboard"
            style="width: 1280px; height: 632px; max-width: min(1280px, calc(100vw - 140px)); object-fit: contain; border-radius: 8px; border: 1px solid #8D8D8D; box-shadow: 0px 0px 20px 20px #0000001A;"
          />
          
          <!-- NEW: Demo overlay - absolute positioned, no flow impact -->
          <FeatureFlagDemo class="hidden md:block" @toggle="triggerRumble" />
        </div>
      </div>
    </div>

    <!-- Lead Capture Modal -->
    <LeadCaptureModal v-if="showModal" @close="handleModalClose" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isRumbling = ref(false)
const showModal = ref(false)
const hasJoined = ref(false)

const triggerRumble = () => {
  isRumbling.value = true
}

// Check localStorage on mount
onMounted(() => {
  checkJoinedStatus()
})

// Check if user has already joined
const checkJoinedStatus = () => {
  if (typeof window !== 'undefined') {
    const joined = localStorage.getItem('lead_capture_joined')
    hasJoined.value = joined === 'true'
  }
}

// Handle modal close and update button state
const handleModalClose = () => {
  showModal.value = false
  checkJoinedStatus()
}
</script>
