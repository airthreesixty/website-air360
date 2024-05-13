<template>
  <div class="container pt-10 pb-6 md:pb-10 lg:pt-14">
    <div class="">
      <div class="text-center">
        <span class="font-bold text-primary-600 text-base uppercase">New case studies</span>
        <h1 class="title1 my-5 font-bold text-black-600 max-w-[800px] mx-auto">
          The psychology behind highly effective landing pages
        </h1>
        <div class="text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" />
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col mt-5 md:flex-row md:gap-4">
            <div class="w-52 md:mb-0">
              <ButtonPrimary theme="primary" :slug="localePath('/case-studies/test-study')">
                <fa-icon class="text-white text-lg mr-1" :icon="['far', 'play']" />Watch
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>