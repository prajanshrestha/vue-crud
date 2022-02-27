<template>
  <div class="sidebar">
      <ul class="side-menu">
          <li><router-link :to="{name:'Products'}">Products</router-link></li>
          <li><a href="/admin/productCreate">Add Product</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "SidebBar",
};
</script>

<style></style>
