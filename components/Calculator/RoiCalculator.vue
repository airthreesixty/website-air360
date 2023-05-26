<template>
  <div class="container flex justify-center mx-auto">
    <div class="py-20 max-w-[600px]">
      <div class="">
        <h1 class="text-black-600 font-bold text-2xl mb-6 md:text-3xl lg:text-4xl">
          {{ $t('roi-calc.header') }}
        </h1>
        <CalculatorToggleCurrency />
        <div class="border-1 border-gray-200 rounded-lg shadow-md px-5 py-8 mt-12">
          <h2 class="text-black-600 font-bold text-2xl mb-8">
            Conversion calculation
          </h2>
          <div class="flex flex-col gap-4">
            <CalculatorInputComponent id="sessions" v-model="num1" :label="$t('roi-calc.label1')" type="number" />
            <CalculatorInputComponent id="conversion-rate" v-model="num2" :label="$t('roi-calc.label2')" type="number" />
            <CalculatorInputComponent id="average-order-value" v-model="num3" :label="$t('roi-calc.label3') + `(${currency})`" type="number" />
          </div>
          <div class="flex justify-center">
            <button
              class="text-white bg-primary-600 my-8 text-base font-bold inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg w-full py-3 focus:outline-none"
            >
              {{ $t('roi-calc.calculate') }}
            </button>
          </div>
          <hr>
          <div class="flex justify-between items-center mt-8 mb-5">
            <p class="text-gray-500">
              You can achieve an Additional Revenue
            </p>
            <span class="text-black-600 font-bold">$297,000.00</span>
          </div>
          <div class="flex justify-between items-center mb-8">
            <p class="text-gray-500">
              How many times the return on your Air360 investment
            </p>
            <span class="text-black-600 font-bold">8 times</span>
          </div>
          <p class="text-xs text-black-600">
            This Calculator is a non binding simulation of the results you could get using our Solution. We projected your results with a 50% increase in your average conversion rate.
          </p>
          <p>{{ num1 }}</p>
          <p>{{ num2 }}</p>
          <p>{{ num3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const num1 = ref<number | null>(null)
const num2 = ref<number | null>(null)
const num3 = ref<number | null>(null)

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
