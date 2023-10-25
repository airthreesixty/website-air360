<template>
  <div class="">
    <ContentRenderer :value="data">
      <div class="bg-white flex justify-center">
        <div class="pt-10 pb-5">
          <div class="container lg:flex lg:justify-between gap-8">
            <div>
              <article
                class="mx-auto format format-sm sm:format-base lg:format-lg format-blue"
              >
                <div class="pt-5 pb-6 md:pb-5 lg:py-10">
                  <div class="md:(grid grid-cols-2 gap-5)">
                    <div class="text-center self-center md:text-left">
                      <div class="text-xs font-semibold">
                        <nuxt-link :to="localePath('/guides')" class="hover:underline text-black-600">
                          Guides
                        </nuxt-link>
                        <fa-icon class="mx-3" :icon="['far', 'caret-right']" /><span class="text-primary-600">
                          {{ data?.title }}
                        </span>
                      </div>
                      <h1 class="title1 my-5 font-bold text-black-600">
                        {{ data?.title }}
                      </h1>
                      <div class="text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8">
                        {{ data?.description }}
                      </div>
                    </div>
                    <div class="flex items-center">
                      <nuxt-img format="webp" :src="data?.image" loading="lazy" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" class="rounded-full" />
                    </div>
                  </div>
                </div>
                <div class="md:(grid grid-cols-10 gap-x-8)">
                  <div class="hidden md:(col-span-3 block mt-12)">
                    <div class="md:(sticky top-40 flex flex-col gap-4)">
                      <div v-for="{id, text} in paragraphTitles" :key="id">
                        <nuxt-link :to="`#${id}`" class="font-bold" :class="{'!text-pink-600': id === activeTocId } ">
                          {{ text }}
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="prose nuxt-content md:col-span-7">
                    <ContentRendererMarkdown ref="nuxtContent" :value="data" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </ContentRenderer>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { GuideArticle } from '~~/interfaces/blog'

const { $dayjs } = useNuxtApp()
const localePath = useLocalePath()
const { locale, t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const fullPath = route.fullPath
const activeTocId = ref<String | null>(null)
const nuxtContent = ref(null)

const { data } = await useAsyncData(`guide-${route.params.slug}/`, () =>
  queryContent<GuideArticle>(
    `/${locale.value}${getPathWithoutLocale(route.path)}`,
  ).findOne(),
)

const paragraphTitles = computed(() => data._rawValue.body.toc.links ?? [])

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
const observerOptions = reactive({
  root: nuxtContent.value,
  threshold: 0.5,
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        activeTocId.value = id
      }
    })
  }, observerOptions)

  document.querySelectorAll('.nuxt-content h2[id]').forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})

if (!data.value) {
  router.push(localePath('/guides'))
}

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
  description: data.value?.metaDesc,
  ogDescription: data.value?.metaDesc,
  ogImage: data.value?.image,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${fullPath}`,
})

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('guides'), item: localePath('/guides/') },
  { name: data.value?.title },
]

useSchemaOrg([
  defineArticle({
    '@type': 'BlogPosting',
    image: data.value?.image,
    datePublished: $dayjs(data.value?.published)
      .locale(locale).format('YYYY-MM-DD'),
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
