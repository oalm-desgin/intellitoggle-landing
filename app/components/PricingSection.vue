<template>
  <section class="py-16 md:py-24 px-[27px] md:px-[120px]" style="background: #ECEBF5;">
    <div class="max-w-[1680px] mx-auto">
      <!-- Section Title -->
      <h2 
        class="text-3xl md:text-4xl lg:text-[45px] font-bold text-center mb-12 leading-[100%]"
        style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Pricing Card -->
      <div class="flex justify-center mb-12">
        <div 
          class="rounded-xl overflow-hidden text-center"
          style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); width: 370px;"
        >
          <div class="p-6">
            <p class="text-gray-300 text-sm mb-2">Prices starts at</p>
            <p class="text-white text-5xl font-bold mb-1">$10 <span class="text-lg font-normal">/month</span></p>
          </div>
          <button class="w-full bg-brand-gold text-brand-dark py-3 font-medium hover:bg-brand-gold-hover transition-colors">
            View Subscription Details
          </button>
        </div>
      </div>

      <!-- 7-Day Free Trial CTA -->
      <div class="bg-white border border-gray-200 rounded-xl p-8 md:p-16">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Start Your 7-Day Free Sandbox Plan
            </h3>
            <p class="text-slate-600">
              Join over 1,000+ startups already growing with Untitled.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-brand-gold text-white px-8 py-3 rounded font-medium hover:bg-brand-gold-hover transition-colors whitespace-nowrap">
              Get Started
            </button>
            <button class="border border-brand-gold text-brand-gold px-8 py-3 rounded font-medium hover:bg-brand-gold/10 transition-colors whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

