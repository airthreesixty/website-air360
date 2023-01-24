<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div
        class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16"
      >
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
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
            action="#"
            class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
            @submit.prevent="submitForm"
          >
            <div>
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >お名前*</label>
              <input
                id="first-name"
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
                for="last-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >メールアドレス*</label>
              <input
                id="last-name"
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
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >職種*</label>
              <input
                id="email"
                v-model="formData.jobTitle"
                type="text"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
              <span v-if="v$.jobTitle.$error" class="error-alert">
                {{ v$.jobTitle.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label
                for="phone-number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >電話番号*</label>
              <input
                id="phone-number"
                v-model="formData.phoneNumber"
                type="tel"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
              <span v-if="v$.phoneNumber.$error" class="error-alert">
                {{ v$.phoneNumber.$errors[0].$message }}
              </span>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >メッセージ*</label>
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
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg transition ease-in-out duration-300 bg-primary-600 sm:w-fit hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              :class="{'opacity-25 cursor-not-allowed': !isFormValid }"
              :disabled="!isFormValid"
            >
              <ContentSlot :use="$slots.submitButton" />
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
              会社情報:
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Scalefast Japan <br>Tax id: USXXXXXX
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
              ロケーション:
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              東京都千代田区大手町1丁目6番1号<br>大手町ビル1階,2階SPACES大手町
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, jpPhone } from '~/utils/i18n-validators'

const formData = reactive({
  name: '',
  email: '',
  jobTitle: '',
  phoneNumber: '',
  message: '',
})
const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    jobTitle: { required },
    phoneNumber: { required, numeric, jpPhone },
    message: { required },
  }
})

const v$ = useVuelidate(rules, formData)

const isFormValid = computed(() => {
  if (formData.name && formData.email && formData.jobTitle && formData.phoneNumber && formData.message) {
    return true
  } else {
    return false
  }
})

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) {
    alert('Fail')
  } else {
    alert('Success')
  }
}
</script>

<style lang="postcss">
.error-alert {
  @apply text-xs text-red-500;
}
</style>
