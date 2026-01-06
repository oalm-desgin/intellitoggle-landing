<template>
  <header
    class="sticky top-0 z-50 bg-brand-purple h-[80px] md:h-[133px] px-[27px] md:px-[120px] md:py-[40px] flex justify-between items-center"
  >
    <!-- Logo - Just the Frame image -->
    <div class="flex items-center">
      <img 
        src="/Frame 2147224071.png" 
        alt="IntelliToggle"
        class="h-[37px] md:h-[50.8px] w-auto"
      />
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-8">
      <a href="#" class="text-white hover:text-brand-gold transition-colors font-medium">Home</a>
      <a href="#" class="text-white hover:text-brand-gold transition-colors font-medium">About</a>
      <a href="#" class="text-white hover:text-brand-gold transition-colors font-medium">Pricing</a>
    </nav>

    <!-- Desktop CTA Button - exact 214x53px -->
    <button
      class="hidden md:flex items-center justify-center rounded-lg hover:bg-brand-gold-hover transition-colors"
      style="width: 214px; height: 53px; padding: 12px 24px; gap: 10px; background: #F9A71E; border-radius: 8px; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
    >
      <span 
        class="font-semibold text-center leading-[100%]"
        style="font-size: 20px; line-height: 100%; letter-spacing: 0%; background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        Start Sandbox
      </span>
    </button>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMenu"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      aria-expanded="false"
      class="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-brand-gold rounded p-1"
    >
      <svg
        v-if="!isMenuOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Menu Overlay -->
    <Teleport to="body">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-brand-dark/95 z-40 md:hidden flex flex-col items-center justify-center"
      >
        <!-- Close button at top right -->
        <button
          @click="closeMenu"
          aria-label="Close menu"
          class="absolute top-6 right-[27px] text-white focus:outline-none focus:ring-2 focus:ring-brand-gold rounded p-1"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav class="flex flex-col items-center gap-8">
          <a
            href="#"
            class="text-white text-2xl hover:text-brand-gold transition-colors"
            @click="closeMenu"
          >
            Home
          </a>
          <a
            href="#"
            class="text-white text-2xl hover:text-brand-gold transition-colors"
            @click="closeMenu"
          >
            About
          </a>
          <a
            href="#"
            class="text-white text-2xl hover:text-brand-gold transition-colors"
            @click="closeMenu"
          >
            Pricing
          </a>
          <button
            class="rounded-lg px-6 py-3 font-semibold hover:bg-brand-gold-hover transition-colors mt-4"
            style="background: #F9A71E; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
            @click="closeMenu"
          >
            <span 
              style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
            >
              Start Sandbox
            </span>
          </button>
        </nav>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
