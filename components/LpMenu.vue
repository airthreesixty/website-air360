<template>
  <nav
    class="absolute px-4 py-2 w-full top-0 left-0 bg-none rounded z-10 md:py-3 lg:py-0 dark:bg-gray-900"
  >
    <div class="relative flex flex-wrap items-center justify-between max-w-screen-[1400px] mx-auto">
      <NuxtLink :to="$localePath('/')">
        <img
          src="/air360Logo.svg"
          class="h-6 mr-3 w-auto sm:h-7 xl:h-8"
          alt="Air360 Logo"
        >
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        id="navbar-default"
        class="w-full transition ease-in-out rounded-lg duration-500 lg:block lg:w-auto lg:menu-active:hidden"
        :class="{hidden: !isActive,'menu-active': isActive, 'sm:max-w-[300px]': isActive}"
      >
        <div v-if="isActive" class="flex justify-center mt-6">
          <div class="max-w-[100px]">
            <img src="/favicon.png">
          </div>
        </div>
        <ul
          class="flex flex-col p-4 border items-center border-none lg:flex-row lg:space-x-8 lg:mt-0 lg:text-base lg:font-medium lg:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class="py-2">
            <NuxtLink :to="$localePath('/product')">
              <div
                :class="isActive ? 'menu__link' : 'lp-menu__link'"
              >
                {{ $t("product") }}
              </div>
            </NuxtLink>
          </li>
          <hr v-if="isActive" class="h-1 w-2/3">
          <li class="py-2">
            <NuxtLink :to="$localePath('/blog')">
              <div
                :class="isActive ? 'menu__link' : 'lp-menu__link'"
              >
                {{ $t("blog") }}
              </div>
            </NuxtLink>
          </li>
          <hr v-if="isActive" class="h-1 w-2/3">
          <li class="py-2">
            <a
              href="https://beta.air360.io/"
              :class="isActive ? 'menu__link' : 'lp-menu__link'"
              target="_blank"
              rel="noopener noreferrer"
            >{{ $t("login") }}</a>
          </li>
          <hr v-if="isActive" class="h-1 w-2/3">
          <li v-if="!isActive" class="py-2">
            <ButtonPrimary slug="/request-demo" theme="outline">
              {{ $t("request-demo") }}
            </ButtonPrimary>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()

const isActive = ref(false)

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isActive.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleMenu = () => {
  isActive.value = !isActive.value
}
</script>

<style lang="postcss">
.lp-menu__link {
  @apply block py-2 pl-3 pr-4 font-semibold text-white rounded md:p-0;
}

.bg-gradient {
    background: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
}

.menu-active {
  position: absolute;
  top: 60px;
  right: 0px;
  margin: auto 0px;
  display: block;
  background-color: white;
  height: 300px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
