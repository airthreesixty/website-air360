<template>
  <div class="flex justify-center border-2 px-1 my-16 py-5 rounded-md">
    <div class="">
      <h2 class="text-center">
        {{ $t('contents') }}
      </h2>
      <ul v-for="(title, index) in paragraphTitles" :key="index">
        <li>
          <nuxt-link :to="`#${title.id}`">
            {{ title.text }}
          </nuxt-link>
        </li>
        <div v-if="title.children">
          <li
            v-for="(subTitle, num) in title.children"
            :key="num"
            class="pl-11"
          >
            <nuxt-link :to="`#${subTitle.id}`">
              {{ subTitle.text }}
            </nuxt-link>
          </li>
        </div>
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
