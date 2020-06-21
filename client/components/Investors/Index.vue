<template>
  <div>
    <div class="col-md-12"><h5>All Investors</h5></div>
    <div v-if="loader && !investors" style="text-align: center;">
      <img src="/img/loader.svg" alt="loader" width="100">
    </div>
    <div v-if="investors" class="col-md-12 startup-table">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <td><strong>No.</strong></td>
              <td><strong>Name</strong> </td>
              <td><strong>Email</strong></td>
              <td><strong>Actions</strong></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(investor, index) in investors" :key="investor.id">
              <td>{{ index + 1 }}</td>
              <td>{{ investor.first_name }} {{ investor.lastname }}</td>
              <td>{{ investor.email }}</td>
              <td>
                <nuxt-link
                  class="btn btn-default btn-xs"
                  :to="{
                    name: 'admin-investors-id',
                    params: { id: investor.id },
                  }"
                  >Details</nuxt-link
                >
                <button
                  @click="deleteInvestor(investor.id)"
                  class="btn btn-danger btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  computed: {
    ...mapState({
      investors: (state) => state.investors.investors,
      loader: (state) => state.investors.loader
    }),
  },
  created() {
    this.getAllInvestors()
  },
  methods: {
    deleteInvestor(id) {
      const check = confirm('Are you sure you want to delete this investor?')
      if (check) {
        // call delete Investor action
      }
    },
    async getAllInvestors() {
      await this.$store.dispatch('investors/getAllInvestors')
    }
  },
}
</script>
