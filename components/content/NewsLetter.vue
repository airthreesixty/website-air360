<template>
  <div
    id="newsletter-modal"
    class="w-full pb-10 flex justify-center md:h-full"
  >
    <div class="px-6 w-full bg-white max-w-screen-[1000px] h-full rounded-lg md:h-auto">
      <div
        class="flex items-center justify-center bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <div>
          <div class="p-6 lg:p-10">
            <h3
              class="mb-2 text-xl font-semibold tracking-tight text-black-600 dark:text-white"
            >
              {{ $t('newsletter-title') }}
            </h3>
            <p
              class="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              {{ $t('newsletter-subtitle') }}
            </p>
            <form
              id="mc-embedded-subscribe-form"
              action="https://air360.us21.list-manage.com/subscribe/post?u=4797f92e2238d45352a848bc8&amp;id=254b202862&amp;f_id=006ee4e1f0"
              method="post"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_self"
            >
              <div
                class="items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
              >
                <div class="relative mr-3 w-full">
                  <label
                    for="mce-EMAIL"
                    class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    メールアドレス <span class="asterisk">*</span>
                  </label>
                  <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                  </div>
                  <input
                    id="mce-EMAIL"
                    type="email"
                    placeholder="Your Email"
                    name="EMAIL"
                    class="required email block p-3 pl-10 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 transition ease-in-out duration-300 focus:border-primary-600 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  >
                </div>
                <div>
                  <button
                    type="submit"
                    class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <nuxt-img
          src="https://www.air360.io/wp-content/uploads/2022/05/mochi-binoculars.png"
          format="webp"
          class="hidden rounded-r-lg md:flex h-30"
          alt="mochi"
        />
      </div>
    </div>
  </div>
</template>
