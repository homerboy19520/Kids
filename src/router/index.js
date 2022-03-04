import VueRouter from "vue-router";
import Form from "@/pages/FormPage";
import Preview from "@/pages/PreviewPage";

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
