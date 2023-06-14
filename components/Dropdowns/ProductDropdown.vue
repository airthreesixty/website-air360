<template>
  <nav class="dropdown w-100">
    <div class="grid grid-cols-2">
      <div>
        <div class="font-bold text-black-600">
          Features
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-primary-600 w-5 mr-2" :icon="['far', 'laptop']" /></span>Web analysis
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-orange-600 w-5 mr-2" :icon="['far', 'mobile']" /></span>App analysis
        </div>
      </div>
      <div>
        <div class="font-bold text-black-600">
          Other
        </div>
        <div class="text-sm text-black-600 mt-4">
          <span><fa-icon class="text-lg text-blue-400 mr-2" :icon="['far', 'file-contract']" /></span>  Security & Compliance
        </div>
      </div>
    </div>
  </nav>
</template>
