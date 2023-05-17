<template>
  <div class="absolute top-11 right-5">
    <div class="bg-white rounded-lg w-20 py-2 flex justify-center items-center shadow-lg">
      <LangSwitcher />
      <div class="triangle" />
    </div>
  </div>
</template>

<style scoped>
.triangle::before {
  content: '';
  position: absolute;
  right: -5px;
  top: -4px;
  display: block;
  width: 0;
  height: 0;
  border-right: 12px solid transparent;
  border-bottom: 15px solid #ffffff;
  border-left: 12px solid transparent;
  transform: rotate(145deg);
}
</style>
