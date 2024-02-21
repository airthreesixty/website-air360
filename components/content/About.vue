<template>
  <div class="container py-10 lg:py-15">
    <span class="text-primary-600">Company</span>
    <h1 class="title1 mt-3 mb-10">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left">
        <tbody>
          <slot name="tableRow" />
        </tbody>
      </table>
    </div>
  </div>
</template>
