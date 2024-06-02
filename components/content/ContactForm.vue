<template>
  <section class="relative bg-white dark:bg-gray-900">
    <Loading v-if="loading" />
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div
        class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16"
      >
        <h2
          class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white"
        >
          Contact Us
        </h2>
        <p class="font-light text-gray-600 dark:text-gray-400 sm:text-xl">
          <ContentSlot :use="$slots.subtext" />
        </p>
      </div>
      <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
        <div class="col-span-2 mb-8 lg:mb-0">
          <form
            ref="form"
            action=""
            class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
            method="post"
            @submit.prevent="submitForm"
          >
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              ><ContentSlot :use="$slots.name" /></label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
              <span v-if="v$.name.$error" class="error-alert">
                {{ v$.name.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              ><ContentSlot :use="$slots.email" /></label>
              <input
                id="email"
                v-model="formData.email"
                type="text"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
              <span v-if="v$.email.$error" class="error-alert">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label
                for="job-title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              ><ContentSlot :use="$slots.jobTitle" /></label>
              <input
                id="job-title"
                v-model="formData.jobTitle"
                type="text"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
              <span v-if="v$.jobTitle.$error" class="error-alert">
                {{ v$.jobTitle.$errors[0].$message }}
              </span>
            </div>
            <div class="md:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              ><ContentSlot :use="$slots.message" /></label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              <span v-if="v$.message.$error" class="error-alert">
                {{ v$.message.$errors[0].$message }}
              </span>
              <p class="mt-4 text-xs text-gray-500">
                <ContentSlot :use="$slots.rule" />
              </p>
              <input type="hidden" name="_fd" value="0" class="form-data-marker">
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg transition ease-in-out duration-300 bg-primary-600 sm:w-fit hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              :class="{'opacity-25 cursor-not-allowed': !isFormValid }"
              :disabled="!isFormValid"
            >
              <ContentSlot v-if="!loading" :use="$slots.submitButton" />
              <Loading v-if="loading" class="w-20 h-5 mx-auto" :is-full-page="false" color="#FFFFFF" />
            </button>
          </form>
        </div>
        <div
          class="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1"
        >
          <div>
            <div
              class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16"
            >
              <svg
                class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
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
            <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              <ContentSlot :use="$slots.companyInfo" />
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.companyName" />
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16"
            >
              <svg
                class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
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
            <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              <ContentSlot :use="$slots.location" />
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.address" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '~/utils/i18n-validators'

const props = defineProps({
  successMessage: {
    type: String,
    required: true,
  },
})

const formData = reactive({
  name: '',
  email: '',
  jobTitle: '',
  message: '',
})

const loading = ref(false)
const { locale } = useI18n()
const isSuccess = ref(false)

onMounted(() => {
  window._fd.scan()
})

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

const apiRequest = computed(() => {
  if (locale.value === 'en') {
    return 'https://api.form-data.com/f/ontirdwzd09gw275ggg3bl'
  }
  return 'https://api.form-data.com/f/ekjf63pz9fge1xrfc1wtj'
})

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (isFormCorrect) {
    loading.value = true
    await axios.post(apiRequest.value, formData)
    loading.value = false
    isSuccess.value = !isSuccess.value
    v$.value.$reset()
    Object.assign(formData, { name: '', email: '', jobTitle: '', message: '' })
    toast(props.successMessage, {
      theme: 'auto',
      type: 'success',
      dangerouslyHTMLString: true,
    })
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
</style>
