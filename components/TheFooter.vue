<template>
  <footer class="px-6 py-6 border-gray-200 border-t-1 lg:px-8 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <NuxtLink :to="$localePath('/')">
          <div class="flex items-center">
            <nuxt-img
              format="webp"
              src="https://www.air360.io/wp-content/uploads/2022/05/air360-logo-bk.svg"
              class="mr-3 h-6 w-auto sm:h-7 xl:h-8"
              alt="Air360 Logo"
            />
          </div>
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
            href="https://www.instagram.com/weareair360/"
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
      <div class="grid grid-cols-2 gap-x-2 gap-y-6 md:gap-6 md:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("company") }}
          </h2>
          <ul class="text-gray-700 dark:text-gray-400">
            <li class="mb-4">
              <a
                href="https://esw.com/"
                class="hover:underline"
                target="_blank"
              >ESW<fa-icon class="fa-sm pl-1" :icon="['fas', 'arrow-up-right-from-square']" /></a>
            </li>
            <li class="mb-4">
              <a
                href="https://en-jp.wantedly.com/companies/company_4114459"
                class="hover:underline"
                target="_blank"
              >{{ $t("careers") }}<fa-icon class="fa-sm pl-1" :icon="['fas', 'arrow-up-right-from-square']" /></a>
            </li>
            <li>
              <NuxtLink :to="$localePath('/privacy-policy')">
                <div class="hover:underline">
                  {{ $t("privacy-policy") }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("inspiration") }}
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink :to="$localePath('/blog')">
                <div class="hover:underline">
                  {{ $t("blog") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="$localePath('/product')">
                <div class="hover:underline">
                  {{ $t("product") }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white"
          >
            {{ $t("help") }}
          </h2>
          <ul class="text-gray-700 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink :to="$localePath('/request-demo')">
                <div class="hover:underline">
                  {{ $t("request-demo") }}
                </div>
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink :to="$localePath('/contact')">
                <div class="hover:underline">
                  {{ $t("contact-us") }}
                </div>
              </NuxtLink>
            </li>
            <li>
              <a href="https://beta.air360.io/" target="_blank" class="hover:underline">{{ $t("login") }}<fa-icon class="fa-sm pl-1" :icon="['fas', 'arrow-up-right-from-square']" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
</script>
