<template>
  <div class="flex justify-center my-16">
    <div class="border-2 border-blue-300 max-w-md">
      <h2 class="text-center !bg-blue-300 !border-none toc">
        <fa-icon class="" :icon="['fa', 'table']" />
        {{ $t('contents') }}
      </h2>
      <ul class="toc-lists">
        <li v-for="(title, index) in paragraphTitles" :key="index">
          <nuxt-link :to="`#${title.id}`">
            {{ index + 1 }}. {{ title.text }}
          </nuxt-link>
          <section v-if="title.children">
            <ul>
              <li
                v-for="(subTitle, num) in title.children"
                :key="num"
                class="pl-11"
              >
                <nuxt-link :to="`#${subTitle.id}`" class="bullet-point">
                  {{ subTitle.text }}
                </nuxt-link>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~~/interfaces/blog'

defineProps({
  paragraphTitles: {
    type: Array as () => Title[],
    required: true,
  },
})
</script>

<style scoped>
.toc {
  color:white;
  padding: 10px 0;
  margin-top: 0;
}

.toc-lists > li {
  padding: 0 20px;
}

li::before {
  display: none;
}

.bullet-point::before {
  content: '•';
  margin-right: 5px;
  color: #6b7280;
}
</style>
