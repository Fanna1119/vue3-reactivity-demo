<template>
  <div>
    {{ hello }}
    <br />
    <br />
    <input type="text" v-model="hello.searchQuery" />
    <br><br>
    <button @click="hello.count--">click me too!</button>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import useStore from "./store/store.js";
import { watch } from "vue";
export default {
  components: {
    HelloWorld,
  },
  setup() {
    const hello = useStore();

    return {
      hello,
    };
  },
};
</script>
