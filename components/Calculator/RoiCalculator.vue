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
            {{ $t('roi-calc.subtitle') }}
          </h2>
          <div class="flex flex-col gap-4">
            <CalculatorInputComponent id="sessions" v-model="monthlySessions" :label="$t('roi-calc.label1')" type="number" />
            <CalculatorInputComponent id="conversion-rate" v-model="currentConversionRate" :label="$t('roi-calc.label2')" type="number" />
            <CalculatorInputComponent id="average-order-value" v-model="aov" :label="$t('roi-calc.label3') + `(${currency})`" type="number" />
          </div>
          <div class="flex justify-center">
            <button
              class="text-white bg-primary-600 my-8 text-base font-bold inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg w-full py-3 focus:outline-none"
              :class="{'opacity-70 cursor-not-allowed': !canCalculate}"
              :disabled="!canCalculate"
              @click="onCalculate"
            >
              {{ $t('roi-calc.calculate') }}
            </button>
          </div>
          <hr>
          <div class="flex justify-between items-center mt-8 mb-5">
            <p class="text-gray-500">
              {{ $t('roi-calc.additional-revenue') }}
            </p>
            <span class="text-black-600 font-bold">{{ currency }}{{ additionalRevenue.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between items-center mb-8">
            <p class="text-gray-500">
              {{ $t('roi-calc.roi') }}
            </p>
            <span class="text-black-600 font-bold">{{ roi }} {{ $t('roi-calc.times') }}</span>
          </div>
          <p class="text-xs text-black-600">
            {{ $t('roi-calc.caution') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { t } = useI18n()

const monthlySessions = ref<number | null>(null)
const currentConversionRate = ref<number | null>(null)
const aov = ref<number | null>(null)

const props = defineProps({
  currency: {
    type: String,
    required: true,
  },
})

const costOfAir360 = computed(() => {
  const yearly = (monthlySessions.value || 0) * 12
  const currency = props.currency

  if (yearly < 5000000 && currency === '$') {
    return 35000
  } else if (yearly < 5000000 && currency === '€') {
    return 30000
  }

  if (yearly < 20000000 && currency === '$') {
    return 60000
  } else if (yearly < 20000000 && currency === '€') {
    return 50000
  }

  if (yearly < 50000000 && currency === '$') {
    return 85000
  } else if (yearly < 50000000 && currency === '€') {
    return 70000
  }

  if (yearly < 120000000 && currency === '$') {
    return 145000
  } else if (yearly < 120000000 && currency === '€') {
    return 120000
  }
})

const currentOrders = computed(() => {
  return (monthlySessions.value! * 6) * (currentConversionRate.value! / 100)
})

const currentRevenue = computed(() => {
  return currentOrders.value * aov.value!
})

const newConversionRate = computed(() => {
  return currentConversionRate.value! * 1.5
})

const newRevenue = computed(() => {
  return monthlySessions.value! * 6 * (newConversionRate.value / 100) * aov.value!
})

const additionalRevenue = ref(0)
const roi = ref(0)

const canCalculate = computed(() => {
  if (monthlySessions.value && newConversionRate.value && aov.value) {
    return true
  }
  return false
})

const onCalculate = () => {
  additionalRevenue.value = parseFloat((newRevenue.value - currentRevenue.value).toFixed(0))
  roi.value = parseFloat((additionalRevenue.value / costOfAir360.value!).toFixed(1))
}

useSeoMeta({
  title: t('roi-calc.title'),
  description: t('roi-calc.description'),
  ogDescription: t('roi-calc.description'),
  ogTitle: t('roi-calc.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
