<template>
  <section class="pt-22 md:pt-0 lg:-mt-16">
    <h2
      class="mb-4 text-3xl mx-auto max-w-screen-[1400px] font-semibold text-black-600 text-center px-6 lg:px-8 md:text-4xl lg:text-5xl dark:text-white"
    >
      <ContentSlot :use="$slots.mainTitle" unwrap="p" />
    </h2>
    <SingleDescription image-path="/smartDescription.png" button-status="hidden" :alt="$t('how-air360-helps1')" :is-video="true" video-src="/opaVideo.mp4">
      <template #subtext>
        <ContentSlot :use="$slots.subtext1" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title1" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description1" unwrap="p" />
      </template>
    </SingleDescription>
    <SingleDescription
      image-path="/noCode.png"
      button-status="hidden"
      image-status="block"
      image-status2="hidden"
      :alt="$t('how-air360-helps2')"
    >
      <template #subtext>
        <ContentSlot :use="$slots.subtext2" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title2" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description2" unwrap="p" />
      </template>
    </SingleDescription>
    <SingleDescription image-path="/sessionReplay.png" button-status="hidden" :alt="$t('how-air360-helps3')">
      <template #subtext>
        <ContentSlot :use="$slots.subtext3" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title3" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description3" unwrap="p" />
      </template>
    </SingleDescription>
  </section>
</template>
