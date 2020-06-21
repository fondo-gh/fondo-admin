<template>
  <div class="dashboard">
    <card-component>
      <div class="container-fluid"></div>
      <br />
      <b-container fluid>
        <investors />
      </b-container>
    </card-component>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'

import PageFooter from '@/components/Base/Page/PageFooter'
import TitlePage from '@/components/Base/Title/TitlePage'
import CardComponent from '@/components/Base/Card/CardComponent'
import Investors from '@/components/Investors/Index'

export default {
  layout: 'admin',
  components: {
    PageFooter,
    TitlePage,
    CardComponent,
    Investors,
  },
  meta: {
    page: {
      showBreadcrumb: true,
      titleBreadcrumb: 'All Investors',
    },
  },
}
</script>
