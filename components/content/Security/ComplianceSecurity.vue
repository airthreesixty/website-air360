<template>
  <!-- <div class="">
    <div class="container py-10 lg:py-15">
      <div class="flex flex-col gap-5 sm:flex-row md:justify-around">
        <Card :title="$t('compliance.title')" :description="$t('compliance.desc')" :more="true" href="#enabled-compliance" />
        <Card :title="$t('security.title')" :description="$t('security.desc')" :more="true" href="#handling-protection" />
        <FlipCard />
        <FlipCard />
      </div>
    </div>
  </div> -->
  <section class="bg-white">
    <div class="container text-center py-10 lg:py-15">
      <h2 class="mb-4 title2 font-bold text-black-600">
        Security
      </h2>
      <div class="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div>
          <div class="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100">
            <svg class="mx-auto w-16 h-16 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold">
            {{ $t('compliance.title') }}
          </h3>
          <p class="mb-4 text-gray-500">
            {{ $t('compliance.desc') }}
          </p>
          <a href="#enabled-compliance" class="text-primary-600">More<fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" /></a>
        </div>
        <div>
          <div class="inline-flex justify-center items-center mb-6 w-24 h-24 bg-blue-100 rounded-lg">
            <svg class="mx-auto w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" /></svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold">
            {{ $t('security.title') }}
          </h3>
          <p class="mb-4 text-gray-500">
            {{ $t('security.desc') }}
          </p>
          <a href="#handling-protection" class="text-blue-400">More<fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
