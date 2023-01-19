<template>
  <div>
    <main v-if="data">
      <ContentRenderer :value="data">
        <div class="bg-white dark:bg-gray-900">
          <img :src="data.image" alt="" class="h-90 mb-10 w-full object-cover">
          <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article
              class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
            >
              <div class="flex items-center justify-between">
                <nuxt-link
                  v-for="(tag, index) in data.tags"
                  :key="index"
                  class="bg-blue-100 text-blue-400 text-xs font-semibold px-2.5 py-0.5 mr-2 rounded dark:bg-purple-200 dark:text-purple-900"
                  :to="$localePath(`/blog/tag/${tag}`)"
                >
                  {{ $t(`tag.${tag}`) }}
                </nuxt-link>
                <aside aria-label="Share social media">
                  <div class="flex items-center">
                    <p class="text-primary-600">
                      {{ $t('share') }}:
                    </p>
                    <button data-tooltip-target="tooltip-linkedin" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://jp.air360.io${fullPath}/`"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                        rel="nofollow noopener"
                        target="_blank"
                      >
                        <fa-icon class="fa-xl" :icon="['fab', 'linkedin']" />
                      </a>
                    </button>
                    <div id="tooltip-linkedin" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      {{ $t('share-on-linkedin') }}
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                    <button data-tooltip-target="tooltip-twitter" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        :href="`https://twitter.com/intent/tweet?text=https://jp.air360.io${fullPath}/`"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                        rel="nofollow noopener"
                        target="_blank"
                      >
                        <fa-icon class="fa-xl" :icon="['fab', 'twitter']" />
                      </a>
                    </button>
                    <div id="tooltip-twitter" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      {{ $t('share-on-twitter') }}
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                    <button data-tooltip-target="tooltip-facebook" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        :href="`http://www.facebook.com/share.php?u=https://jp.air360.io${fullPath}/`"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                        rel="nofollow noopener"
                        target="_blank"
                      >
                        <fa-icon class="fa-xl" :icon="['fab', 'facebook']" />
                      </a>
                    </button>
                    <div id="tooltip-facebook" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      {{ $t('share-on-facebook') }}
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                    <button data-tooltip-target="tooltip-link" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" @click="copy">
                      <div
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                      >
                        <fa-icon class="fa-xl" :icon="['fas', 'link']" />
                      </div>
                    </button>
                    <div id="tooltip-link" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      {{ $t('share-link') }}
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                  </div>
                </aside>
              </div>
              <header class="my-4 lg:mb-10 not-format">
                <div class="flex items-center justify-between mb-6 not-italic">
                  <div
                    class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
                  >
                    <img
                      class="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    >
                    <div>
                      <a
                        href="#"
                        rel="author"
                        class="text-xl font-bold text-gray-900 dark:text-white"
                      >Jese Leos</a>
                      <p
                        class="text-base font-light text-gray-500 dark:text-gray-400"
                      >
                        Graphic Designer, educator & CEO Flowbite
                      </p>
                      <p
                        class="text-base font-light text-gray-500 dark:text-gray-400"
                      >
                        <time>{{ data.published }}</time>
                      </p>
                    </div>
                  </div>
                </div>
                <h1
                  class="mb-6 text-3xl font-semibold text-[#111827] lg:text-4xl dark:text-white"
                >
                  {{ data.title }}
                </h1>
              </header>
              <div class="prose">
                <TableOfContents :paragraph-titles="paragraphTitles" />
                <ContentRendererMarkdown :value="data" />
              </div>
            </article>
          </div>
        </div>
      </ContentRenderer>
    </main>
    <NewsLetter />
  </div>
</template>

<script setup lang="ts">
import useClipboard from 'vue-clipboard3'
import { BlogArticle } from '~~/interfaces/blog'

const { $i18n, $localePath } = useNuxtApp()
const route = useRoute()
const router = useRouter()

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent<BlogArticle>(
    `/${$i18n.locale._value}${getPathWithoutLocale(route.path)}`,
  ).findOne(),
)
const paragraphTitles = data._rawValue.body.toc.links

if (!data.value) {
  router.push($localePath('/blog'))
}

const fullPath = route.fullPath

const { toClipboard } = useClipboard()

const copy = async () => {
  try {
    await toClipboard(`https://jp.air360.io${fullPath}/`)
  } catch (e) {
    console.error(e)
  }
}
</script>
