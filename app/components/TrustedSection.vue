<template>
  <section class="bg-white py-8 md:py-12">
    <div class="max-w-7xl mx-auto px-[27px] md:px-[120px]">
      <!-- Title - Semi Bold 600, color #1A1C3D -->
      <p class="text-center font-semibold text-xl mb-8" style="color: #1A1C3D;">
        Trusted by various engineering teams
      </p>

      <!-- Logos Row -->
      <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <!-- Google Cloud -->
        <div class="flex items-center gap-2" style="color: #1A1C3D;">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-8.825-6.893zM8.086 19.591a4.717 4.717 0 0 1-2.869-.957l-.007.024c-2.898-2.182-2.863-6.092.099-8.039l.018.015.183-.125a7.298 7.298 0 0 1 .537-.283 7.344 7.344 0 0 1 3.036-.675 7.344 7.344 0 0 1 3.099.695l.015-.006-.015.006c.383.18.74.39 1.07.627l2.562-2.564a9.852 9.852 0 0 0-3.166-1.748 9.887 9.887 0 0 0-3.565-.658c-1.672 0-3.25.41-4.642 1.136a10.093 10.093 0 0 0-3.783 3.305 7.312 7.312 0 0 0-.006 8.217 7.315 7.315 0 0 0 3.789 2.989 4.753 4.753 0 0 0 3.645.036z"/>
          </svg>
          <span class="font-semibold text-base">Google Cloud</span>
        </div>

        <!-- Amazon Web Services -->
        <div class="flex items-center gap-2" style="color: #1A1C3D;">
          <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296z"/>
          </svg>
          <div class="flex flex-col">
            <span class="font-bold text-sm leading-tight">amazon</span>
            <span class="text-xs text-orange-500">web services</span>
          </div>
        </div>

        <!-- Microsoft Azure -->
        <div class="flex items-center gap-2" style="color: #1A1C3D;">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"/>
          </svg>
          <div class="flex flex-col">
            <span class="font-semibold text-sm leading-tight">Microsoft</span>
            <span class="font-semibold text-sm leading-tight">Azure</span>
          </div>
        </div>

        <!-- Digital Ocean -->
        <div class="flex items-center gap-2" style="color: #1A1C3D;">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 0 1 4.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.58-3.985-6.45-7.565-7.564A12.8 12.8 0 0 0 12.039 0zM7.39 19.362H3.828v3.564H7.39v-3.564zm-3.563 0v2.78H.99v-2.78h2.837z"/>
          </svg>
          <div class="flex flex-col">
            <span class="font-semibold text-sm leading-tight">Digital</span>
            <span class="font-semibold text-sm leading-tight">Ocean</span>
          </div>
        </div>

        <!-- IBM -->
        <div class="flex items-center" style="color: #1A1C3D;">
          <svg class="w-16 h-8" viewBox="0 0 100 40" fill="currentColor">
            <rect x="0" y="0" width="100" height="4"/>
            <rect x="0" y="8" width="100" height="4"/>
            <rect x="0" y="16" width="40" height="4"/>
            <rect x="60" y="16" width="40" height="4"/>
            <rect x="0" y="24" width="100" height="4"/>
            <rect x="0" y="32" width="100" height="4"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
