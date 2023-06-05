<template>
  <div class="bg-gray-50">
    <div class="container py-10">
      <div class="flex flex-col gap-5 sm:flex-row md:justify-around">
        <Card :title="$t('compliance.title')" :description="$t('compliance.desc')" :more="true" href="#enabled-compliance" />
        <Card :title="$t('security.title')" :description="$t('security.desc')" :more="true" href="#handling-protection" />
      </div>
    </div>
  </div>
</template>
