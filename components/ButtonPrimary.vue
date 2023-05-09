<template>
  <NuxtLink v-if="theme === 'primary'" :to="$localePath(slug)" class="button bg-primary-600 transition ease-in-out duration-300 hover:bg-primary-700">
    <div class=" text-white font-bold text-base">
      <slot />
    </div>
  </NuxtLink>
  <NuxtLink v-if="theme === 'transparent'" :to="$localePath(slug)" class="button button-transparent bg-white home-hero__button-download">
    <div class=" text-primary-600 font-bold text-base">
      <slot />
    </div>
  </NuxtLink>
  <NuxtLink v-if="theme === 'outline'" :to="$localePath(slug)" class="button border-2 transition ease-in-out duration-300 hover:opacity-80">
    <div class="text-white font-bold text-base">
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup>
const { $localePath } = useNuxtApp()

defineProps({
  slug: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
})

const createSVG = (width, height, radius) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const rectangle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect',
  )

  svg.setAttributeNS(
    'http://www.w3.org/2000/svg',
    'viewBox',
    `0 0 ${width} ${height}`,
  )

  rectangle.setAttribute('x', '0')
  rectangle.setAttribute('y', '0')
  rectangle.setAttribute('width', '100%')
  rectangle.setAttribute('height', '100%')
  rectangle.setAttribute('rx', `${radius}`)
  rectangle.setAttribute('ry', `${radius}`)
  rectangle.setAttribute('pathLength', '10')

  svg.appendChild(rectangle)

  return svg
}

onMounted(() => {
  document.querySelectorAll('.button-primary, .button-transparent').forEach((button) => {
    const style = getComputedStyle(button)

    const lines = document.createElement('div')

    lines.classList.add('lines')

    const groupTop = document.createElement('div')
    const groupBottom = document.createElement('div')

    const svg = createSVG(
      button.offsetWidth,
      button.offsetHeight,
      parseInt(style.borderRadius, 10),
    )

    groupTop.appendChild(svg)
    groupTop.appendChild(svg.cloneNode(true))
    groupTop.appendChild(svg.cloneNode(true))
    groupTop.appendChild(svg.cloneNode(true))

    groupBottom.appendChild(svg.cloneNode(true))
    groupBottom.appendChild(svg.cloneNode(true))
    groupBottom.appendChild(svg.cloneNode(true))
    groupBottom.appendChild(svg.cloneNode(true))

    lines.appendChild(groupTop)
    lines.appendChild(groupBottom)

    button.appendChild(lines)

    button.addEventListener('pointerenter', () => {
      button.classList.add('start')
    })

    svg.addEventListener('animationend', () => {
      button.classList.remove('start')
    })
  })
})

</script>

<style>
.button {
  display: flex;
  height: 48px;
  padding: 12px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
}

.button-primary {
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  outline: none;
  border: none;
  background: #e74b91;
  position: relative;
  color: #000000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, ), 0 4px 16px rgba(0, 0, 0, ), 0 4px 24px rgba(0, 0, 0, );
}

.button-transparent {
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  outline: none;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, ), 0 4px 16px rgba(0, 0, 0, ), 0 4px 24px rgba(0, 0, 0, );
}

.button-primary.start .lines svg, .button-transparent.start .lines svg {
  animation: stroke 0.3s linear;
}

.button-primary .lines, .button-transparent .lines {
  position: absolute;
  inset: 0;
  mix-blend-mode: hard-light;
  pointer-events: none;
  z-index: 1;
}

.button-primary .lines>div, .button-transparent .lines>div {
  position: absolute;
  inset: 0;
}

.button-primary .lines>div:last-child, .button-transparent .lines>div:last-child {
  transform: rotate(180deg);
}

.button-primary .lines>div svg, .button-transparent .lines>div svg {
  display: block;
  position: absolute;
  inset: 0;
  overflow: visible;
  fill: none;
  stroke-width: 2;
  stroke: #e74b91;
  width: 100%;
  height: 100%;
  stroke-dasharray: 12 12;
  stroke-dashoffset: 12;
  opacity: 0;
  transform: rotate(-1deg) translate3d(0, 0, 0);
}

.button-transparent .lines > div svg {
  display: block;
  position: absolute;
  inset: 0;
  overflow: visible;
  fill: none;
  stroke-width: 2;
  stroke: #c9e9ff;
  width: 100%;
  height: 100%;
  stroke-dasharray: 12 12;
  stroke-dashoffset: 12;
  opacity: 0;
  transform: rotate(-1deg) translate3d(0, 0, 0);
}

.button-primary .lines>div svg:nth-child(1) {
  stroke: #4ba6e7
}

.button-primary .lines>div svg:nth-child(2) {
  stroke-width: 2px;
  filter: blur(6px);
}

.button-primary .lines>div svg:nth-child(3) {
  stroke-width: 2px;
  filter: blur(3px);
}

.button-primary .lines>div svg:nth-child(4) {
  stroke-width: 3px;
  filter: blur(8px);
}

.button-transparent .lines > div svg:nth-child(1) {
  stroke: #01ffc2;
}

.button-transparent .lines>div svg:nth-child(2) {
  stroke-width: 6px;
  filter: blur(20px);
}

.button-transparent .lines>div svg:nth-child(3) {
  stroke-width: 5px;
  filter: blur(6px);
}

.button-transparent .lines>div svg:nth-child(4) {
  stroke-width: 10px;
  filter: blur(56px);
}

@keyframes stroke {

  30%,
  55% {
    opacity: 1;
  }

  100% {
    stroke-dashoffset: 5;
    opacity: 0;
  }
}
</style>
