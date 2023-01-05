<template>
  <h2 :id="`accordion-collapse-heading-${props.num}`">
    <button
      type="button"
      :class="`flex items-center justify-between w-full p-5 font-medium text-left text-[${textColor}] focus:bg-transparent dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800`"
      :data-accordion-target="`#accordion-collapse-body-${props.num}`"
      aria-expanded="false"
      :aria-controls="`accordion-collapse-body-${props.num}`"
    >
      <span class="flex items-center">
        <fa-icon
          :class="`fa-xl text-[${iconColor}] w-5 h-5 mr-2 shrink-0`"
          :icon="['fas', `${props.iconNum}`]"
        />
        <slot name="title" />
      </span>
      <svg
        data-accordion-icon
        class="w-6 h-6 rotate-180 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </h2>
  <div
    :id="`accordion-collapse-body-${props.num}`"
    class="hidden"
    :aria-labelledby="`accordion-collapse-heading-${props.num}`"
  >
    <div
      :class="`px-5 pb-2 text-[${textColor}] font-light dark:border-gray-700 dark:bg-gray-900`"
    >
      <p :class="`mb-2 text-[${textColor}] dark:text-gray-400`">
        <slot name="description1" />
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        <slot name="description2" />
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: {
    type: Number,
    required: true,
  },
  iconNum: {
    type: Number,
    default: 1,
  },
  iconColor: {
    type: String,
    default: 'black',
  },
  textColor: {
    type: String,
    default: '#6B7280',
  },
})

</script>
