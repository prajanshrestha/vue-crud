<template>
  <table>
    <thead>
      <tr>
        <th>#id</th>
        <th>Title</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td><img :src="product.image" :alt="product.title" width="90" /></td>
        <td>
          <router-link
            class="btn"
            :to="{ name: 'ProductEdit', params: { id: product.id } }"
            >Edit</router-link
          >
          <button class="btn btn-del" @click="del(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
export default {
  name: "Products",
  setup() {
    const products = ref([]);

    onMounted(async () => {
      const res = await fetch("http://localhost:7000/products");
      products.value = await res.json();
    });

    const del = async (id) => {
      await fetch(`http://localhost:7000/products/${id}`, {
        method: "DELETE",
      });

      products.value = products.value.filter((p) => p.id !== id);
    };

    return { products, del };
  },
};
</script>

<style></style>
