<template>
  <div class="bg-white">
    <div class="container py-10 lg:py-15">
      <h2 class="title2 text-center mb-5 md:mb-10">
        FAQs
      </h2>
      <div class="flex flex-col gap-5">
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question1" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer1" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question2" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer2" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question3" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer3" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question4" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer4" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question5" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer5" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question6" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer6" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question7" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer7" />
          </template>
        </AccordionBlock>
        <AccordionBlock>
          <template #title>
            <ContentSlot :use="$slots.question8" unwrap="p" />
          </template>
          <template #description>
            <slot name="answer8" />
          </template>
        </AccordionBlock>
      </div>
    </div>
  </div>
</template>
