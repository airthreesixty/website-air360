<template>
  <div>
    <Dropdown :text="title1">
      <template #dropdownDesc>
        <slot name="description1" />
      </template>
      <template #dropdownDesc2>
        <slot name="description2" />
      </template>
    </Dropdown>
    <!-- <Dropdown :text="title2">
      <template #dropdownDesc>
        <ContentSlot :use="$slots.dropdownDesc" />
      </template>
      <template #dropdownDesc2>
        <ContentSlot :use="$slots.dropdownDesc2" />
      </template>
    </Dropdown>
    <Dropdown :text="title3">
      <template #dropdownDesc>
        <ContentSlot :use="$slots.dropdownDesc" />
      </template>
      <template #dropdownDesc2>
        <ContentSlot :use="$slots.dropdownDesc2" />
      </template>
    </Dropdown>
    <Dropdown :text="title4">
      <template #dropdownDesc>
        <ContentSlot :use="$slots.dropdownDesc" />
      </template>
      <template #dropdownDesc2>
        <ContentSlot :use="$slots.dropdownDesc2" />
      </template>
    </Dropdown> -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  title1: string,
  title2?: string,
  title3?: string,
  title4?: string,
}
defineProps<Props>()
</script>
