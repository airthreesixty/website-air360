<template>
  <SingleDescription>
    <template #title>
      <ContentSlot :use="$slots.title1" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description1" />
    </template>
  </SingleDescription>
  <SingleDescription bg-color="gray-50" image-status="block" image-status2="hidden">
    <template #title>
      <ContentSlot :use="$slots.title2" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description2" />
    </template>
  </SingleDescription>
  <SingleDescription>
    <template #title>
      <ContentSlot :use="$slots.title3" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description3" />
    </template>
  </SingleDescription>
</template>
