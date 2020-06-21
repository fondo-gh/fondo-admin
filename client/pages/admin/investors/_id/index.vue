<template>
  <div class="dashboard">
    <card-component>
      <div class="container-fluid"></div>
      <br />
      <b-container fluid>
        <investor-details />
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
import InvestorDetails from '@/components/Investors/InvestorDetails'

export default {
  layout: 'admin',
  components: {
    PageFooter,
    TitlePage,
    CardComponent,
    InvestorDetails,
  },
   asyncData({ store, route }) {
    const { id } = route.params
    store.commit('investors/getOneInvestor', id)
  },
  meta: {
    page: {
      showBreadcrumb: true,
      titleBreadcrumb: 'All Investors',
    },
  },
}
</script>
