<template>
  <section>
    <div class="container">
      <h1 class="title2 max-w-[1000px] mx-auto text-center mt-10">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p class="textp text-center md:max-w-[600px] lg:max-w-[800px] mx-auto my-5">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
      <div class="md:max-w-[700px] mx-auto mb-8">
        <iframe src="https://www.videoask.com/f13f7jxmz" allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" width="100%" height="600px" style="border: none; border-radius: 24px" />
      </div>
    </div>
    <SliderCompanies />
  </section>
</template>
