<template>
  <div
    class="bg-white py-2 top-0 z-10"
    :class="{'is-homepage absolute w-full' : isHomepage, 'border-gray-200 border-b-1 sticky': !isHomepage}"
  >
    <div v-if="isHomepage" class="bg-gradient h-60 md:h-70 lg:h-82" />
    <div class="relative flex flex-wrap items-center justify-between container">
      <MenuMobile :is-active="isActive" @close="onClose" />
      <transition>
        <div v-if="isActive" class="bg-neutral-800/70 fixed inset-0" />
      </transition>
      <header role="banner">
        <NuxtLink
          :to="localePath('/')"
          class="h-6 w-auto sm:h-7 xl:h-8 filter homepage-logo"
          :class="{'hover:drop-shadow-white focus:drop-shadow-white': isHomepage, 'hover:drop-shadow-primary focus:drop-shadow-primary': !isHomepage}"
        >
          <span class="sr-only">Air360</span>
          <Logo
            :is-dark="!isHomepage"
            :aria-hidden="true"
          />
        </NuxtLink>
      </header>
      <div class="flex items-center space-x-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-2.5 lg:ml-3 text-sm rounded-lg order-2 transition-shadow lg:hidden hover:ring-2 hover:ring-opacity-20 focus:outline-none focus:ring-2"
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
        <nav
          id="navbar-default"
          class="w-full hidden lg:flex items-center"
          arial-label="Main menu"
        >
          <ul
            class="flex flex-col pb-2 mt-4 border items-center border-none lg:(flex-row space-x-8 mt-0 text-base font-medium border-0 p-4)"
          >
            <li class="relative hidden cursor-pointer lg:block">
              <div class="menu__link" aria-controls="product-modal" :aria-expanded="isProductActive" @mouseover="openProduct">
                <span class="sr-only">Open Product menu</span>
                {{ $t("product.title") }}
              </div>
              <DropdownsProductDropdown v-show="isProductActive" @mouseleave="closeProduct" />
            </li>
            <li class="relative hidden cursor-pointer lg:block">
              <div class="menu__link" aria-controls="inspiration-modal" :aria-expanded="isInspirationActive" @mouseover="openInspiration">
                <span class="sr-only">Open Inspiration menu</span>
                {{ $t("inspiration") }}
              </div>
              <div v-show="isInspirationActive" id="inspiration-modal" class="dropdown right-1 mt-1 w-51 text-center" @mouseleave="closeInspiration">
                <div class="font-bold text-black-600 text-left">
                  {{ $t('product-dropdown.inspiration') }}
                </div>
                <div class="flex items-center mt-4 mb-2">
                  <span><fa-icon class="text-lg text-blossom-600 w-5 mr-2" :icon="['far', 'newspaper']" /></span>
                  <nuxt-link :to="localePath('/blog')" class="block text-sm text-black-600 transition-all py-1 hover:(text-primary-600 text-shadow-primary)">
                    {{ $t("blog") }}
                  </nuxt-link>
                </div>
                <div class="flex items-center mb-2">
                  <span><fa-icon class="text-lg text-blossom-600 w-5 mr-2" :icon="['far', 'building-columns']" /></span>
                  <nuxt-link :to="localePath('/content-gallery')" class="block text-sm text-black-600 transition-all hover:(text-primary-600 text-shadow-primary)">
                    {{ $t('gallery') }}
                  </nuxt-link>
                </div>
                <div v-if="locale === 'en'" class="flex items-center mb-2">
                  <span><fa-icon class="text-lg text-blossom-600 w-5 mr-2" :icon="['far', 'book']" /></span>
                  <nuxt-link :to="localePath('/guides')" class="block text-sm text-black-600 transition-all hover:(text-primary-600 text-shadow-primary)">
                    {{ $t('product-dropdown.guides') }}
                  </nuxt-link>
                </div>
              </div>
            </li>
            <li>
              <a
                :href="runtimeConfig.public.appUrl"
                class="menu__link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ $t("login") }}</a>
            </li>
            <li class="pt-2 lg:pt-0">
              <nuxt-link :to="localePath('/request-demo')">
                <ButtonPrimary slug="javascript:void(0)" :theme="isHomepage ? 'outline' : 'primary'">
                  {{ $t("request-demo.title") }}
                </ButtonPrimary>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="relative order-1 cursor-pointer lg:order-3 !lg:pr-4">
          <div
            class="menu__link svg"
            aria-controls="language-modal"
            :aria-expanded="isLangActive"
            @mouseover="openLang"
          >
            <span class="sr-only">Open language menu</span>
            <fa-icon class="fa-lg" :icon="['fa', 'earth-americas']" :aria-hidden="true" />
          </div>
          <div v-show="isLangActive" id="language-modal" class="dropdown top-full mt-2 right-0 w-40 text-center" @mouseleave="closeLang">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const isActive = ref(false)
const isLangActive = ref(false)
const isInspirationActive = ref(false)
const isProductActive = ref(false)

const isHomepage = computed(() => getPathWithoutLocale(route.fullPath) === '/' || getPathWithoutLocale(route.fullPath).startsWith('/?'))

const openProduct = () => {
  isProductActive.value = true
  isInspirationActive.value = false
  isLangActive.value = false
  isActive.value = false
}

const closeProduct = () => {
  isProductActive.value = false
}

const openInspiration = () => {
  isInspirationActive.value = true
  isLangActive.value = false
  isActive.value = false
  isProductActive.value = false
}

const closeInspiration = () => {
  isInspirationActive.value = false
}

const openLang = () => {
  isLangActive.value = true
  isActive.value = false
  isInspirationActive.value = false
  isProductActive.value = false
}

const closeLang = () => {
  isLangActive.value = false
}

const toggleMenu = () => {
  isActive.value = true
  isLangActive.value = false
  isInspirationActive.value = false
  isProductActive.value = false
}

const onClose = () => {
  isActive.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isActive.value = false
  }
}

watch(() => route.path, () => {
  isActive.value = false
  isProductActive.value = false
})

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
  @apply block py-2 font-semibold text-gray-500 transition-all hover:(text-shadow-primary text-primary-600) focus:text-shadow-primary;

  .is-homepage & {
    @apply !lg:text-white !hover:text-shadow-white !focus:text-shadow-white;
  }

  &.router-link-exact-active {
    @apply text-primary-600;
  }

  :not(.is-homepage) &.svg {
    &:hover,
    &:focus {
      svg {
        @apply filter drop-shadow-primary;
      }
    }
  }

  .is-homepage &.svg {
    @apply !text-white;

    &:hover,
    &:focus {
      svg {
        @apply filter drop-shadow-white;
      }
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
