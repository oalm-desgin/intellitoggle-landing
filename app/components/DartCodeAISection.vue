<template>
  <section 
    class="relative py-16 md:py-24 px-[27px] md:px-[120px] overflow-hidden"
  >
    <!-- Background Image with Purple Tint -->
    <div class="absolute inset-0 z-0">
      <img
        src="/purple dart code ai.jpg"
        alt=""
        class="w-full h-full object-cover"
        aria-hidden="true"
      />
      <!-- Purple overlay/tint -->
      <div 
        class="absolute inset-0"
        style="background: linear-gradient(180deg, rgba(66, 56, 158, 0.6) 0%, rgba(15, 16, 38, 0.8) 100%);"
      ></div>
    </div>

    <div class="relative z-10 max-w-[1680px] mx-auto">
      <!-- Coming Soon Badge - 181x42px, pill shape, gold bg -->
      <div class="flex justify-center mb-6">
        <span 
          class="flex items-center justify-center font-semibold"
          style="width: 181px; height: 42px; padding: 10px 32px; border-radius: 32px; background: #F9A71E;"
        >
          <span 
            class="text-lg leading-[100%]"
            style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            Coming Soon
          </span>
        </span>
      </div>

      <!-- Title - White text -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <!-- AI Feature Cards Grid - 2x2, 660x196px each -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-[1400px] mx-auto">
        <!-- AutoFlag AI -->
        <div 
          class="flex flex-col items-center text-center"
          style="width: 100%; max-width: 660px; height: auto; min-height: 196px; padding: 24px; gap: 32px; border-radius: 12px; border: 0.2px solid #FFFFFF; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);"
        >
          <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <!-- Box Title - Semi Bold 600, white -->
          <h3 
            class="text-xl font-semibold leading-[100%]"
            style="color: #FFFFFF;"
          >
            AutoFlag AI (LLM-Assisted Flag Creation)
          </h3>
          <!-- Box Subtitle - Regular 400, #EDECF6 -->
          <p 
            class="text-base leading-[100%]"
            style="color: #EDECF6; font-weight: 400;"
          >
            Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.
          </p>
        </div>

        <!-- SmartRamp AI -->
        <div 
          class="flex flex-col items-center text-center"
          style="width: 100%; max-width: 660px; height: auto; min-height: 196px; padding: 24px; gap: 32px; border-radius: 12px; border: 0.2px solid #FFFFFF; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);"
        >
          <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h3 
            class="text-xl font-semibold leading-[100%]"
            style="color: #FFFFFF;"
          >
            SmartRamp AI (AI-Driven Rollout Optimization)
          </h3>
          <p 
            class="text-base leading-[100%]"
            style="color: #EDECF6; font-weight: 400;"
          >
            Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.
          </p>
        </div>

        <!-- ExplainFlags AI -->
        <div 
          class="flex flex-col items-center text-center"
          style="width: 100%; max-width: 660px; height: auto; min-height: 196px; padding: 24px; gap: 32px; border-radius: 12px; border: 0.2px solid #FFFFFF; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);"
        >
          <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 
            class="text-xl font-semibold leading-[100%]"
            style="color: #FFFFFF;"
          >
            ExplainFlags AI (LLM Root-Cause + Insights)
          </h3>
          <p 
            class="text-base leading-[100%]"
            style="color: #EDECF6; font-weight: 400;"
          >
            Understand issues instantly with AI-generated, plain-language insights tied to your flags.
          </p>
        </div>

        <!-- AutoSegment AI -->
        <div 
          class="flex flex-col items-center text-center"
          style="width: 100%; max-width: 660px; height: auto; min-height: 196px; padding: 24px; gap: 32px; border-radius: 12px; border: 0.2px solid #FFFFFF; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);"
        >
          <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
            </svg>
          </div>
          <h3 
            class="text-xl font-semibold leading-[100%]"
            style="color: #FFFFFF;"
          >
            AutoSegment AI (Behavioral Segmentation)
          </h3>
          <p 
            class="text-base leading-[100%]"
            style="color: #EDECF6; font-weight: 400;"
          >
            Target the right users automatically. AI builds segments from live behavior—no manual rules.
          </p>
        </div>
      </div>

      <!-- Enterprise Only - Semi Bold 600, gold -->
      <p 
        class="text-center font-semibold text-2xl md:text-[32px] mb-8 leading-[100%]"
        style="color: #F9A71E;"
      >
        Enterprise Only
      </p>

      <!-- Email Signup Bar - 1440x111px, glass effect -->
      <div 
        class="mx-auto flex flex-col md:flex-row items-center justify-between"
        style="max-width: 1440px; min-height: 111px; padding: 28px 33px; gap: 32px; border-radius: 12px; border: 0.2px solid #EDECF6; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);"
      >
        <p class="text-white font-medium text-lg">
          <span style="color: #F9A71E;">Be The First</span> To Try Out Our New AI Features.
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter email address"
            class="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            style="min-width: 280px;"
          />
          <button 
            @click="showModal = true"
            class="bg-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold-hover transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            style="box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
            :aria-label="hasJoined ? 'Already joined early access' : 'Join AI Early Access'"
          >
            <span 
              style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
            >
              {{ hasJoined ? 'Joined ✓' : 'Join AI Early Access' }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Lead Capture Modal -->
    <LeadCaptureModal v-if="showModal" @close="handleModalClose" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)
const hasJoined = ref(false)

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
