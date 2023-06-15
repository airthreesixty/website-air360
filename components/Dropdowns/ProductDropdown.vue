<template>
  <nav class="dropdown w-92">
    <div class="grid grid-cols-2">
      <div>
        <div class="font-bold text-black-600">
          Features
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-primary-600 w-5 mr-2" :icon="['far', 'laptop']" /></span>
          <NuxtLink :to="localePath('/product/website-analysis')" class="font-bold hover:(text-primary-600 text-shadow-primary)">
            Website analysis
          </NuxtLink>
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-orange-600 w-5 mr-2" :icon="['far', 'mobile']" /></span>
          <NuxtLink :to="localePath('/product/app-analysis')" class="font-bold hover:(text-primary-600 text-shadow-primary)">
            App analysis
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="font-bold text-black-600">
          Other
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-blue-400 mr-2" :icon="['far', 'file-contract']" /></span>
          <NuxtLink :to="localePath('/product/security-compliance')" class="font-bold hover:(text-primary-600 text-shadow-primary)">
            Security & Compliance
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
