<template>
  <section class="bg-white dark:bg-gray-900" id="connected-section">
    <div class="flex flex-col max-w-screen-xl px-4 py-10 mx-auto md:flex-row">
      <div id="accordion-collapse" data-accordion="collapse" class="flex-1">
        <h2 class="text-blue-500 text-3xl font-extrabold pb-3">
          <ContentSlot :use="$slots.connected" />
        </h2>
        <SingleAccordion :num="15" :iconNum="1">
          <template #title>
            <ContentSlot :use="$slots.title1" />
          </template>
          <template #description1>
            <ContentSlot :use="$slots.description1" />
          </template>
          <template #description2>
            <ContentSlot :use="$slots.description1_2" />
          </template>
        </SingleAccordion>
        <SingleAccordion :num="13" :iconNum="2">
          <template #title>
            <ContentSlot :use="$slots.title2" />
          </template>
          <template #description1>
            <ContentSlot :use="$slots.description2" />
          </template>
          <template #description2>
            <ContentSlot :use="$slots.description2_2" />
          </template>
        </SingleAccordion>

        <SingleAccordion :num="14" :iconNum="3">
          <template #title>
            <ContentSlot :use="$slots.title3" />
          </template>
          <template #description1>
            <ContentSlot :use="$slots.description3" />
          </template>
          <template #description2>
            <ContentSlot :use="$slots.description3_2" />
          </template>
        </SingleAccordion>

        <SingleAccordion :num="15" :iconNum="4">
          <template #title>
            <ContentSlot :use="$slots.title4" />
          </template>
          <template #description1>
            <ContentSlot :use="$slots.description4" />
          </template>
          <template #description2>
            <ContentSlot :use="$slots.description4_2" />
          </template>
        </SingleAccordion>
      </div>

      <div
        class="hidden h-full lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex flex-1"
      >
        <img src="/connected.png" alt="phone illustration" loading="lazy" />
      </div>
    </div>
  </section>
</template>
