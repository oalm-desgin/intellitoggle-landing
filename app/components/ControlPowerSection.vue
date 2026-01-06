<template>
  <!-- Control & Power-focused Section - 1920px width, 858px height, gap: 48px, padding: 120px -->
  <section 
    class="bg-white px-[27px] md:px-[120px] py-[60px] md:py-[120px]"
    style="min-height: 858px;"
  >
    <div class="max-w-[1680px] mx-auto flex flex-col" style="gap: 48px;">
      <!-- Section Title - Bold 700, gradient text, centered -->
      <h2 
        class="text-3xl md:text-4xl lg:text-[45px] font-bold text-center leading-[100%]"
        style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        Control & Power-focused
      </h2>

      <!-- Cards Grid - 3 columns with gap -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[95px]">
        <!-- Connect Card -->
        <div class="flex flex-col">
          <!-- Card Image Container - 497x363px, dark navy background -->
          <div 
            class="rounded-xl overflow-hidden mb-4 flex items-center justify-center"
            style="width: 100%; max-width: 497px; height: 363px; background: #1A1C3D; border-radius: 12px;"
          >
            <img
              src="/connect.png"
              alt="Connect Dashboard"
              class="w-full h-full object-contain"
            />
          </div>
          <!-- Card Title - Semi Bold 600, white on dark would be wrong, this is outside the card -->
          <h3 
            class="text-xl font-semibold mb-2 leading-[100%]"
            style="color: #1A1C3D;"
          >
            Connect
          </h3>
          <!-- Card Subtitle - Regular 400, color #5F5F60 -->
          <p 
            class="text-base mb-4 leading-[100%]"
            style="color: #5F5F60; font-weight: 400;"
          >
            Install SDK in your Dart project in 2 mins.
          </p>
          <!-- View Documentation Button - 243x46px, gold border -->
          <button 
            class="flex items-center justify-center rounded-lg transition-colors hover:bg-brand-gold/10"
            style="width: 243px; height: 46px; padding: 12px 24px; border: 1px solid #F9A71E; border-radius: 8px; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
          >
            <span 
              class="text-base leading-[100%]"
              style="color: #F9A71E; font-weight: 400;"
            >
              View Documentation
            </span>
          </button>
        </div>

        <!-- Create Flags Card -->
        <div class="flex flex-col">
          <!-- Card Image Container - 496x363px, dark navy background -->
          <div 
            class="rounded-xl overflow-hidden mb-4 flex items-center justify-center"
            style="width: 100%; max-width: 496px; height: 363px; background: #1A1C3D; border-radius: 12px;"
          >
            <img
              src="/flags.png"
              alt="Create Flags Dashboard"
              class="w-full h-full object-contain"
            />
          </div>
          <h3 
            class="text-xl font-semibold mb-2 leading-[100%]"
            style="color: #1A1C3D;"
          >
            Create Flags
          </h3>
          <p 
            class="text-base mb-4 leading-[100%]"
            style="color: #5F5F60; font-weight: 400;"
          >
            Define features in IntelliToggle dashboard.
          </p>
          <button 
            class="flex items-center justify-center rounded-lg transition-colors hover:bg-brand-gold/10"
            style="width: 243px; height: 46px; padding: 12px 24px; border: 1px solid #F9A71E; border-radius: 8px; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
          >
            <span 
              class="text-base leading-[100%]"
              style="color: #F9A71E; font-weight: 400;"
            >
              View Documentation
            </span>
          </button>
        </div>

        <!-- Ship & Control Card -->
        <div class="flex flex-col">
          <!-- Card Image Container - 497x363px, dark navy background -->
          <div 
            class="rounded-xl overflow-hidden mb-4 flex items-center justify-center"
            style="width: 100%; max-width: 497px; height: 363px; background: #1A1C3D; border-radius: 12px;"
          >
            <img
              src="/ship and control.png"
              alt="Ship & Control Dashboard"
              class="w-full h-full object-contain"
            />
          </div>
          <h3 
            class="text-xl font-semibold mb-2 leading-[100%]"
            style="color: #1A1C3D;"
          >
            Ship & Control
          </h3>
          <p 
            class="text-base mb-4 leading-[100%]"
            style="color: #5F5F60; font-weight: 400;"
          >
            Flip switches anytime, see instant results.
          </p>
          <button 
            class="flex items-center justify-center rounded-lg transition-colors hover:bg-brand-gold/10"
            style="width: 243px; height: 46px; padding: 12px 24px; border: 1px solid #F9A71E; border-radius: 8px; box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
          >
            <span 
              class="text-base leading-[100%]"
              style="color: #F9A71E; font-weight: 400;"
            >
              View Documentation
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
