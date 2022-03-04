<template>
  <div class="app">
    <Header></Header>
    <article>
      <main>
        <router-view></router-view>
      </main>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Heder";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "assets/styles/styles.css";

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

article {
  position: relative;
  flex: 1 0 auto;
  padding: 30px;

  @media (max-width: 560px) {
    padding: 20px;
  }
}

footer {
  flex: 0 0 auto;
}
</style>
