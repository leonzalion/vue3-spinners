# vue3-spinners

[![npm version](https://img.shields.io/npm/v/vue3-spinners)](https://npmjs.com/package/vue3-spinners)

Spinner components for Vue 3.

These components were exported from Quasar's spinner components (<https://quasar.dev/vue-components/spinners>), so thanks to the Quasar team for making such an amazing UI library!

Online demo: <https://leonzalion.github.io/vue3-spinners>

<p align="center">
  <img src="https://raw.githubusercontent.com/leonzalion/vue3-spinners/main/packages/assets/images/spinners.gif" />
</p>

## Installation

```shell
npm install vue3-spinners
```

## Usage

In `main.ts`, import the necessary CSS file:

```typescript
import 'vue3-spinners/spinners.css';

// ... your app initialization code goes here
```

Then, import the spinners in your Vue component:

```vue
<script>
import {
  VueSpinner,
  VueSpinnerAudio,
  VueSpinnerBall,
  VueSpinnerBars,
  VueSpinnerBox,
  VueSpinnerClock,
  VueSpinnerComment,
  VueSpinnerCore,
  VueSpinnerDots,
  VueSpinnerFacebook,
  VueSpinnerGears,
  VueSpinnerGrid,
  VueSpinnerHearts,
  VueSpinnerHourglass,
  VueSpinnerInfinity,
  VueSpinnerIos,
  VueSpinnerOrbit,
  VueSpinnerOval,
  VueSpinnerPie,
  VueSpinnerPuff,
  VueSpinnerRadio,
  VueSpinnerRings,
  VueSpinnerTail,
} from 'vue3-spinners';

export default {
  components: {
    VueSpinner,
    VueSpinnerAudio,
    VueSpinnerBall,
    VueSpinnerBars,
    VueSpinnerBox,
    VueSpinnerClock,
    VueSpinnerComment,
    VueSpinnerCore,
    VueSpinnerDots,
    VueSpinnerFacebook,
    VueSpinnerGears,
    VueSpinnerGrid,
    VueSpinnerHearts,
    VueSpinnerHourglass,
    VueSpinnerInfinity,
    VueSpinnerIos,
    VueSpinnerOrbit,
    VueSpinnerOval,
    VueSpinnerPie,
    VueSpinnerPuff,
    VueSpinnerRadio,
    VueSpinnerRings,
    VueSpinnerTail,
  },
};
</script>

<template>
  <VueSpinner size='20' color='red' />
  <VueSpinnerAudio >
  <VueSpinnerBall />
  <VueSpinnerBars />
  <VueSpinnerBox />
  <VueSpinnerClock />
  <VueSpinnerComment />
  <VueSpinnerCore />
  <VueSpinnerDots />
  <VueSpinnerFacebook />
  <VueSpinnerGears />
  <VueSpinnerGrid />
  <VueSpinnerHearts />
  <VueSpinnerHourglass />
  <VueSpinnerInfinity />
  <VueSpinnerIos />
  <VueSpinnerOrbit />
  <VueSpinnerOval />
  <VueSpinnerPie />
  <VueSpinnerPuff />
  <VueSpinnerRadio />
  <VueSpinnerRings />
  <VueSpinnerTail />
</template>
```

Using `<script setup>` (recommended):

```vue
<script setup>
import {
  VueSpinner,
  // ...
} from 'vue3-spinners';
</script>

<template>
  <VueSpinner size="20" color="red" />
  <!-- ... -->
</template>
```

If you want the spinners to be available globally without needing to import them, add the following to your app's entrypoint:

```typescript
import { createApp } from 'vue';
import App from './app.vue';
import { VueSpinnersPlugin } from 'vue3-spinners';

const app = createApp(App);
app.use(VueSpinnersPlugin);
// ...
```

## Props

### size

Type: `string | number`
\
Default: `1em`

The size of the spinner.

### color

Type: `string`
\
Default: `currentColor`

The color of the spinner.

## Why not use Quasar directly?

Unfortunately, there are a few Quasar styles that conflict with those of TailwindCSS (e.g. `bg-white` and `bg-black`) that the Quasar team is [not planning on changing](https://github.com/quasarframework/quasar/issues/6775#issuecomment-865974606). Many of Quasar's components depend on these styles, so it's not possible to simply omit Quasar's CSS. Thus, I couldn't use Quasar for my project which heavily depends on WindiCSS, a superset of TailwindCSS. But, Quasar's UI components are some of the best out there, especially the spinners, so the best solution I could think of is exporting these spinners into a package independent of Quasar's CSS.
