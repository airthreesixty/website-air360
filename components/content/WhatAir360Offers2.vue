<template>
  <section class="pt-22 md:pt-0 lg:-mt-16">
    <h2
      class="container mb-2 text-3xl mx-auto font-semibold text-black-600 text-center  md:text-4xl lg:text-5xl dark:text-white"
    >
      <ContentSlot :use="$slots.mainTitle" unwrap="p" />
    </h2>
    <SingleDescription
      :alt="$t('how-air360-helps1')"
      :is-video="true"
      video-src="/videos/opaVideo.mp4"
      poster="/smartDescription.webp"
      icon="/icons/iconCustomer.svg"
    >
      <template #title>
        <ContentSlot :use="$slots.title1" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description1" unwrap="p" />
      </template>
    </SingleDescription>
    <SingleDescription
      image-status="block"
      image-status2="hidden"
      :alt="$t('how-air360-helps2')"
      :is-video="true"
      video-src="/videos/sessionReplay.mp4"
      poster="/sessionReplay.webp"
      icon="/icons/iconSmile.svg"
      theme-color="#FA734C"
    >
      <template #title>
        <ContentSlot :use="$slots.title2" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description2" unwrap="p" />
      </template>
    </SingleDescription>
    <SingleDescription image-path="/noCode.png" :alt="$t('how-air360-helps3')" icon="/icons/iconQuick.svg" theme-color="#3C8BFF">
      <template #title>
        <ContentSlot :use="$slots.title3" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description3" unwrap="p" />
      </template>
    </SingleDescription>
  </section>
</template>
