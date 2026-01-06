<template>
  <footer class="px-[27px] md:px-[120px] py-12 md:py-16" style="background: #ECEBF5;">
    <div class="max-w-[1680px] mx-auto">
      <div
        class="grid grid-cols-1 gap-8 mb-8 md:gap-[80px]"
        style="grid-template-columns: 349px 256px 256px 1fr;"
      >
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <img
              src="/Frame 2147224069.png"
              alt="IntelliToggle"
              class="h-[26px] w-auto"
            />
          </div>
          <p
            class="mb-4 leading-[100%]"
            style="width: 349px; height: 66px; font-weight: 400; font-size: 16px; line-height: 100%; letter-spacing: 0%; color: #4A4B4D; opacity: 0.9; vertical-align: middle;"
          >
            IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
          </p>
          <!-- GitHub Icon -->
          <a href="#" class="text-brand-text-dark hover:text-brand-purple transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>

        <!-- Resources Column -->
        <div>
          <h4 class="mb-4 leading-[100%]" style="font-weight: 400; font-size: 16px; color: #5F5F60;">
            Resources
          </h4>
          <ul class="space-y-3">
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">Why IntelliToggle Is Different</a></li>
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">Customer Support</a></li>
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">Terms & Conditions</a></li>
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h4 class="mb-4 leading-[100%]" style="font-weight: 400; font-size: 16px; color: #5F5F60;">
            Company
          </h4>
          <ul class="space-y-3">
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">Pricing</a></li>
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">Documentation</a></li>
            <li><a href="#" class="block hover:text-brand-purple transition-colors" style="width: 215px; font-weight: 600; font-size: 16px; line-height: 100%; color: #323338;">About Us</a></li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div>
          <h4 class="font-semibold text-brand-text-dark mb-4">Subscribe to Newsletter</h4>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              class="flex-1 px-4 py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
            <button class="bg-brand-gold text-white px-4 py-2 rounded font-medium hover:bg-brand-gold-hover transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
