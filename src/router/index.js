import VueRouter from "vue-router";
import Form from "@/pages/Form";
import Preview from "@/pages/Preview";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Form",
      component: Form,
    },
    {
      path: "/preview",
      name: "Preview",
      component: Preview,
    },
  ],
});
