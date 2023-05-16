<template>
  <section class="relative bg-white">
    <transition name="bar">
      <div v-if="isSuccess">
        <SuccessNotification :is-success="isSuccess" @close="close" />
      </div>
    </transition>
    <Loading v-if="loading" :is-full-page="true" />
    <div class="py-8 px-6 mx-auto max-w-screen-[1400px] md:py-16 lg:px-8">
      <div
        class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16"
      >
        <h2
          class="mb-4 text-3xl font-bold text-black-600 md:text-4xl"
        >
          Contact Us
        </h2>
        <p class="font-light text-gray-600 md:text-xl">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </p>
      </div>
      <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
        <div class="col-span-2 mb-8 lg:mb-0">
          <form
            ref="form"
            action=""
            class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md md:grid-cols-2"
            method="post"
            @submit.prevent="submitForm"
          >
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-black-600"
              ><ContentSlot :use="$slots.name" unwrap="p" /></label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600"
              >
              <span v-if="v$.name.$error" class="error-alert">
                {{ v$.name.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black-600"
              ><ContentSlot :use="$slots.email" unwrap="p" /></label>
              <input
                id="email"
                v-model="formData.email"
                type="text"
                class="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600"
              >
              <span v-if="v$.email.$error" class="error-alert">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label
                for="job-title"
                class="block mb-2 text-sm font-medium text-black-600"
              ><ContentSlot :use="$slots.jobTitle" unwrap="p" /></label>
              <input
                id="job-title"
                v-model="formData.jobTitle"
                type="text"
                class="shadow-sm bg-gray-50 border border-gray-300 text-black-600 text-sm rounded-lg block w-full p-2.5 transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600"
              >
              <span v-if="v$.jobTitle.$error" class="error-alert">
                {{ v$.jobTitle.$errors[0].$message }}
              </span>
            </div>
            <div class="md:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-black-600 dark:text-gray-400"
              ><ContentSlot :use="$slots.message" unwrap="p" /></label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                class="block p-2.5 w-full text-sm text-black-600 bg-gray-50 rounded-lg shadow-sm border border-gray-300 transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600"
              />
              <span v-if="v$.message.$error" class="error-alert">
                {{ v$.message.$errors[0].$message }}
              </span>
              <p class="mt-4 text-xs text-gray-500">
                <ContentSlot :use="$slots.rule" unwrap="p" />
              </p>
            </div>
            <button
              type="submit"
              class="py-3 px-5 font-bold text-center text-white rounded-lg transition ease-in-out duration-300 bg-primary-600 hover:bg-primary-700"
              :class="{'opacity-25 cursor-not-allowed': !isFormValid }"
              :disabled="!isFormValid"
            >
              <ContentSlot :use="$slots.submitButton" unwrap="p" />
            </button>
          </form>
        </div>
        <div
          class="grid col-span-1 gap-8 text-center grid-cols-2 py-15 lg:py-0 lg:grid-cols-1"
        >
          <div>
            <div
              class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16"
            >
              <svg
                class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="mb-2 text-xl font-bold text-black-600">
              <ContentSlot :use="$slots.companyInfo" unwrap="p" />
            </p>
            <p class="text-gray-500">
              <ContentSlot :use="$slots.companyName" unwrap="p" />
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16"
            >
              <svg
                class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="mb-2 text-xl font-bold text-black-600">
              <ContentSlot :use="$slots.location" unwrap="p" />
            </p>
            <p class="text-gray-500">
              <ContentSlot :use="$slots.address" unwrap="p" />
            </p>
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

const { $i18n } = useNuxtApp()

const formData = reactive({
  name: '',
  email: '',
  jobTitle: '',
  message: '',
})

const loading = ref(false)
const isSuccess = ref(false)

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    jobTitle: { required },
    message: { required },
  }
})

const v$ = useVuelidate(rules, formData)

const isFormValid = computed(() => {
  if (formData.name && formData.email && formData.jobTitle && formData.message) {
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
    await axios.post('https://api.form-data.com/f/fhrtrdprid7cc823m483ku', formData)
    // @ts-ignore
    Air360.identify(formData.email)
    loading.value = false
    isSuccess.value = !isSuccess.value
    v$.value.$reset()
    Object.assign(formData, { name: '', email: '', jobTitle: '', message: '' })
  }
}

if ($i18n.locale._value === 'ja') {
  useSchemaOrg([
    defineOrganization({
      name: 'Scalefast Japan',
      address: {
        streetAddress: '京橋3-1-1 東京スクエアガーデン 14F',
        addressLocality: '中央区',
        addressRegion: '東京都',
        postalCode: '104-0031',
        addressCountry: '日本',

      },
      sameAs: ['https://www.linkedin.com/company/air360/', 'https://twitter.com/weareair360', 'https://www.instagram.com/weareair360/'],
    }),
  ])
} else {
  useSchemaOrg([
    defineOrganization({
      name: 'Scalefast',
      address: {
        streetAddress: 'Calle de Méndez Álvaro, 9, Pl, 4ª',
        addressRegion: 'Madrid',
        postalCode: '28045',
        addressCountry: 'Spain',

      },
      sameAs: ['https://www.linkedin.com/company/air360/', 'https://twitter.com/weareair360', 'https://www.instagram.com/weareair360/'],
    }),
  ])
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
</style>
