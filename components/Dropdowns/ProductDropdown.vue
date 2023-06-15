<template>
  <nav class="dropdown w-110">
    <div class="flex justify-around">
      <div>
        <div class="font-bold text-black-600">
          {{ $t('product-dropdown.features') }}
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-primary-600 w-5 mr-2" :icon="['far', 'laptop']" /></span>
          <NuxtLink :to="localePath('/product/website-analysis')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.website-analysis') }}
          </NuxtLink>
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-orange-600 w-5 mr-2" :icon="['far', 'mobile']" /></span>
          <NuxtLink :to="localePath('/product/app-analysis')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.app-analysis') }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="font-bold text-black-600">
          {{ $t('product-dropdown.other') }}
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-blue-400 mr-2" :icon="['far', 'file-contract']" /></span>
          <NuxtLink :to="localePath('/product/security-compliance')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.security-compliance') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
