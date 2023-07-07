<template>
  <div class="bg-gray-50 py-10">
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
const LogoBrandOneTrust = resolveComponent('LogoBrandOneTrust')
const LogoBrandPowerBi = resolveComponent('LogoBrandPowerBi')
const LogoBrandTwillioSegment = resolveComponent('LogoBrandTwillioSegment')
const LogoBrandGoogle = resolveComponent('LogoBrandGoogle')
const LogoBrandSftp = resolveComponent('LogoBrandSftp')
const LogoBrandGetFeedback = resolveComponent('LogoBrandGetFeedback')

const logos = [
  {
    component: LogoBrandSalesforce,
    scale: 1,
    title: 'Salesforce',
    description: "Unify marketing, sales, service, commerce, and IT on the world's #1 CRM",
    backDescription: 'Our  Integrations allows you to  enrich Air360 with Salesforce properties as well as push Air360 behavioral data to Salesforce to activate segments, and visualize users and metrics. ',
  },
  {
    component: LogoBrandAbtasty,
    scale: 1.2,
    title: 'AB Tasty',
    description: 'Build end-to-end experiences that drive growth across all digital channels. ',
    backDescription: 'Build end-to-end experiences that drive growth across all digital channels.',
  },
  {
    component: LogoBrandCoveo,
    scale: 1.2,
    title: 'Coveo',
    description: 'With the Coveo Relevance CloudTM, intelligent enterprise search is just the beginning.',
    backDescription: 'With the Coveo Relevance CloudTM, intelligent enterprise search is just the beginning.',
  },
  {
    component: LogoBrandShopify,
    scale: 1.2,
    title: 'Shopify',
    description: 'Connect all your behavioral data and visualize it in Air360 in one click.',
    backDescription: 'Use our Shopify plugin to connect Air360  to understand your users’ behavior.  If you are a Shopify Plus user, you will be able to track checkout behavior as well.',
  },
  {
    component: LogoBrandMailchimp,
    scale: 1.2,
    title: 'Mailchimp',
    description: 'Bring your audience data, marketing channels, and insights together.',
    backDescription: 'Activate Air360 Segments through Mailchimp  to make personalized email campaigns.',
  },
  {
    component: LogoBrandLooker,
    scale: 1.2,
    title: 'Looker',
    description: 'Turn your data into compelling stories of data visualization art.',
    backDescription: 'Extract all metrics and insights from Air360 and visualize them with beautiful dashboards  in Looker.',
  },
  {
    component: LogoBrandOneTrust,
    scale: 1.2,
    title: 'One Trust',
    description: "OneTrust empowers tomorrow's leaders to succeed through trust and impact.",
    backDescription: 'Our Integrations allows you to enrich Air360 with Salesforce properties as well as push Air360 behavioral data to Salesforce to activate segments, and visualize users and metrics.',
  },
  {
    component: LogoBrandPowerBi,
    scale: 1.2,
    title: 'Power BI',
    description: 'The unified, scalable platform for self-service and enterprise business intelligence (BI).',
    backDescription: 'Extract all metrics and insights from Air360 and visualize them in PowerBI',
  },
  {
    component: LogoBrandTwillioSegment,
    scale: 1.2,
    title: 'Segment',
    description: 'Data governance, control and tools you need to manage your customer data.',
    backDescription: 'Our  Integrations allows you to  enrich Air360 with Segment by Twilio properties as well as push Air360 behavioral data to Segment by Twilio to activate segments, and visualize users and metrics.',
  },
  {
    component: LogoBrandGoogle,
    scale: 1.2,
    title: 'Google Big Query',
    description: 'Fully-managed, serverless data warehouse that enables scalable analysis over petabytes of data.',
    backDescription: 'Push out all Air360 metrics and segments to Bigquery.',
  },
  {
    component: LogoBrandSftp,
    scale: 1.2,
    title: 'SFTP',
    description: 'File protocol for transferring large files over the web. ',
    backDescription: 'Push out all Air360 segments to your SFTP solution.',
  },
  {
    component: LogoBrandGetFeedback,
    scale: 1.2,
    title: 'Get Feedback',
    description: 'Get in-the-moment feedback from your customers.',
    backDescription: 'User or Get feedback connector to  to unlock the full potential of your service and link user feedback with their session replay to fully understand the root cause of their bad experiences',
  },

]

interface Props {
  isActive: boolean
}

defineProps<Props>()

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
