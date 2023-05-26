<template>
  <div class="container flex justify-center mx-auto">
    <div class="py-20 max-w-[600px]">
      <div class="">
        <h1 class="text-black-600 font-bold text-2xl mb-6 md:mb-10 md:text-3xl lg:text-4xl">
          How much additional revenue can you generate thanks to Air360 in the next 6 months?
        </h1>
        <div class="border-1 border-gray-200 rounded-lg shadow-md px-5 py-5">
          <h2 class="text-black-600 font-bold text-xl mb-5">
            Calculate
          </h2>
          <InputComponent id="sessions" label="Online store's monthly sessions" type="text" class="mb-4" />
          <InputComponent id="sessions" label="Current conversion rate(%)" type="text" class="mb-4" />
          <InputComponent id="sessions" label="Average order value" type="text" />
          <div class="flex justify-center">
            <button
              class="text-white bg-primary-600 my-8 text-base font-bold inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg w-full py-3 focus:outline-none"
            >
              Calculate
            </button>
          </div>
          <p>Blablabla</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
