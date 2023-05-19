<template>
  <section class="bg-white dark:bg-gray-900">
    <transition name="bar">
      <div v-if="isSuccess">
        <SuccessNotification :is-success="isSuccess" @close="close" />
      </div>
    </transition>
    <Loading v-if="loading" :is-full-page="true" />
    <div
      class="container py-8 mx-auto lg:flex lg:justify-center lg:gap-5 xl:gap-0 lg:py-16"
    >
      <div
        class="flex-col lg:flex lg:items-center lg:flex-1"
      >
        <div class="mb-8 flex flex-col items-center">
          <div class="flex justify-center">
            <nuxt-img src="/getStarted.webp" class="w-80 mb-6" />
          </div>
          <h1 class="mb-3 font-semibold text-center text-gradient text-xl md:text-2xl lg:text-3xl">
            <ContentSlot :use="$slots.title1" unwrap="p" />
          </h1>
          <h2 class="mb-4 text-black-600 max-w-[500px] font-semibold text-center lg:text-lg">
            <ContentSlot :use="$slots.subtitle1" unwrap="p" />
          </h2>
        </div>
        <div class="mb-30 lg:mb-0 company-logos-list">
          <!-- <CompanyLogos /> -->
          <component :is="LogoBrandDubreuil" class="h-7.5 object-contain w-full lg:h-9.5" />
        </div>
      </div>
      <div class="mb-6 text-center lg:hidden">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white"
        >
          <Logo is-dark class="h-6" />
        </NuxtLink>
      </div>

      <div
        class="items-center justify-center flex flex-col flex-1 mb-6 text-2xl font-semibold text-black-600 lg:mb-0 dark:text-white"
      >
        <div class="flex justify-center hidden mb-3 lg:block lg:flex">
          <Logo is-dark class="h-6 lg:h-7" />
        </div>
        <div
          class="w-full mx-auto bg-white"
        >
          <div class="p-6 space-y-4 lg:space-y-6 md:p-8 flex flex-col items-center">
            <h2
              class="text-xl font-bold text-center text-black-600 lg:text-2xl dark:text-white"
            >
              <ContentSlot :use="$slots.title" unwrap="p" />
            </h2>
            <FormComponent @submit-form="submitForm">
              <template #rule>
                <ContentSlot :use="$slots.rule" unwrap="p" />
              </template>
              <template #cta>
                <ContentSlot :use="$slots.cta" unwrap="p" />
              </template>
            </FormComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const LogoBrandDubreuil = resolveComponent('LogoBrandDubreuil')

// import axios from 'axios'
// import { useVuelidate } from '@vuelidate/core'
// import { required, email } from '~/utils/i18n-validators'

// const isSuccess = ref(false)
// const loading = ref(false)

// const formData = reactive({
//   name: '',
//   email: '',
//   jobTitle: '',
//   terms: false,
// })

// const rules = computed(() => {
//   return {
//     name: { required },
//     email: { required, email },
//     jobTitle: { required },
//   }
// })

// const v$ = useVuelidate(rules, formData)

// const isFormValid = computed(() => {
//   if (formData.name && formData.email && formData.jobTitle && formData.terms) {
//     return true
//   } else {
//     return false
//   }
// })

// const close = () => {
//   isSuccess.value = !isSuccess.value
// }

const props = defineProps({
  isSuccess: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})

const submitForm = async ({ v$, formData }) => {
  const isFormCorrect = await v$.$validate()
  if (isFormCorrect) {
    loading.value = true
    // await axios.post('https://api.form-data.com/f/gq31layf9m65mw704tcnmm', formData)
    // // @ts-ignore
    // Air360.identify(formData.email)
    console.log(formData)
    setTimeout(() => {
      loading.value = false
      isSuccess.value = !isSuccess.value
      v$.value.$reset()
      Object.assign(formData, { name: '', email: '', jobTitle: '', terms: false })
    }, 3000)
  }
}
</script>

<style lang="postcss">
.error-alert {
  @apply text-xs text-red-500;
}

.bar-enter-active, .bar-leave-active {
  transition: opacity .3s;
}
.bar-enter, .bar-leave-to {
  opacity: 0;
}

.text-gradient {
    background: linear-gradient(126deg, rgba(45,146,233,1) 0%, rgba(100,74,213,1) 20%, rgba(193,65,172,1) 40%, rgba(231,33,146,1) 60%, rgba(240,77,102,1) 80%, rgba(253,112,67,1) 100%);
   color: transparent;
   background-clip: text;
}
</style>
