import { reactive } from "vue";

const store = reactive({
  searchQuery: "hello world",
  count: 0,
});

function useStore() {
  return store;
}

export default useStore;
