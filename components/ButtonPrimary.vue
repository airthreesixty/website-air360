<template>
  <!-- <NuxtLink :to="$localePath(prop.slug)" class="text-white text-center bg-primary-600 text-base font-bold w-full px-6 py-3 inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg focus:outline-none"> -->
  <NuxtLink :to="$localePath(prop.slug)" class="button">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()

const prop = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
  /* svg {
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn {
    --width: 180px;
    --height: 60px;
    position: relative;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  } */

  a.button {
    display: block;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    width: 100%;
    margin: auto;
    padding: 12px 24px;
    color: #fff;
    font-weight: bold;
    background: #e74b91;
    position: relative;
    transition: 0.3s ease-in-out;
    border-radius: 8px;
}
a.button:hover {
    background: #fff;
    color: #e74b91;
    border-radius: 8px;
}
a.button:before, a.button:after {
  box-sizing: inherit;
  content: "";
  position: absolute;
  border: 2px solid transparent;
  width: 0;
  height: 0;
  border-radius: 8px;
}
a.button:before {
  top: 0;
  left: 0;
}
a.button:after {
  bottom: 0;
  right: 0;
}
a.button:hover:before, a.button:hover:after {
  width: 100%;
  height: 100%;
}
a.button:hover:before {
  border-top-color: #e74b91;
  border-right-color: #e74b91;
  transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
}
a.button:hover:after {
  border-bottom-color: #e74b91;
  border-left-color: #e74b91;
  transition: border-color 0s ease-out 0.2s, width 0.15s ease-out 0.2s, height 0.15s ease-out 0.3s;
}

</style>
