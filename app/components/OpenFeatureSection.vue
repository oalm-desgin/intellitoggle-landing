<template>
  <!-- OpenFeature Section - Background #EDECF6, height 858px, padding 120px, gap 56px -->
  <section 
    class="py-16 md:py-24 px-[27px] md:px-[120px]"
    style="background: #EDECF6; min-height: 858px;"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <!-- Left - OpenFeature Logo Box -->
        <div class="flex justify-center lg:justify-start">
          <div 
            class="bg-white rounded-xl flex items-center justify-center"
            style="width: 100%; max-width: 415px; padding: 77px 71px; border: 1px solid #E5E5E5;"
          >
            <img
              src="/open feature logo.png"
              alt="OpenFeature"
              class="max-w-full h-auto"
            />
          </div>
        </div>

        <!-- Right - Content -->
        <div>
          <!-- Title - Semi Bold 600, color #0E121B -->
          <h2 
            class="text-2xl md:text-3xl font-semibold mb-6 leading-[100%]"
            style="color: #0E121B;"
          >
            Seamless Feature Management with OpenFeature
          </h2>
          
          <!-- Description - Regular 400, color #5F5F60 -->
          <p 
            class="mb-6 leading-[100%] text-base md:text-lg"
            style="color: #5F5F60; font-weight: 400;"
          >
            Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
          </p>
          
          <!-- Learn More Button - 194x48px, Merriweather Sans Bold, gradient text -->
          <button
            class="flex items-center gap-2 bg-brand-gold rounded-lg hover:bg-brand-gold-hover transition-colors"
            style="width: 194px; height: 48px; padding: 12px 24px;"
          >
            <span 
              class="font-bold text-xl leading-[23px]"
              style="font-family: 'Merriweather Sans', sans-serif; background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
            >
              Learn More
            </span>
            <!-- Arrow icon - 24x24px -->
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="#42389E" 
              viewBox="0 0 24 24"
              style="min-width: 24px;"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
