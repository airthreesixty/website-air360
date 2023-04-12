<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-[1400px] px-6 py-12 mx-auto md:gap-4 md:grid-cols-2 lg:gap-8 xl:gap-0 lg:py-16 lg:px-8 lg:grid-cols-12"
    >
      <div class="pb-6 md:hidden lg:mt-0 lg:col-span-5">
        <nuxt-img
          format="webp"
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="hero image"
          width="583"
          height="349"
        />
      </div>
      <div class="mr-auto place-self-center lg:col-span-7 md:flex-1">
        <h1
          class="max-w-2xl mb-6 font-bold text-2xl bg-gradient-to-r from-[#6278DF] to-blue-[#3DDC97] bg-clip-text text-transparent lg:mb-8 md:text-3xl lg:text-4xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <h2
          class="max-w-2xl mb-1 font-light text-gray-500 md:text-base lg:mb-8 lg:text-xl xl:leading-8 dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" unwrap="p" />
        </h2>
        <div class="pt-3 mt-5 mb-2 md:items-center md:w-1/2">
          <ButtonPrimary slug="/request-demo" theme="primary">
            {{ $t("request-demo") }}
          </ButtonPrimary>
        </div>
      </div>
      <div class="hidden md:block md:flex lg:mt-0 lg:col-span-5">
        <nuxt-img
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="Hero image"
          class="object-scale-down"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  transform: scale(-1, 1)
}
</style>
