<template>
  <ContentDoc />
</template>

<script setup lang="ts">
const { t } = useI18n()
const { $localePath } = useNuxtApp()

useHead({
  title: t('contact.title'),
  titleTemplate: '',
  meta: [
    { hid: 'description', name: 'description', content: t('contact.content') },
  ],
})

const breadcrumbs = [
  { name: t('home'), item: $localePath('/') },
  { name: t('contact.title') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'ContactPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
