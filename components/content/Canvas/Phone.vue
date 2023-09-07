<template>
  <div>
    <h1>Hello</h1>
    <!-- <TresCanvas window-size shadows alpha clear-color="black">
      <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
      <OrbitControls />
      <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshNormalMaterial />
      </TresMesh>
      <TresGridHelper />
    </TresCanvas> -->
  </div>
</template>

<script setup lang="ts">
// import { OrbitControls, useTweakPane } from '@tresjs/cientos'

const sphereRef = ref()

// const { onLoop } = useRenderLoop()
// onLoop(({ elapsed }) => {
//   if (sphereRef.value) {
//     sphereRef.value.position.y = Math.sin(elapsed)
//   }
// })
</script>
