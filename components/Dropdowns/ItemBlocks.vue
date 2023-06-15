<template>
  <ul>
    <li>
      <button class="w-full py-3 font-bold text-black-600 text-xl flex items-center justify-between">
        Product<fa-icon class="fa-lg text-primary-600" :icon="['far', 'angle-down']" />
      </button>
      <div>
        <p class="font-bold text-black-600 mt-1 mb-2">
          Features
        </p>
        <ul>
          <DropdownsItems slug="/product/website-analysis" icon="laptop" text="Website analysis" text-color="text-primary-600" />
          <DropdownsItems slug="/product/app-analysis" icon="mobile" text="App analysis" text-color="text-orange-600" />
        </ul>
      </div>
    </li>
    <li>
      <button class="w-full py-3 font-bold text-black-600 text-xl flex items-center justify-between">
        Other<fa-icon class="fa-lg text-primary-600" :icon="['far', 'angle-down']" />
      </button>
      <div>
        <p class="font-bold text-black-600 mt-1 mb-2">
          Features
        </p>
        <ul>
          <DropdownsItems slug="/product/security-compliance" icon="file-contract" text="Security & Compliance" text-color="text-blue-400" />
        </ul>
      </div>
    </li>
  </ul>
</template>
