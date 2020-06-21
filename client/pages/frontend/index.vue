
<template>
<div v-scroll-spy="{ sectionSelector: '.page-menu' , offset: 75 }"
    id="main-container">
    <!-- Navigation -->
    <navigation-one-page> </navigation-one-page>
    <login />

    <skin-choose v-if="false"
        class="bg-primary inverse"> </skin-choose>
    
    <!-- Footer -->
    <footer class="bg-white py-5">
        <div class="container-fluid">
            <div class="small text-center text-muted">Copyright &copy; 2020 - <strong>FondoApp</strong></div>
        </div>
    </footer>

</div>
</template>
<script>

import NavigationOnePage from '@/components/Module/Frontend/NavigationOnePage'
import Login from '@/components/Module/Frontend/Login'

export default {
  components: {
    NavigationOnePage,
    Login
  },
  layout: 'frontend'
}

</script>


<style lang="scss">
.page-compare {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: #fff;
  display: flex;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

</style>


