<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="container py-8 mx-auto lg:flex lg:justify-center lg:gap-5 xl:gap-0 lg:py-16"
    >
      <div
        class="flex-col hidden mr-8 lg:block lg:justify-center lg:flex lg:items-center lg:flex-1"
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
        <div class="mb-30 lg:mb-0">
          <CompanyLogos2 />
        </div>
      </div>
      <div
        class="items-center justify-center flex flex-col flex-1 mb-6 text-2xl font-semibold text-black-600 lg:mb-0 dark:text-white"
      >
        <div
          class="w-full mx-auto bg-white"
        >
          <div
            class="rounded-lg bg-gray-100 shadow-lg px-8 py-9 lg:mt-8"
          >
            <div id="form" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const { locale } = useI18n()

useHead({
  titleTemplate: '',
  script: [
    {
      src: '//js-eu1.hsforms.net/forms/embed/v2.js',
    },
  ],
})

const redirectUrl = computed(() => {
  if (locale.value === 'en') {
    return `${runtimeConfig.public.baseUrl}/${locale.value}/ga4-migration-thank-you/`
  }
  return 'https://calendly.com/d/yjn-vr5-gk4/air360'
})

const formId = computed(() => {
  if (locale.value === 'en') {
    return '463df4e6-56a3-471b-970f-ea5632614406'
  }
  return '463df4e6-56a3-471b-970f-ea5632614406'
})

// formId has to be fixed after JP form is ready.
onMounted(() => {
  hbspt.forms.create({
    region: 'eu1',
    portalId: '27037851',
    formId: formId.value,
    target: '#form',
    redirectUrl: redirectUrl.value,
  })
})
</script>

<style lang="postcss">
.text-gradient {
   background: linear-gradient(126deg, rgba(45,146,233,1) 0%, rgba(100,74,213,1) 20%, rgba(193,65,172,1) 40%, rgba(231,33,146,1) 60%, rgba(240,77,102,1) 80%, rgba(253,112,67,1) 100%);
   color: transparent;
   background-clip: text;
}
</style>
