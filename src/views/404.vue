<template>
  <div class="row">
    <header
      class="col-12 sticky-top bg-white d-flex justify-content-between py-4 shadow"
    >
      <Navbar />
      <h2 class="font-weight-bold">404 | Not Found</h2>
      <h2></h2>
    </header>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
export default {
  name: "notFound",
  components: {
    Navbar,
  },
};
</script>
