<template>
  <footer class="border-gray-200 border-t-1 pt-8 pb-12">
    <div class="container md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <NuxtLink :to="localePath('/')">
          <span class="sr-only">Air360</span>
          <Logo
            class="mr-3 h-6 w-auto sm:h-7 xl:h-8"
            :is-dark="true"
            :aria-hidden="true"
          />
        </NuxtLink>
        <div class="flex my-6 space-x-4 md:justify-start md:mt-4 lg:mt-6">
          <a
            href="https://www.linkedin.com/company/air360/"
            class="text-gray-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
            target="_blank"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'linkedin']" />
            <span class="sr-only">LinkedIn page</span>
          </a>
          <a
            href="https://twitter.com/weareair360"
            class="text-gray-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
            target="_blank"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'twitter']" />
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            :href="locale === 'en' ? 'https://www.instagram.com/weareair360/' : 'https://www.instagram.com/weareair360_jp/'"
            class="text-gray-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
            target="_blank"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'instagram']" />
            <span class="sr-only">Instagram page</span>
          </a>
          <!-- <a
            href="https://www.youtube.com/@weareair360"
            class="text-gray-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
            target="_blank"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'youtube']" />
            <span class="sr-only">Youtube page</span>
          </a> -->
          <!-- <a
            href=" https://www.tiktok.com/@weareair360"
            class="text-gray-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
            target="_blank"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'tiktok']" />
            <span class="sr-only">Tiktok page</span>
          </a> -->
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-3 xl:ml-8">
        <div>
          <div
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("company") }}
          </div>
          <ul class="text-gray-600">
            <!-- <li class="mb-4">
              <a
                href="https://esw.com/"
                class="hover:underline"
                target="_blank"
              >ESW<fa-icon class="fa-sm pl-1" :icon="['fas', 'arrow-up-right-from-square']" /></a>
            </li>
            <li class="mb-4">
              <a
                href="https://careers.scalefast.com/"
                class="hover:underline"
                target="_blank"
              >{{ $t("careers") }}<fa-icon class="fa-sm pl-1" :icon="['fas', 'arrow-up-right-from-square']" /></a>
            </li> -->
            <li class="mb-4">
              <NuxtLink :to="localePath('/about')">
                <div class="hover:underline">
                  {{ $t("about.title") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/privacy-policy')">
                <div class="hover:underline">
                  {{ $t("privacy-policy.title") }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("product-dropdown.product") }}
          </div>
          <ul class="text-gray-600">
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/website-analysis')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.website-analysis") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/app-analysis')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.app-analysis") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/capabilities/data-collection')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.data-collection") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/capabilities/events-segments')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.events-segments") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/capabilities/data-analysis')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.data-analysis") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/capabilities/data-activation')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.data-activation") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/product/security-compliance')">
                <div class="hover:underline">
                  {{ $t("security.title") }}
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/data-integrations')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.data-integrations") }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("inspiration") }}
          </div>
          <ul class="text-gray-600">
            <li class="mb-4">
              <NuxtLink :to="localePath('/blog')">
                <div class="hover:underline">
                  {{ $t("blog") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="localePath('/content-gallery')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.content-gallery") }}
                </div>
              </NuxtLink>
            </li>
            <!-- <li v-if="locale === 'en'" class="mb-4">
              <NuxtLink :to="localePath('/product-tour')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.product-tour") }}
                </div>
              </NuxtLink>
            </li> -->
            <li v-if="locale === 'en'" class="mb-4">
              <NuxtLink :to="localePath('/guides')">
                <div class="hover:underline">
                  {{ $t("product-dropdown.guides") }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("help") }}
          </div>
          <ul class="text-gray-600">
            <li class="mb-4">
              <nuxt-link :to="localePath('/request-demo')">
                <div class="hover:underline">
                  {{ $t("request-demo.title") }}
                </div>
              </nuxt-link>
            </li>
            <li class="mb-4">
              <nuxt-link :to="localePath('/contact')">
                <div class="hover:underline">
                  {{ $t("contact-us") }}
                </div>
              </nuxt-link>
            </li>
            <li class="mb-4">
              <a :href="runtimeConfig.public.appUrl" target="_blank" class="hover:underline">{{ $t("login") }}<fa-icon class="fa-sm pl-1" :icon="['fas', 'arrow-up-right-from-square']" /></a>
            </li>
            <li v-if="locale === 'en'" class="mb-4">
              <NuxtLink :to="localePath('/roi-calculator-eur')">
                <div class="hover:underline">
                  {{ $t("roi-calc.title") }}
                </div>
              </NuxtLink>
            </li>
            <li>
              <a href="https://updown.io/nmpb" target="_blank" class="hover:underline">{{ $t("systemsStatus") }}</a>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("language") }}
          </div>
          <ul class="text-gray-600">
            <li class="mb-4">
              <LangSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()
const runtimeConfig = useRuntimeConfig()

// const lang = locale.value
// const url = computed(() => {
//   if (lang === 'en') {
//     return 'https://careers.scalefast.com/'
//   }

//   return 'https://www.wantedly.com/companies/company_4114459'
// })
</script>
