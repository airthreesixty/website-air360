<template>
  <nav
    class="bg-white pl-8 pr-4 py-2 top-0 z-10"
    :class="{'is-homepage absolute w-full' : isHomepage, 'border-gray-200 border-b-1 sticky': !isHomepage}"
  >
    <div v-if="isHomepage" class="bg-gradient h-60 md:h-70 lg:h-82" />
    <div class="relative flex flex-wrap items-center justify-between max-w-screen-[1400px] mx-auto">
      <NuxtLink :to="$localePath('/')">
        <span class="sr-only">Air360</span>
        <Logo
          class="h-6 mr-3 w-auto sm:h-7 xl:h-8 filter homepage-logo"
          :class="{'hover:drop-shadow-white': isHomepage, 'hover:(drop-shadow-primary)': !isHomepage}"
          :is-dark="!isHomepage"
          :aria-hidden="true"
        />
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 md:ml-2.5 lg:ml-3 text-sm rounded-lg order-2 transition-shadow lg:hidden hover:ring-2 hover:ring-opacity-20 focus:outline-none focus:ring-2"
          :class="{'text-white hover:ring-white focus:ring-white': isHomepage, 'text-gray-500 hover:ring-gray-500 focus:ring-gray-500': !isHomepage}"

          aria-controls="navbar-default"
          :aria-expanded="isActive"
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
          class="w-full lg:flex items-center"
          :class="{hidden: !isActive,'menu-active dropdown sm:max-w-[300px]': isActive}"
        >
          <div v-if="isActive" class="flex justify-center mt-6">
            <div class="max-w-[100px]">
              <nuxt-img src="/favicon.png" width="200" />
            </div>
          </div>
          <ul
            class="flex flex-col pb-2 mt-4 border items-center border-none space-y-2 lg:(flex-row space-x-8 mt-0 space-y-0 text-base font-medium border-0 p-4)"
          >
            <li>
              <NuxtLink :to="$localePath('/product')" class="menu__link">
                {{ $t("product.title") }}
              </NuxtLink>
            </li>
            <hr v-if="isActive" class="h-1 w-2/3">
            <li>
              <NuxtLink :to="$localePath('/blog')" class="menu__link">
                {{ $t("blog") }}
              </NuxtLink>
            </li>
            <hr v-if="isActive" class="h-1 w-2/3">
            <li>
              <a
                :href="runtimeConfig.public.appUrl"
                class="menu__link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ $t("login") }}</a>
            </li>
            <hr v-if="isActive" class="h-1 w-2/3">
            <li class="pt-2 lg:pt-0">
              <ButtonPrimary slug="/request-demo" :theme="isHomepage && !isActive ? 'outline' : 'primary'">
                {{ $t("request-demo.title") }}
              </ButtonPrimary>
            </li>
          </ul>
        </div>
        <div class="relative order-1 lg:order-3 !lg:pr-4">
          <button
            class="menu__link svg"
            aria-controls="language-modal"
            :aria-expanded="isLangActive"
            @click="toggleLang"
          >
            <span class="sr-only">Open language menu</span>
            <fa-icon class="fa-lg" :icon="['fa', 'earth-americas']" :aria-hidden="true" />
          </button>
          <div v-show="isLangActive" id="language-modal" class="dropdown top-full mt-2 right-0 w-40 flex justify-center items-center" @click="toggleLang">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const isActive = ref(false)
const isLangActive = ref(false)
const isHomepage = computed(() => getPathWithoutLocale(route.fullPath) === '/')

const toggleMenu = () => {
  isActive.value = !isActive.value
  isLangActive.value = false
}

const toggleLang = () => {
  isLangActive.value = !isLangActive.value
  isActive.value = false
}

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
</script>

<style lang="postcss">
.bg-gradient {
  width: 100%;
  background: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
  transform: skewY(-8deg) translateY(-150px);
  position: absolute;
  left: 0;
  top: auto;
}

.menu-active {
  @apply top-full mt-1 right-0;
}

.menu__link {
  @apply block py-2 font-semibold text-gray-500 transition-all hover:(text-shadow-primary text-primary-600);

  .is-homepage & {
    @apply !lg:text-white !hover:text-shadow-white;
  }

  &.router-link-exact-active {
    @apply text-primary-600;
  }

  :not(.is-homepage) &.svg:hover svg {
    @apply filter drop-shadow-primary;
  }

  .is-homepage &.svg{
    @apply !text-white;

    &:hover svg {
      @apply filter drop-shadow-white;
    }
  }
}

.homepage-logo:hover {
  path {
    @apply fill-primary-600;
  }
}

.is-homepage .homepage-logo:hover {
  path {
      @apply fill-white;
  }
}
</style>
