<template>
  <div>
    <!-- Only to generate the images contained in the lazy part of the pages -->
    <!-- Note: this page is redirected to the homepage via the public/[lang]/generate-images.html -->
    <AsyncPage page="homepage" :use-client-only="false" />
    <AsyncPage page="product" :use-client-only="false" />
  </div>
</template>
