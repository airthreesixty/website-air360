<template>
  <div class="container py-5">
    <h2 class="title2 text-center mb-5">
      Air360 Security  Measures
    </h2>
    <div class="grid gap-5 grid-cols-1">
      <div v-for="card in cards" :key="card.title">
        <Card :title="card.title" :description="card.description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Monitoring of our Tracking pixel',
    description: 'Constantly conducted  to detect any malicious modification and ensure its delivery, integrity and safety',
  },
  {
    title: 'State-of-the-art encryption',
    description: 'Used in all Air360 products for data in transit and at rest',
  },
  {
    title: 'Multi-Factor Authentication (MFA)',
    description: 'Required for all our users to access to Air360 application adding an extra layer of security and keeping your accounts safe',
  },
  {
    title: 'Third-party security audits',
    description: 'Conducted regularly and before major releases, including penetration tests and vulnerability scans',
  },
  {
    title: 'Security best practices',
    description: 'Reviewed by third party companies regularly when important updates are performed on our systems',
  },
  {
    title: 'Customer data processed & stored in the EU',
    description: 'Air360 core systems are hosted on OVHcloud and Amazon Web Services ("AWS") servers located in France and Ireland and leverage all the security and compliance provided by OVHcloud/AWS: ISO (9001, 27001, 27017, and 27018), SOC 1, 2, and 3, PCI DSS',
  },
]
</script>
