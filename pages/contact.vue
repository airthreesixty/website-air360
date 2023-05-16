<template>
  <ContentPage />
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

if ($i18n.locale._value === 'ja') {
  useHead({
    title: 'コンタクト',
    meta: [
      { hid: 'description', name: 'description', content: 'どのようなご用件でしょうか？Linkedin Twitter Instagram 会社案内 ESW - 採用情報 - プライバシーポリシー　- インスピレーション - ブログ - ヘルプ - デモを依頼する - お問い合わせ - ログイン' },
    ],
  })
} else {
  useHead({
    title: 'Contact Us',
    meta: [
      { hid: 'description', name: 'description', content: 'How can we help you. Linkedin Twitter Instagram About Us ESW - Careers - Privacy Policy - Inspiration - Blog - Help - Request a Demo - Contact Us - Login' },
    ],
  })
}
</script>
