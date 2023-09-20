<template>
  <div class="bg-gray-50 pt-10 pb-20">
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <FlipCard
        v-for="(logo, index) in logos"
        :key="index"
        :title="logo.title"
        :description="logo.description"
        :logo="logo.component"
        :scale="logo.scale"
        :back-description="logo.backDescription"
        :is-active="isActive(index)"
        @card-clicked="cardClicked(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const LogoBrandSalesforce = resolveComponent('LogoBrandSalesforce')
const LogoBrandAbtasty = resolveComponent('LogoBrandAbtasty')
const LogoBrandCoveo = resolveComponent('LogoBrandCoveo')
const LogoBrandShopify = resolveComponent('LogoBrandShopify')
const LogoBrandMailchimp = resolveComponent('LogoBrandMailchimp')
const LogoBrandLooker = resolveComponent('LogoBrandLooker')
const LogoBrandKlaviyo = resolveComponent('LogoBrandKlaviyo')
const LogoBrandPowerBi = resolveComponent('LogoBrandPowerBi')
const LogoBrandTwillioSegment = resolveComponent('LogoBrandTwillioSegment')
const LogoBrandGoogle = resolveComponent('LogoBrandGoogle')
const LogoBrandSftp = resolveComponent('LogoBrandSftp')
const LogoBrandGetFeedback = resolveComponent('LogoBrandGetFeedback')

const { t } = useI18n()

const logos = [
  {
    component: LogoBrandSalesforce,
    scale: 0.9,
    title: 'Salesforce',
    description: t('logos.salesforce.desc'),
    backDescription: t('logos.salesforce.back-desc'),
  },
  {
    component: LogoBrandAbtasty,
    scale: 1.2,
    title: 'AB Tasty',
    description: t('logos.ab-tasty.desc'),
    backDescription: t('logos.ab-tasty.back-desc'),
  },
  {
    component: LogoBrandCoveo,
    scale: 1.3,
    title: 'Coveo',
    description: t('logos.coveo.desc'),
    backDescription: t('logos.coveo.back-desc'),
  },
  {
    component: LogoBrandShopify,
    scale: 1.2,
    title: 'Shopify',
    description: t('logos.shopify.desc'),
    backDescription: t('logos.shopify.back-desc'),
  },
  {
    component: LogoBrandMailchimp,
    scale: 1.4,
    title: 'Mailchimp',
    description: t('logos.mailchimp.desc'),
    backDescription: t('logos.mailchimp.back-desc'),
  },
  {
    component: LogoBrandLooker,
    scale: 1.1,
    title: 'Looker',
    description: t('logos.looker.desc'),
    backDescription: t('logos.looker.back-desc'),
  },
  {
    component: LogoBrandKlaviyo,
    scale: 1,
    title: 'Klaviyo',
    description: t('logos.klaviyo.desc'),
    backDescription: t('logos.klaviyo.back-desc'),
  },
  {
    component: LogoBrandPowerBi,
    scale: 1.2,
    title: 'Power BI',
    description: t('logos.power-bi.desc'),
    backDescription: t('logos.power-bi.back-desc'),
  },
  {
    component: LogoBrandTwillioSegment,
    scale: 1.5,
    title: 'Segment',
    description: t('logos.segment.desc'),
    backDescription: t('logos.segment.back-desc'),
  },
  {
    component: LogoBrandGoogle,
    scale: 0.9,
    title: 'Google Big Query',
    description: t('logos.google.desc'),
    backDescription: t('logos.google.back-desc'),
  },
  {
    component: LogoBrandSftp,
    scale: 1.2,
    title: 'SFTP',
    description: t('logos.sftp.desc'),
    backDescription: t('logos.sftp.back-desc'),
  },
  {
    component: LogoBrandGetFeedback,
    scale: 1.9,
    title: 'Get Feedback',
    description: t('logos.get-feedback.desc'),
    backDescription: t('logos.get-feedback.back-desc'),
  },

]

const activeIndex = ref(-1)

const isActive = (index: number) => {
  return index === activeIndex.value
}

const cardClicked = (index: number) => {
  if (isActive(index)) {
    activeIndex.value = -1
  } else {
    activeIndex.value = index
  }
}
</script>
