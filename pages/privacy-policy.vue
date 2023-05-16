<template>
  <div class="flex justify-center">
    <div class="prose max-w-screen-md px-6 py-12 lg:px-8 lg:py-16">
      <ContentPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

if ($i18n.locale._value === 'ja') {
  useHead({
    title: 'プライバシーポリシー',
    meta: [
      { hid: 'description', name: 'description', content: 'We respect the privacy of our customers, partners, suppliers of products or services, and clients. The purpose of this Privacy Policy is to provide you with information about how we collect personal information when you use this Web site; how we collect other information about your interactions with this Web site without identifying you as an individual; how we use, process, and disclose the information we collect; and your choices about how the information information about your choices regarding how the information is collected and used.' },
    ],
  })
} else {
  useHead({
    title: 'Privacy Policy',
    meta: [
      { hid: 'description', name: 'description', content: 'We respect the privacy of our customers, partners, suppliers of products or services, and clients. The purpose of this Privacy Policy is to provide you with information about how we collect personal information when you use this Web site; how we collect other information about your interactions with this Web site without identifying you as an individual; how we use, process, and disclose the information we collect; and your choices about how the information information about your choices regarding how the information is collected and used.' },
    ],
  })
}
</script>
