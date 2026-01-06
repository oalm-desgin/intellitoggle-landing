<template>
  <section class="bg-white py-16 md:py-24 px-[27px] md:px-[120px]">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title - Bold 700, gradient text with fade to transparent -->
      <h2 
        class="text-3xl md:text-4xl lg:text-[45px] font-bold text-center mb-12 md:mb-16 leading-[100%]"
        style="background: linear-gradient(90deg, #42389E 0%, #42389E 85%, transparent 95%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        What Is IntelliToggle
      </h2>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div>
          <!-- Subtitle - Semi Bold 600, color #0E121B -->
          <h3 
            class="text-2xl md:text-3xl font-semibold mb-6 leading-[100%]"
            style="color: #0E121B;"
          >
            Your AI Dart App's Control Panel For Feature Releases
          </h3>
          
          <p class="text-slate-600 mb-6 leading-relaxed">
            IntelliToggle is a "Dart-Powered" feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
          </p>

          <div class="mb-6">
            <h4 class="font-semibold text-slate-900 mb-3">Benefits</h4>
            <ul class="space-y-2 text-slate-600">
              <li class="flex items-start gap-2">
                <span class="text-brand-gold mt-1">•</span>
                <span>Toggle new features without app updates</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-gold mt-1">•</span>
                <span>Roll out to specific users or regions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-gold mt-1">•</span>
                <span>Instantly rollback when needed</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column - Purple frame image -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="/Frame 2147224115.png"
            alt="IntelliToggle Dashboard"
            class="w-full h-auto"
            style="max-width: 830px; border-radius: 12px; box-shadow: 0px 0px 10px 10px #0000000D;"
          />
        </div>
      </div>
    </div>
  </section>
</template>
