<template>
  <section class="bg-white scroll-p-8 dark:bg-gray-900" id="smart-section">
    <div class="flex flex-col max-w-screen-xl px-4 py-10 mx-auto md:flex-row">
      <div id="accordion-collapse" data-accordion="collapse" class="flex-1">
        <h2 class="text-[#e74b91] text-3xl font-extrabold pb-3">
          <ContentSlot :use="$slots.smart" />
        </h2>
        <SingleAccordion :num="1" :iconNum="1" iconColor="#e74b91">
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
        <SingleAccordion :num="2" :iconNum="2" iconColor="#e74b91">
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
        <SingleAccordion :num="3" :iconNum="3" iconColor="#e74b91">
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
        <SingleAccordion :num="4" :iconNum="4" iconColor="#e74b91">
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
        <SingleAccordion :num="5" :iconNum="5" iconColor="#e74b91">
          <template #title>
            <ContentSlot :use="$slots.title5" />
          </template>
          <template #description1>
            <ContentSlot :use="$slots.description5" />
          </template>
          <template #description2>
            <ContentSlot :use="$slots.description5_2" />
          </template>
        </SingleAccordion>
        <SingleAccordion :num="6" :iconNum="6" iconColor="#e74b91">
          <template #title>
            <ContentSlot :use="$slots.title6" />
          </template>
          <template #description1>
            <ContentSlot :use="$slots.description6" />
          </template>
          <template #description2>
            <ContentSlot :use="$slots.description6_2" />
          </template>
        </SingleAccordion>
      </div>

      <div
        class="hidden h-full lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex flex-1"
      >
        <img src="/smart.png" alt="phone illustration" loading="lazy">
      </div>
    </div>
  </section>
</template>
