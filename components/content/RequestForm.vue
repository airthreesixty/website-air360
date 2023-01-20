<template>
  <section class="bg-white h-screen dark:bg-gray-900">
    <div
      class="max-w-screen-[1400px] px-4 py-8 mx-auto lg:grid lg:gap-20 lg:py-16 lg:grid-cols-12"
    >
      <div
        class="flex-col justify-between hidden mr-auto lg:flex lg:col-span-5 xl:col-span-6 xl:mb-0"
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
          <div class="flex">
            <svg
              class="w-6 h-6 mr-2 text-primary-600 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <h3
                class="mb-2 text-xl font-medium leading-none text-gray-900 dark:text-white"
              >
                <ContentSlot :use="$slots.title1" />
              </h3>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.description1" />
              </p>
            </div>
          </div>
          <div class="flex pt-8">
            <svg
              class="w-6 h-6 mr-2 text-primary-600 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <h3
                class="mb-2 text-xl font-medium leading-none text-gray-900 dark:text-white"
              >
                <ContentSlot :use="$slots.title2" />
              </h3>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.description2" />
              </p>
            </div>
          </div>
          <div class="flex pt-8">
            <svg
              class="w-6 h-6 mr-2 text-primary-600 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <h3
                class="mb-2 text-xl font-medium leading-none text-gray-900 dark:text-white"
              >
                <ContentSlot :use="$slots.title3" />
              </h3>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.description3" />
              </p>
            </div>
          </div>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a
                href="#"
                class="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >Term & Conditions</a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >Contact</a>
            </li>
          </ul>
        </nav>
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
        class="w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0 lg:col-span-7 xl:col-span-6"
      >
        <div class="p-6 space-y-4 lg:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 sm:text-2xl dark:text-white"
          >
            <ContentSlot :use="$slots.title" />
          </h1>
          <form class="space-y-4 lg:space-y-6" action="#" @submit.prevent="submitForm">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >お名前*</label>
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
              >メールアドレス*</label>
              <input
                id="email"
                v-model="formData.email"
                type="text"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                autocomplete="email"
                novalidate
              >
            </div>
            <span v-if="v$.email.$error" class="error-alert">
              {{ v$.email.$errors[0].$message }}
            </span>
            <div>
              <label
                for="job-title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >職種*</label>
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
            <div>
              <label
                for="phone-number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >電話番号(ハイフンなし)*</label>
              <input
                id="phone-number"
                v-model="formData.phoneNumber"
                type="tel"
                name="tel"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
              <span v-if="v$.phoneNumber.$error" class="error-alert">
                {{ v$.phoneNumber.$errors[0].$message }}
              </span>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                >
              </div>
              <div class="ml-3 error-alert">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                >By signing up, you are creating a Flowbite account, and you
                  agree to Flowbite’s
                  <a
                    class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    href="#"
                  >Terms of Use</a>
                  and
                  <a
                    class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    href="#"
                  >Privacy Policy</a>.</label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 disabled font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '~/utils/i18n-validators'

const formData = reactive({
  name: '',
  email: '',
  jobTitle: '',
  phoneNumber: '',
})

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    jobTitle: { required },
    phoneNumber: { required, numeric },
  }
})

const v$ = useVuelidate(rules, formData)

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
