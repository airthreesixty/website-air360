<template>
  <ul>
    <DropdownsItemBlock :title="$t('product-dropdown.product')" @toggle="onToggle('product')">
      <template v-if="show.product" #subItems>
        <DropdownsSubItems :title="$t('product-dropdown.features')">
          <template #items>
            <DropdownsItems slug="/product/website-analysis" icon="laptop" :text="$t('product-dropdown.website-analysis')" text-color="text-primary-600" />
            <DropdownsItems slug="/product/app-analysis" icon="mobile" :text="$t('product-dropdown.app-analysis')" text-color="text-primary-600" />
          </template>
        </DropdownsSubItems>
        <DropdownsSubItems :title="$t('product-dropdown.other')">
          <template #items>
            <DropdownsItems slug="/product/security-compliance" icon="file-contract" :text="$t('product-dropdown.security-compliance')" text-color="text-blue-400" />
            <DropdownsItems slug="/data-integrations" icon="sliders" :text="$t('product-dropdown.data-integrations')" text-color="text-blue-400" />
          </template>
        </DropdownsSubItems>
      </template>
    </DropdownsItemBlock>
    <DropdownsItemBlock :title="$t('product-dropdown.inspiration')" @toggle="onToggle('inspiration')">
      <template v-if="show.inspiration" #subItems>
        <DropdownsSubItems>
          <template #items>
            <DropdownsItems slug="/blog" icon="newspaper" :text="$t('product-dropdown.blog')" text-color="text-blossom-600" />
            <DropdownsItems slug="/content-gallery" icon="building-columns" :text="$t('product-dropdown.content-gallery')" text-color="text-blossom-600" />
          </template>
        </DropdownsSubItems>
      </template>
    </DropdownsItemBlock>
    <li class="mb-3 mt-5">
      <ButtonPrimary theme="primary" slug="/request-demo">
        {{ $t("request-demo.title") }}
      </ButtonPrimary>
    </li>
    <li class="mb-3">
      <a :href="runtimeConfig.public.appUrl" class="button border-2 text-primary-600 font-bold text-base border-primary-600 transition ease-in-out duration-300 hover:opacity-80 focus:opacity-80">
        {{ $t("login") }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const show = reactive({
  product: false,
  inspiration: false,
})

const onToggle = (item: string) => {
  show[item] = !show[item]
}
</script>
