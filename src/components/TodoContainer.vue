<template>
  <div class="container">
    <p>Todo List</p>
    <p>
      Data fetched from
      <a href="https://jsonplaceholder.typicode.com"
        >https://jsonplaceholder.typicode.com</a
      >
      for testing
    </p>
    <ul>
      <li v-for="todo in state.todo" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import axios from "../plugins/axios";

export default {
  setup() {
    const state = reactive({
      todo: ref({}),
    });

    onMounted(async () => {
      const { data } = await axios.get("/todos");
      state.todo = data;
    });

    return {
      state,
    };
  },
};
</script>
