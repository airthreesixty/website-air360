<template>
  <div class="flex justify-center border-2 px-1 my-16 py-5 rounded-lg">
    <div class="px-2 -mt-6">
      <h2 class="text-center">
        {{ $t('contents') }}
      </h2>
      <ul>
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
