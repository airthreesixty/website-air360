<template>
  <div class="flex justify-center my-16">
    <div class="max-w-md">
      <!-- <h2 class="text-center !bg-blue-300 !border-none toc">
        <fa-icon class="" :icon="['fa', 'table']" />
        {{ $t('contents') }}
      </h2> -->
      <div class="px-3">
        <ul class="toc-lists">
          <li v-for="{id, text, children} in paragraphTitles" :key="id" class="bullet-point" :class="{ 'active': id === activeTocId } ">
            <nuxt-link :to="`#${id}`" class="!font-bold" :class="{'!text-black-600': id === activeTocId } ">
              {{ text }}
            </nuxt-link>
            <ul v-if="children">
              <li
                v-for="{id: childId, text: childText} in children"
                :key="childId"
                class="bullet-point-child"
                :class="{ 'active': childId === activeTocId } "
              >
                <nuxt-link :to="`#${childId}`" :class="{ '!font-bold': childId === activeTocId, '!text-black-600': childId === activeTocId }">
                  {{ childText }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { watchDebounced } from '@vueuse/shared'
import { Title } from '~~/interfaces/blog'
const props = defineProps({
  paragraphTitles: {
    type: Array as () => Title[],
    required: true,
  },
  activeTocId: {
    type: String,
    default: null,
  },
})
const sliderHeight = useState('sliderHeight', () => 0)
const sliderTop = useState('sliderTop', () => 0)
const tocLinksH2: Ref<Array<HTMLElement>> = ref([])
const tocLinksH3: Ref<Array<HTMLElement>> = ref([])
watchDebounced(() => props.activeTocId, (newActiveTocId) => {
  const h2Link = tocLinksH2.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)
  const h3Link = tocLinksH3.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)
  if (h2Link) {
    sliderHeight.value = h2Link.offsetHeight
    sliderTop.value = h2Link.offsetTop - 100
  } else if (h3Link) {
    sliderHeight.value = h3Link.offsetHeight
    sliderTop.value = h3Link.offsetTop - 100
  }
}, { debounce: 200, immediate: true })
</script>
<style scoped>
li > a {
  padding-left: 5px;
  font-size: 14px;
}
li > ul {
  margin: 0;
}
.toc {
  color:white;
  padding: 10px 0;
  margin-top: 0;
  margin-bottom: 0;
}
.toc-lists {
  position: relative;
}
.toc-lists > li {
  padding: 0 20px;
}
.toc-lists::before {
  position: absolute;
  content: "";
  top: 10px;
  left: 9px;
  bottom: 10px;
  width: 2px;
  background: #B1D1FF;
}
.bullet-point-child {
  padding-left: 0;
  margin: 2px 0;
}
.bullet-point {
  margin: 2px 0;
}
.bullet-point::before {
  content: "";
  position: absolute;
  top: 8px;
  background: #B1D1FF;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 2px solid #fff;
}
.bullet-point-child::before {
  content: "";
  position: absolute;
  top: 11.5px;
  background: #B1D1FF;
  width: 12px;
  height: 12px;
  left: -16px;
  border-radius: 100%;
  border: 3.5px solid #fff;
}
.active::before {
  border-color: #6EA8FA;
  background: #6EA8FA;
}
</style>
