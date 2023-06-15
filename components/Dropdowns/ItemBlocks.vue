<template>
  <ul>
    <DropdownsItemBlock title="Product">
      <template #subItems>
        <DropdownsSubItems title="Features">
          <template #items>
            <DropdownsItems slug="/product/website-analysis" icon="laptop" text="Website analysis" text-color="text-primary-600" />
            <DropdownsItems slug="/product/app-analysis" icon="mobile" text="App analysis" text-color="text-orange-600" />
          </template>
        </DropdownsSubItems>
        <DropdownsSubItems title="Other">
          <template #items>
            <DropdownsItems slug="/product/security-compliance" icon="file-contract" text="Security & Compliance" text-color="text-blue-400" />
          </template>
        </DropdownsSubItems>
      </template>
    </DropdownsItemBlock>
    <DropdownsItemBlock title="Inspiration">
      <template #subItems>
        <DropdownsSubItems>
          <template #items>
            <DropdownsItems slug="/blog" icon="newspaper" text="Blog" text-color="text-blossom-600" />
            <DropdownsItems slug="/content-gallery" icon="building-columns" text="Content gallery" text-color="text-purple-600" />
          </template>
        </DropdownsSubItems>
      </template>
    </DropdownsItemBlock>
    <li class="mb-3 mt-5">
      <ButtonPrimary theme="primary" slug="/request-demo">
        {{ $t("request-demo.title") }}
      </ButtonPrimary>
    </li>
    <li>
      <a :href="runtimeConfig.public.appUrl" class="button border-2 text-primary-600 font-bold text-base border-primary-600 transition ease-in-out duration-300 hover:opacity-80 focus:opacity-80">
        {{ $t("login") }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

// const isActive = ref(false)

// const toggle = (index) => {
//   isActive.value = !isActive.value
// }
</script>
