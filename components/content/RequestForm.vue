<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="container py-14 mx-auto lg:flex lg:justify-center lg:gap-5 lg:py-16"
    >
      <div
        class="flex-col lg:flex lg:flex-1 lg:items-center"
      >
        <div class="mb-8 flex flex-col items-center">
          <div class="hidden lg:flex lg:justify-center">
            <nuxt-img src="/getStarted.webp" class="w-80 mb-6" alt="" />
          </div>
          <h1 class="mb-3 font-semibold text-center text-gradient text-2xl md:text-3xl">
            <ContentSlot :use="$slots.title1" unwrap="p" />
          </h1>
          <h2 class="mb-4 text-black-600 max-w-[500px] font-semibold text-center lg:text-lg">
            <ContentSlot :use="$slots.subtitle1" unwrap="p" />
          </h2>
        </div>
        <div class="hidden w-110 h-30 lg:block">
          <CompanyLogos />
        </div>
      </div>
      <div
        class="w-full mx-auto bg-white lg:flex-1"
      >
        <div
          class="rounded-lg bg-gray-100 shadow-lg px-8 py-9 lg:mt-8"
        >
          <div id="form" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n()
const redirectUrl = computed(() => {
  if (locale.value === 'en') {
    return 'https://lp.air360.io/meetings/tom-hanley/15-inbound'
  }
})

const formId = computed(() => {
  if (locale.value === 'en') {
    return 'ce87948e-2b30-4288-9aa3-12f37819edcc'
  }
  return '0bc4b5ca-41ac-4dfa-ad20-fbe71d2a1b6a'
})

definePageMeta({
  layout: 'request-demo',
})

useHead({
  titleTemplate: '',
  script: [
    {
      src: '//js-eu1.hsforms.net/forms/embed/v2.js',
    },
  ],
})

onMounted(() => {
  hbspt.forms.create({
    region: 'eu1',
    portalId: '27037851',
    formId: formId.value,
    target: '#form',
    redirectUrl: redirectUrl.value || '',
    onFormSubmit: function ($form) {
      // @ts-ignore
      Air360.identify($form.email.value)
    },
  })
})
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
