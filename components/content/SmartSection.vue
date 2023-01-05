<template>
  <section id="smart-section" class="bg-white scroll-p-8 dark:bg-gray-900">
    <div class="flex flex-col max-w-screen-xl px-4 py-10 mx-auto md:flex-row">
      <div id="accordion-collapse" data-accordion="collapse" class="flex-1">
        <h2 class="text-[#e74b91] text-3xl font-extrabold pb-3">
          <ContentSlot :use="$slots.smart" />
        </h2>
        <SingleAccordion :num="1" :icon-num="1" icon-color="#e74b91">
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
        <SingleAccordion :num="2" :icon-num="2" icon-color="#e74b91">
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
        <SingleAccordion :num="3" :icon-num="3" icon-color="#e74b91">
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
        <SingleAccordion :num="4" :icon-num="4" icon-color="#e74b91">
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
        <SingleAccordion :num="5" :icon-num="5" icon-color="#e74b91">
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
        <SingleAccordion :num="6" :icon-num="6" icon-color="#e74b91">
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
