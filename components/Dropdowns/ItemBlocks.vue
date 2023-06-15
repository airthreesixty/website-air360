<template>
  <ul>
    <li>
      <button class="w-full py-3 font-bold text-black-600 text-xl flex items-center justify-between">
        Product<fa-icon class="fa-lg text-primary-600" :icon="['far', 'angle-down']" />
      </button>
      <div>
        <p class="font-bold text-black-600 mt-1 mb-2">
          Features
        </p>
        <ul>
          <DropdownsItems slug="/product/website-analysis" icon="laptop" text="Website analysis" text-color="text-primary-600" />
          <DropdownsItems slug="/product/app-analysis" icon="mobile" text="App analysis" text-color="text-orange-600" />
        </ul>
        <p class="font-bold text-black-600 mt-1 mb-2">
          Other
        </p>
        <ul>
          <DropdownsItems slug="/product/security-compliance" icon="file-contract" text="Security & Compliance" text-color="text-blue-400" />
        </ul>
      </div>
    </li>
    <li>
      <button class="w-full py-3 font-bold text-black-600 text-xl flex items-center justify-between">
        Inspiration<fa-icon class="fa-lg text-primary-600" :icon="['far', 'angle-down']" />
      </button>
      <div>
        <ul>
          <DropdownsItems slug="/blog" icon="newspaper" text="Blog" text-color="text-blossom-600" />
          <DropdownsItems slug="/content-gallery" icon="building-columns" text="Content gallery" text-color="text-purple-600" />
        </ul>
      </div>
    </li>
    <li class="mb-3 mt-5">
      <!-- <NuxtLink class="button bg-primary-600 transition ease-in-out duration-300 hover:opacity-80 focus:opacity-80">
        <div class="text-white font-bold text-base">
          Get Started
        </div>
      </NuxtLink> -->
      <ButtonPrimary theme="primary" slug="/request-demo">
        {{ $t("request-demo.title") }}
      </ButtonPrimary>
    </li>
    <li>
      <a :href="runtimeConfig.public.appUrl" class="button border-2 text-primary-600 font-bold text-base border-primary-600 transition ease-in-out duration-300 hover:opacity-80 focus:opacity-80">
        {{ $t("login") }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
