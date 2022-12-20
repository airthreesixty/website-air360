<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="grid gap-16 sm:grid-cols-2 md:grid-cols-3">
        <div class="text-center text-gray-500">
          <a href="#">
            <h5
              class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <ContentSlot :use="$slots.title1" />
            </h5>
          </a>
          <span> <ContentSlot :use="$slots.description1" /></span>
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="Bonnie Avatar"
          />
        </div>
        <div class="text-center text-gray-500">
          <a href="#">
            <h5
              class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <ContentSlot :use="$slots.title2" />
            </h5>
          </a>
          <span> <ContentSlot :use="$slots.description2" /></span>
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="Jese Avatar"
          />
        </div>
        <div class="text-center text-gray-500">
          <a href="#">
            <h5
              class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <ContentSlot :use="$slots.title3" />
            </h5>
          </a>
          <span> <ContentSlot :use="$slots.description3" /></span>
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="Joseph Avatar"
          />
        </div>
      </div>
    </div>
  </section>
</template>
