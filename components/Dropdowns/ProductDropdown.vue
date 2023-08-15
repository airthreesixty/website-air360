<template>
  <nav class="dropdown w-155">
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
          <span><fa-icon class="text-lg text-primary-600 w-5 mr-2" :icon="['far', 'mobile']" /></span>
          <NuxtLink :to="localePath('/product/app-analysis')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.app-analysis') }}
          </NuxtLink>
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-primary-600 w-5 mr-2" :icon="['far', 'ticket-airline']" /></span>
          <NuxtLink :to="localePath('/product-tour')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.product-tour') }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="font-bold text-black-600">
          {{ $t('product-dropdown.capabilities') }}
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-orange-600 mr-2 w-5" :icon="['far', 'album-collection']" /></span>
          <NuxtLink :to="localePath('/product/capabilities/data-collection')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.data-collection') }}
          </NuxtLink>
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-orange-600 mr-2 w-5" :icon="['far', 'calendar-circle-user']" /></span>
          <NuxtLink :to="localePath('/product/capabilities/events-segments')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.events-segments') }}
          </NuxtLink>
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-orange-600 mr-2 w-5" :icon="['far', 'magnifying-glass-chart']" /></span>
          <NuxtLink :to="localePath('/product/capabilities/data-analysis')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.data-analysis') }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="font-bold text-black-600">
          {{ $t('product-dropdown.other') }}
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-blue-400 mr-2 w-5" :icon="['far', 'file-contract']" /></span>
          <NuxtLink :to="localePath('/product/security-compliance')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.security-compliance') }}
          </NuxtLink>
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-blue-400 mr-2 w-5" :icon="['far', 'sliders']" /></span>
          <NuxtLink :to="localePath('/data-integrations')" class="text-black-600 hover:(text-primary-600 text-shadow-primary)">
            {{ $t('product-dropdown.data-integrations') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
