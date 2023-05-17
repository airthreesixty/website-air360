<template>
  <section class="bg-white dark:bg-gray-900">
    <transition name="bar">
      <div v-if="isSuccess">
        <SuccessNotification :is-success="isSuccess" @close="close" />
      </div>
    </transition>
    <Loading v-if="loading" :is-full-page="true" />
    <div
      class="container py-8 mx-auto lg:flex lg:justify-center lg:gap-5 lg:py-16"
    >
      <div
        class="flex-col hidden lg:flex lg:items-center"
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
        <div class="w-110 h-30">
          <CompanyLogos />
        </div>
      </div>
      <div class="mb-6 text-center lg:hidden">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white"
        >
          <Logo
            class="h-6"
            :is-dark="true"
          />
        </NuxtLink>
      </div>

      <div
        class="items-center flex flex-col mb-6 text-2xl font-semibold text-black-600 lg:mb-10 dark:text-white"
      >
        <div class="flex justify-center hidden mb-3 lg:block lg:flex">
          <Logo
            class="h-6 mr-2 h-7"
            :is-dark="true"
          />
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
            <form class="space-y-4 lg:space-y-6 max-w-md" action="" method="post" @submit.prevent="submitForm">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ><ContentSlot :use="$slots.name" unwrap="p" /></label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  name="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                <span v-if="v$.name.$error" class="error-alert">
                  {{ v$.name.$errors[0].$message }}
                </span>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ><ContentSlot :use="$slots.email" unwrap="p" /></label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="text"
                  name="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autocomplete="email"
                >
              </div>
              <span v-if="v$.email.$error" class="error-alert">
                {{ v$.email.$errors[0].$message }}
              </span>
              <div>
                <label
                  for="job-title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ><ContentSlot :use="$slots.jobTitle" unwrap="p" /></label>
                <input
                  id="job-title"
                  v-model="formData.jobTitle"
                  type="text"
                  name="job"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                <span v-if="v$.jobTitle.$error" class="error-alert">
                  {{ v$.jobTitle.$errors[0].$message }}
                </span>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    v-model="formData.terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border text-primary-600 border-gray-300 rounded bg-gray-50 focus:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 focus:ring-primary-600 dark:ring-offset-gray-800"
                  >
                </div>
                <div class="ml-3 error-alert">
                  <div
                    class="font-light text-xs text-gray-500 dark:text-gray-300"
                  >
                    <ContentSlot :use="$slots.rule" unwrap="p" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-base text-white bg-primary-600 disabled font-bold rounded-lg px-5 py-2.5 text-center transition ease-in-out duration-300 dark:bg-primary-600 hover:bg-primary-700 dark:focus:ring-primary-800"
                :class="{'opacity-25 cursor-not-allowed': !isFormValid }"
                :disabled="!isFormValid"
              >
                {{ $t('request-demo.title') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '~/utils/i18n-validators'

const isSuccess = ref(false)
const loading = ref(false)

const formData = reactive({
  name: '',
  email: '',
  jobTitle: '',
  terms: false,
})

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    jobTitle: { required },
  }
})

const v$ = useVuelidate(rules, formData)

const isFormValid = computed(() => {
  if (formData.name && formData.email && formData.jobTitle && formData.terms) {
    return true
  } else {
    return false
  }
})

const close = () => {
  isSuccess.value = !isSuccess.value
}

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (isFormCorrect) {
    loading.value = true
    await axios.post('https://api.form-data.com/f/gq31layf9m65mw704tcnmm', formData)
    // @ts-ignore
    Air360.identify(formData.email)
    loading.value = false
    isSuccess.value = !isSuccess.value
    v$.value.$reset()
    Object.assign(formData, { name: '', email: '', jobTitle: '', terms: false })
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
