<template>
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
      {{ $t('request-demo') }}
    </button>
  </form>
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
</style>
