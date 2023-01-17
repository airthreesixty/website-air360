<template>
  <div>
    <main v-if="data">
      <ContentRenderer :value="data">
        <!-- <nuxt-link
          v-for="(tag, index) in data.tags"
          :key="index"
          :to="$localePath(`/blog/tag/${tag}`)"
        >
          {{ $t(`tag.${tag}`) }}
        </nuxt-link> -->
        <main class="pb-16 lg:pb-24 bg-white dark:bg-gray-900">
          <img :src="data.image" alt="" class="h-90 mb-10 w-full object-cover">
          <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article
              class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
            >
              <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                  <div
                    class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
                  >
                    <img
                      class="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
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
                </address>
                <h1
                  class="mb-4 text-3xl font-semibold text-black-600 lg:mb-6 lg:text-4xl dark:text-white"
                >
                  {{ data.title }}
                </h1>
              </header>
              <ContentRendererMarkdown :value="data" />
            </article>
          </div>
        </main>
      </ContentRenderer>
    </main>
    <NewsLetter />
  </div>
</template>

<script setup lang="ts">
import { BlogArticle } from "~~/interfaces/blog";

const { $i18n, $localePath } = useNuxtApp();
const route = useRoute();
const router = useRouter();

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent<BlogArticle>(
    `/${$i18n.locale._value}${getPathWithoutLocale(route.path)}`
  ).findOne()
);

if (!data.value) {
  router.push($localePath("/blog"));
}
</script>
