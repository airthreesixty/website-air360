<template>
  <div class="container flex justify-center mx-auto">
    <div class="py-20 max-w-[600px]">
      <div class="">
        <h1 class="text-black-600 font-bold text-2xl mb-6 md:text-3xl lg:text-4xl">
          {{ $t('roi-calc.header') }}
        </h1>
        <CalculatorToggleCurrency />
        <div class="border-1 border-gray-200 rounded-lg shadow-md px-5 py-5 mt-12">
          <h2 class="text-black-600 font-bold text-xl mb-5">
            Calculate
          </h2>
          <div class="flex flex-col gap-4">
            <CalculatorInputComponent id="sessions" :label="$t('roi-calc.label1')" type="number" />
            <CalculatorInputComponent id="conversion-rate" :label="$t('roi-calc.label2')" type="number" />
            <CalculatorInputComponent id="average-order-value" :label="$t('roi-calc.label3') + `(${currency})`" type="number" />
          </div>
          <div class="flex justify-center">
            <button
              class="text-white bg-primary-600 my-8 text-base font-bold inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg w-full py-3 focus:outline-none"
            >
              {{ $t('roi-calc.calculate') }}
            </button>
          </div>
          <p>Blablabla</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  currency: {
    type: String,
    required: true,
  },
})
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { t } = useI18n()
useSeoMeta({
  title: t('roi-calc.title'),
  description: t('roi-calc.description'),
  ogDescription: t('roi-calc.description'),
  ogTitle: t('roi-calc.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
