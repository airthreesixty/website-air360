<template>
  <div v-if="data && lazyData">
    <ContentRenderer :value="data" />
    <ClientOnly v-if="useClientOnly">
      <ContentRenderer :value="lazyData" />
    </ClientOnly>
    <ContentRenderer v-else :value="lazyData" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const props = defineProps({
  page: {
    type: String,
    required: true,
  },
  useClientOnly: {
    type: Boolean,
    default: true,
  },
})

const { data } = await useAsyncData(props.page, () =>
  queryContent(
    `/${locale.value}/${props.page}`,
  ).findOne(),
)

const { data: lazyData } = await useAsyncData(`${props.page}.lazy`, () =>
  queryContent(
    `/${locale.value}/${props.page}.lazy`,
  ).findOne(),
)
</script>
