<template>
  <SingleDescription image-path="http://air360-website.s3-website-eu-west-1.amazonaws.com/assets/images/replays-2-764x478.jpeg">
    <template #title>
      <ContentSlot :use="$slots.title1" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description1" />
    </template>
  </SingleDescription>
  <SingleDescription bg-color="gray-50" image-status="block" image-status2="hidden" image-path="http://air360-website.s3-website-eu-west-1.amazonaws.com/assets/images/event-stats-1212x758.jpg">
    <template #title>
      <ContentSlot :use="$slots.title2" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description2" />
    </template>
  </SingleDescription>
  <SingleDescription image-path="/dataIntegration.png">
    <template #title>
      <ContentSlot :use="$slots.title3" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description3" />
    </template>
  </SingleDescription>
</template>
