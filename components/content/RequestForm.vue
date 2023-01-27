<template>
  <section class="bg-white dark:bg-gray-900" :class="{'h-auto': screenHeight}">
    <div
      class="max-w-screen-[1400px] px-4 py-8 mx-auto lg:grid lg:gap-20 lg:py-16 lg:grid-cols-12"
    >
      <div
        class="flex-col justify-between hidden mr-auto lg:flex lg:col-span-6 xl:mb-0"
      >
        <div>
          <div
            class="inline-flex items-center mb-6 text-2xl font-semibold text-gray-900 lg:mb-10 dark:text-white"
          >
            <img
              class="mr-2"
              src="https://www.air360.io/wp-content/uploads/2022/05/air360-logo-bk.svg"
              alt="Air360 logo"
            >
          </div>
          <h1 class="mb-3 font-semibold bg-gradient-to-r from-[#6278DF] to-blue-[#3DDC97] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl">
            <ContentSlot :use="$slots.title1" />
          </h1>
          <h2 class="mb-4 text-black-600 font-semibold lg:text-lg">
            <ContentSlot :use="$slots.subtitle1" />
          </h2>
          <div class="flex">
            <div>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.description1" />
              </p>
            </div>
          </div>
          <div class="flex pt-4">
            <div>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.description2" />
              </p>
            </div>
          </div>
          <div class="flex pt-4">
            <div>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.description3" />
              </p>
            </div>
          </div>
        </div>
        <CompanyLogos grid-cols-sm="grid-cols-2" grid-cols-md="grid-cols-3" grid-cols-lg="grid-cols-3" padding-bottom="pb-1" />
        <!-- <nav>
          <ul class="flex space-x-4">
            <li>
              <NuxtLink :to="$localePath('/privacy-policy')">
                <div
                  class="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {{ $t("privacy-policy") }}
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="$localePath('/contact')">
                <div
                  class="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {{ $t("contact-us") }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </nav> -->
      </div>
      <div class="mb-6 text-center lg:hidden">
        <a
          href="#"
          class="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white"
        >
          <img
            class="mr-2"
            src="https://www.air360.io/wp-content/uploads/2022/05/air360-logo-bk.svg"
            alt="Air360 logo"
          >
        </a>
      </div>
      <div
        class="w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0 lg:col-span-6"
      >
        <div class="p-6 space-y-4 lg:space-y-6 md:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-center text-black-600 md:text-2xl dark:text-white"
          >
            <ContentSlot :use="$slots.title" />
          </h1>
          <form class="space-y-4 lg:space-y-6" action="" method="post" @submit.prevent="submitForm">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ><ContentSlot :use="$slots.name" /></label>
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
              ><ContentSlot :use="$slots.email" /></label>
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
              ><ContentSlot :use="$slots.jobTitle" /></label>
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
                  <ContentSlot :use="$slots.rule" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 disabled font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              :class="{'opacity-25 cursor-not-allowed': !isFormValid }"
              :disabled="!isFormValid"
            >
              デモのリクエスト
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '~/utils/i18n-validators'

const router = useRouter()

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

const screenHeight = ref(false)

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) {
    alert('Fail')
    screenHeight.value = true
  } else {
    alert('Success')
    await axios.post('https://api.form-data.com/f/gq31layf9m65mw704tcnmm', formData)
    router.replace('form-submitted')
    screenHeight.value = false
  }
}
</script>

<style lang="postcss">
.error-alert {
  @apply text-xs text-red-500;
}
</style>
