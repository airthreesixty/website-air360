<template>
  <div class="container flex justify-center mx-auto">
    <div class="py-20 max-w-[600px]">
      <div class="">
        <h1 class="text-black-600 font-bold text-2xl mb-6 md:text-3xl lg:text-4xl">
          {{ $t('roi-calc.header') }}
        </h1>
        <!-- <CalculatorToggleCurrency /> -->
        <div class="border-1 border-gray-200 rounded-lg shadow-md px-5 py-8 mt-12">
          <h2 class="text-black-600 font-bold text-2xl mb-8">
            {{ $t('roi-calc.subtitle') }}
          </h2>
          <div class="flex flex-col gap-4">
            <CalculatorInputComponent
              id="sessions"
              v-model="monthlySessions"
              :label="$t('roi-calc.label1')"
              :type="type"
              @focus="onFocus"
              @blur="onBlur"
            />
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

const type = ref<'text' | 'number'>('text')

const monthlySessions = ref<number | string | null>(null)
const currentConversionRate = ref<number | null>(null)
const aov = ref<number | null>(null)
const numberedMonthlySessions = ref<number>()

defineProps({
  currency: {
    type: String,
    required: true,
  },
})

const onFocus = () => {
  if (typeof monthlySessions.value === 'string') {
    monthlySessions.value = parseInt(monthlySessions.value?.replace(/,/g, ''))
  }
  type.value = 'number'
}

const onBlur = () => {
  type.value = 'text'
  if (typeof monthlySessions.value === 'string') {
    monthlySessions.value = monthlySessions.value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    numberedMonthlySessions.value = parseInt(monthlySessions.value.replace(/,/g, ''))
  }
}

// calculate the monthly cost
const costOfAir360 = computed(() => {
  if (numberedMonthlySessions) {
    // Yearly sessions
    const yearlySessions = numberedMonthlySessions.value! * 12

    if (yearlySessions <= 5000000) {
      if (yearlySessions <= 1000000) {
        return 500
      }
      return Math.ceil(yearlySessions / 1000000) * 500
    } else if (yearlySessions <= 10000000) {
      // The price for 5M sessions
      const firstTierCost = 2500
      const remainingSessions = yearlySessions - 5000000
      return firstTierCost + (Math.ceil(remainingSessions / 1000000) * 300)
    } else if (yearlySessions <= 50000000) {
      const firstTierCost = 2500
      const secondTierCost = 1500
      const remainingSessions = yearlySessions - 10000000
      return firstTierCost + secondTierCost + (Math.ceil(remainingSessions / 1000000) * 100)
    } else {
      const firstTierCost = 2500
      const secondTierCost = 1500
      const thirdTierCost = Math.ceil(40000000 / 10000) * 100
      const remainingSessions = yearlySessions - 50000000
      return firstTierCost + secondTierCost + thirdTierCost + (Math.ceil(remainingSessions / 10000) * 60)
    }
  }
})

const currentOrders = computed(() => {
  return numberedMonthlySessions.value! * (currentConversionRate.value! / 100)
})

const currentRevenue = computed(() => {
  return currentOrders.value * 6 * aov.value!
})

const newConversionRate = computed(() => {
  return currentConversionRate.value! * 1.5
})

const newRevenue = computed(() => {
  return numberedMonthlySessions.value! * 6 * (newConversionRate.value / 100) * aov.value!
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
  roi.value = parseFloat((additionalRevenue.value / ((costOfAir360.value! / 0.8) * 6)).toFixed(1))
}

useSeoMeta({
  title: t('roi-calc.title'),
  description: t('roi-calc.description'),
  ogDescription: t('roi-calc.description'),
  ogTitle: t('roi-calc.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
