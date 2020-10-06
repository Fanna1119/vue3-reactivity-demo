<template>
  <h1>{{ store.count }}</h1>
  <button @click="store.count++">click me</button>
</template>

<script>
import useStore from "../store/store.js";
export default {
  name: "HelloWorld",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>

