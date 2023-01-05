<template>
  <section>
    <div class="pb-8 px-4 bg-gray-50 dark:bg-gray-900 sm:py-16 lg:px-6">
      <div class="space-y-8 max-w-screen-[1400px] mx-auto md:grid md:grid-cols-2 lg:grid-cols-3  md:gap-8 xl:gap-10 md:space-y-0">
        <SingleCard>
          <template #title>
            <ContentSlot :use="$slots.title1" />
          </template>
          <template #description>
            <ContentSlot :use="$slots.description1" />
          </template>
        </SingleCard>
        <SingleCard>
          <template #title>
            <ContentSlot :use="$slots.title2" />
          </template>
          <template #description>
            <ContentSlot :use="$slots.description2" />
          </template>
        </SingleCard>
        <SingleCard>
          <template #title>
            <ContentSlot :use="$slots.title3" />
          </template>
          <template #description>
            <ContentSlot :use="$slots.description3" />
          </template>
        </SingleCard>
      </div>
    </div>
  </section>
</template>
