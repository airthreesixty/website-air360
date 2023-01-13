<template>
  <div class="bg-white">
    <div class="max-w-screen-[1400px] mx-auto pb-16 px-4 lg:px-8">
      <div class="overflow-hidden rounded-lg bg-primary-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              <span class="block"><ContentSlot :use="$slots.title" /></span>
            </h2>
            <p class="mt-4 text-md leading-6 text-primary-100 lg:text-xl">
              <ContentSlot :use="$slots.description" />
            </p>
            <a href="#" class="mt-8 inline-flex items-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-primary-600 shadow transition ease-in-out duration-300 hover:bg-primary-100">Air360を試してみる</a>
          </div>
        </div>
        <div class="aspect-w-5 aspect-h-3 -mt-6 z-0 md:aspect-w-2 md:aspect-h-1">
          <img class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top md:translate-x-16 lg:translate-y-20" src="/whatIsAir360.png" alt="App screenshot">
        </div>
      </div>
    </div>
  </div>
</template>
