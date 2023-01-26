<template>
  <section class="pt-22 lg:pt-30">
    <h2
      class="mb-4 text-3xl font-semibold text-black-600 text-center px-4 md:text-4xl lg:text-5xl dark:text-white"
    >
      <ContentSlot :use="$slots.mainTitle" />
    </h2>
    <SingleDescription image-path="/intuitiveDescription.jpeg" button-status="hidden" :alt="$t('how-air360-helps1')">
      <template #subtext>
        <ContentSlot :use="$slots.subtext1" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title1" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description1" />
      </template>
    </SingleDescription>
    <SingleDescription image-path="/smartDescription.jpeg" button-status="hidden" image-status="block" image-status2="hidden" :alt="$t('how-air360-helps2')">
      <template #subtext>
        <ContentSlot :use="$slots.subtext2" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title2" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description2" />
      </template>
    </SingleDescription>
    <SingleDescription image-path="/dataIntegration.png" button-status="hidden" :alt="$t('how-air360-helps3')">
      <template #subtext>
        <ContentSlot :use="$slots.subtext3" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title3" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description3" />
      </template>
    </SingleDescription>
  </section>
</template>
