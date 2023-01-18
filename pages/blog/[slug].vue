<template>
  <div>
    <main v-if="data">
      <ContentRenderer :value="data">
        <div class="pb-16 lg:pb-24 bg-white dark:bg-gray-900">
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
                  <div class="not-format flex items-center">
                    <p class="text-primary-600">
                      Share:
                    </p>
                    <button data-tooltip-target="tooltip-linkedin" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        href="#"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                      >
                        <fa-icon class="fa-xl" :icon="['fab', 'linkedin']" />
                        <span class="sr-only">LinkedIn page</span>
                      </a>
                    </button>
                    <div id="tooltip-linkedin" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      Share on Linkedin
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                    <button data-tooltip-target="tooltip-twitter" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        href="#"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                      >
                        <fa-icon class="fa-xl" :icon="['fab', 'twitter']" />
                        <span class="sr-only">LinkedIn page</span>
                      </a>
                    </button>
                    <div id="tooltip-twitter" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      Share on Twitter
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                    <button data-tooltip-target="tooltip-facebook" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        href="#"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                      >
                        <fa-icon class="fa-xl" :icon="['fab', 'facebook']" />
                        <span class="sr-only">Facebook page</span>
                      </a>
                    </button>
                    <div id="tooltip-facebook" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      Share on Facebook
                      <div class="tooltip-arrow" data-popper-arrow />
                    </div>
                    <button data-tooltip-target="tooltip-link" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                      <a
                        href="#"
                        class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                      >
                        <fa-icon class="fa-xl" :icon="['fas', 'link']" />
                        <span class="sr-only">Link page</span>
                      </a>
                    </button>
                    <div id="tooltip-link" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                      Share link
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
                  class="mb-4 text-3xl font-semibold text-[#111827] lg:mb-6 lg:text-4xl dark:text-white"
                >
                  {{ data.title }}
                </h1>
              </header>
              <div class="prose">
                <div class="flex justify-center border-2 px-1 my-16 py-5">
                  <div class="">
                    <h2 class="text-center">目次</h2>
                    <ul v-for="(title, index) in paragraphTitles" :key="index">
                      <li>
                        <nuxt-link :to="`#${title.id}`">
                          {{ title.text }}
                        </nuxt-link>
                      </li>
                      <div v-if="title.children">
                        <li v-for="(subTitle, num) in title.children" :key="num" class="pl-11">
                          <nuxt-link :to="`#${subTitle.id}`">
                            {{ subTitle.text }}
                          </nuxt-link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
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
console.log(paragraphTitles)
if (!data.value) {
  router.push($localePath('/blog'))
}
</script>
