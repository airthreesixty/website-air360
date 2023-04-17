<template>
  <div class="flex justify-center my-16 border-2 border-primary-600">
    <div class="">
      <h2 class="text-center bg-primary-600 toc">
        <fa-icon class="" :icon="['fa', 'table']" />
        {{ $t('contents') }}
      </h2>
      <ul class="px-2">
        <li v-for="(title, index) in paragraphTitles" :key="index">
          <nuxt-link :to="`#${title.id}`">
            {{ title.text }}
          </nuxt-link>
          <section v-if="title.children">
            <ul>
              <li
                v-for="(subTitle, num) in title.children"
                :key="num"
                class="pl-11"
              >
                <nuxt-link :to="`#${subTitle.id}`">
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
</style>
