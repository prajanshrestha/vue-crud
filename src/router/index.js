import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Admin from "../pages/admin/Admin.vue";
import Products from "../pages/admin/Products.vue";
import ProductCreate from "../pages/admin/ProductCreate.vue";
import ProductEdit from "../pages/admin/ProductEdit.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/admin/products",
        name: "Products",
        component: Products,
      },
      {
        path: "/admin/productCreate",
        name: "ProductCreate",
        component: ProductCreate,
      },
      {
        path: "/admin/productEdit/:id",
        name: "ProductEdit",
        component: ProductEdit,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
