<template>
  <section class="bg-white py-16 md:py-24 px-[27px] md:px-[120px]">
    <div class="max-w-[1680px] mx-auto">
      <!-- Section Title - Bold 700, gradient text -->
      <h2 
        class="text-3xl md:text-4xl lg:text-[45px] font-bold text-center mb-4 leading-[100%]"
        style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        Dart-Powered Feature Flag
      </h2>
      
      <!-- Subtitle - Semi Bold 600, color #1A1C3D -->
      <h3 
        class="text-xl md:text-2xl lg:text-[32px] font-semibold text-center mb-4 leading-[100%]"
        style="color: #1A1C3D;"
      >
        Not Another Generic Feature Flag Tool
      </h3>
      
      <!-- Description - Regular 400, color #5F5F60 -->
      <p 
        class="text-center max-w-[826px] mx-auto mb-12 text-base md:text-lg leading-[100%]"
        style="color: #5F5F60; font-weight: 400;"
      >
        Most tools are built for every language, which means extra layers and slower toggles. IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
      </p>

      <!-- Comparison Table Image -->
      <div class="flex justify-center">
        <img
          src="/table.png"
          alt="Feature Comparison Table"
          class="max-w-full h-auto rounded-xl"
        />
      </div>
    </div>
  </section>
</template>
