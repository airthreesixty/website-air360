<template>
  <ContentDoc />
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('contact.title'),
  titleTemplate: '',
  meta: [
    { hid: 'description', name: 'description', content: t('contact.content') },
  ],
  script: [{ src: 'https://static.form-data.com/js/form-data-tools.v1.min.js' }],
})

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('contact.title') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'ContactPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
