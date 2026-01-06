<template>
  <section class="bg-white py-16 md:py-24 px-[27px] md:px-[120px]">
    <div class="max-w-[1680px] mx-auto">
      <!-- Section Title - same gradient as Plans section -->
      <h2 
        class="text-3xl md:text-4xl lg:text-[45px] font-bold text-center mb-12 leading-[100%]"
        style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        Why Teams Use IntelliToggle
      </h2>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <!-- Feature 1 - Safer, faster rollouts -->
        <div class="text-center">
          <div class="mx-auto mb-4 flex items-center justify-center" style="width: 129px; height: 118px; background: #EDECF6; border-radius: 8px; border: 1px solid transparent;">
            <img src="/ant-design_control-filled.png" alt="Control" class="w-12 h-12" />
          </div>
          <h3 
            class="font-semibold mb-2 leading-[100%]"
            style="color: #1A1C3D; font-size: 20px; max-width: 402px; margin: 0 auto;"
          >
            Safer, faster rollouts
          </h3>
          <p 
            class="leading-[100%]"
            style="color: #5F5F60; font-weight: 400; font-size: 16px; max-width: 402px; margin: 0 auto;"
          >
            Control feature releases in minutes, not weeks without risking production stability.
          </p>
        </div>

        <!-- Feature 2 - Confidence to ship -->
        <div class="text-center">
          <div class="mx-auto mb-4 flex items-center justify-center" style="width: 129px; height: 118px; background: #EDECF6; border-radius: 8px; border: 1px solid transparent;">
            <img src="/eos-icons_code-deploy.png" alt="Deploy" class="w-12 h-12" />
          </div>
          <h3 
            class="font-semibold mb-2 leading-[100%]"
            style="color: #1A1C3D; font-size: 20px; max-width: 402px; margin: 0 auto;"
          >
            Confidence to ship
          </h3>
          <p 
            class="leading-[100%]"
            style="color: #5F5F60; font-weight: 400; font-size: 16px; max-width: 402px; margin: 0 auto;"
          >
            "Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes.
          </p>
        </div>

        <!-- Feature 3 - Future-ready with AI delivery -->
        <div class="text-center">
          <div class="mx-auto mb-4 flex items-center justify-center" style="width: 129px; height: 118px; background: #EDECF6; border-radius: 8px; border: 1px solid transparent;">
            <img src="/eos-icons_ai-operator.png" alt="AI" class="w-12 h-12" />
          </div>
          <h3 
            class="font-semibold mb-2 leading-[100%]"
            style="color: #1A1C3D; font-size: 20px; max-width: 402px; margin: 0 auto;"
          >
            Future-ready with AI delivery
          </h3>
          <p 
            class="leading-[100%]"
            style="color: #5F5F60; font-weight: 400; font-size: 16px; max-width: 402px; margin: 0 auto;"
          >
            Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.
          </p>
        </div>
      </div>

      <!-- CTA Banner -->
      <div 
        class="flex flex-col md:flex-row items-center justify-between mx-auto mb-12"
        style="width: 100%; max-width: 1394px; min-height: 87px; padding: 16px 32px; border-radius: 12px; border: 0.2px solid #EDECF6; background: #EDECF6; gap: 16px;"
      >
        <p 
          class="font-semibold leading-[100%]"
          style="color: #5F5F60; font-size: 18px; max-width: 1130px;"
        >
          Read a 2-min case note: How a sample Flutter app shipped faster with IntelliToggle
        </p>
        <button 
          class="rounded-lg"
          style="width: 184px; height: 55px; padding: 12px 24px; background: #F9A71E; box-shadow: 0px 0px 10px 10px #0000000D;"
        >
          <span 
            class="font-semibold leading-[100%]"
            style="font-size: 16px; background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            Read Now
          </span>
        </button>
      </div>

      <!-- Purple CTA Card (moved into Why Teams section) -->
      <div 
        class="relative rounded-xl text-center overflow-hidden mx-auto"
        style="width: 100%; max-width: 1384px; min-height: 375px; background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); box-shadow: 0px 0px 10px 10px #0000000D; padding: 32px 29px; gap: 10px;"
      >
        <!-- Background pattern -->
        <img
          src="/Background pattern.png"
          alt=""
          class="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        <div class="relative z-10 flex flex-col items-center gap-6">
          <!-- Frame image clickable -->
          <a href="#" class="block">
            <img
              src="/Frame 2147225958.png"
              alt="Feature Flag CTA"
              class="w-full h-auto max-w-[900px] mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
