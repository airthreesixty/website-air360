<template>
  <section id="intuitive-section" class="bg-[#6677D8] dark:bg-gray-900">
    <div class="flex flex-col max-w-screen-xl px-4 py-10 mx-auto md:flex-row">
      <div
        class="hidden h-full lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex flex-1"
      >
        <img src="/intuitiveAccordion.png" alt="phone illustration" loading="lazy">
      </div>
      <div id="accordion-collapse" data-accordion="collapse" class="flex-1">
        <h2 class="text-[#ffffff] text-3xl font-extrabold pb-3">
          <ContentSlot :use="$slots.intuitive" />
        </h2>
        <SingleAccordion :num="7" :icon-num="1" icon-color="#ffffff" text-color="#ffffff">
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
        <SingleAccordion :num="8" :icon-num="2" icon-color="#ffffff" text-color="#ffffff">
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

        <SingleAccordion :num="9" :icon-num="3" icon-color="#ffffff" text-color="#ffffff">
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

        <SingleAccordion :num="10" :icon-num="4" icon-color="#ffffff" text-color="#ffffff">
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
        <SingleAccordion :num="11" :icon-num="5" icon-color="#ffffff" text-color="#ffffff">
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
      </div>
    </div>
  </section>
</template>
