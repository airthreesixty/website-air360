<template>
  <div class="relative border-b border-gray-500 md:(border-none)" :class="{'vertical-border': border}">
    <h3 class="title-color text-2xl font-bold mb-6">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>
    <div class="prose mb-6 text-gray-500">
      <ContentSlot :use="$slots.desc" unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    border: boolean
    titleColor: string
}

const props = withDefaults(defineProps<Props>(), {
  border: true,
  titleColor: '#E74B91',
})

const theme = {
  titleColor: props.titleColor,
}

</script>

<style scoped>
@media screen and (min-width: 767px) {
    .vertical-border::after {
        content: "";
        background: #6B7280;
        display: block;
        height: 100%;
        position: absolute;
        left: calc(40px / 2 * -1);
        top: 0;
        width: 1px;
    }
}

.title-color {
    color: v-bind('theme.titleColor');
}
</style>
