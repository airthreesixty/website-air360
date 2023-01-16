<template>
  <section class="pt-22 lg:pt-30">
    <h2
      class="mb-4 text-2xl font-semibold text-black-600 text-center px-4 md:text-3xl lg:text-4xl dark:text-white"
    >
      <ContentSlot :use="$slots.mainTitle" />
    </h2>
    <SingleDescription image-path="/boostConversion.png" button-status="hidden">
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
    <SingleDescription image-path="/boostConversion.png" button-status="hidden" image-status="block" image-status2="hidden">
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
    <SingleDescription image-path="/boostConversion.png" button-status="hidden">
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
  </section>
</template>
