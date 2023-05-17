<template>
  <div v-if="data">
    <ContentRenderer :value="data" />
    <ClientOnly>
      <div v-if="pending" class="mt-30 mb-15 flex justify-center">
        <Loading class="w-20 h-5" :is-full-page="false" />
      </div>
      <ContentRenderer v-else-if="lazyData" :value="lazyData" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const props = defineProps({
  page: {
    type: String,
    required: true,
  },
})

const { data } = await useAsyncData(props.page, () =>
  queryContent(
    `/${locale.value}/${props.page}`,
  ).findOne(),
)

const { data: lazyData, pending } = useLazyAsyncData(`${props.page}.lazy`, () =>
  queryContent(
    `/${locale.value}/${props.page}.lazy`,
  ).findOne(),
)

</script>
