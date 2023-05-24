<template>
  <section>
    <div class="relative max-w-screen-[1400px] mx-auto bg-white">
      <div
        class="h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/2"
      >
        <nuxt-img
          format="webp"
          class="h-full w-full object-cover"
          src="eswImage.jpg"
          alt="ESW"
        />
      </div>
      <div class="relative py-24 md:py-32 lg:py-40 lg:px-8">
        <div class="pr-6 pl-6 md:ml-auto md:pl-16 md:w-1/2 lg:pr-0 xl:pl-32">
          <div>
            <div v-if="lang === 'ja'" class="grid grid-cols-12 gird-rows-3">
              <p
                class="col-start-1 col-end-7 mt-2 text-4xl font-bold tracking-tight text-black-600"
              >
                {{ $t('we-are') }}
              </p>
              <div
                class="col-start-4 col-end-9 row-start-2 md:col-start-4 md:col-end-9 lg:col-start-4"
              >
                <nuxt-img
                  format="webp"
                  src="https://esw.com/wp-content/themes/esw_com/img/logo_esw_a.svg"
                  alt="esw Logo"
                  class="w-40 py-8"
                />
              </div>
              <p
                class="col-start-6 col-end-13 md:col-start-5 lg:col-start-7 lg:col-end-14 row-start-3 mt-2 text-4xl font-bold tracking-tight text-black-600"
              >
                {{ $t('part-of') }}
              </p>
            </div>
            <div v-if="lang === 'en'" class="grid grid-cols-12 gird-rows-3">
              <p
                class="col-start-1 col-end-9 mt-2 text-6xl font-bold tracking-tight text-black-600"
              >
                {{ $t('we-are') }}
              </p>
              <div
                class="col-start-4 col-end-11 row-start-2 md:col-start-4 md:col-end-11 lg:col-start-4"
              >
                <p class="mt-7 text-6xl font-bold tracking-tight text-black-600">
                  {{ $t('part-of') }}
                </p>
              </div>
              <div
                class="col-start-6 col-end-13 md:col-start-5 lg:col-start-7 lg:col-end-14 row-start-3 mt-2"
              >
                <nuxt-img
                  format="webp"
                  src="https://esw.com/wp-content/themes/esw_com/img/logo_esw_a.svg"
                  alt="esw Logo"
                  class="w-40 py-8"
                />
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-center md:justify-start">
            <a
              href="https://esw.com/"
              target="_blank"
              class="text-white bg-primary-600 text-base font-bold mt-5 inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg px-6 py-3 mb-2 focus:outline-none"
            >{{ $t('esw-homepage') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const lang = locale.value
</script>
