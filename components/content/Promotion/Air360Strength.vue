<template>
  <div class="my-10 lg:my-15 py-8 px-4">
    <div class="flex flex-col items-center shadow-primary rounded-lg px-4 py-6 max-w-[600px] mx-auto">
      <div class="">
        <Logo2 class="w-13 h-auto" />
      </div>
      <h2 class="text-black-600 text-2xl font-bold my-4">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div>
        <ul>
          <li class="flex items-center gap-3">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', 'circle-check']" /><ContentSlot :use="$slots.desc1" unwrap="p" />
          </li>
          <li class="flex items-center gap-3 mt-2">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', 'circle-check']" /><ContentSlot :use="$slots.desc2" unwrap="p" />
          </li>
          <li class="flex items-center gap-3 mt-2">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', 'circle-check']" /><ContentSlot :use="$slots.desc3" unwrap="p" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-primary {
    box-shadow: 0 0 0 2px rgba(231,75,145,1), 8px 8px 0 0 rgba(231,75,145,1);
}
</style>
