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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const LogoBrandSalesforce = resolveComponent('LogoBrandSalesforce')
const LogoBrandAbtasty = resolveComponent('LogoBrandAbtasty')
const LogoBrandCoveo = resolveComponent('LogoBrandCoveo')

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
]
</script>
