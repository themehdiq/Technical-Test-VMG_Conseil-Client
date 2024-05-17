<script setup>
import HomeRecettes from "../components/HomeRecettes.vue";

</script>

<template>
  <main>
    <HomeRecettes />
    <Pagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" />
  </main>
</template>

<script>
import Pagination from '../components/Pagination.vue'

export default {
  name: 'App',
  components: {
    Pagination
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  }
}
</script>
