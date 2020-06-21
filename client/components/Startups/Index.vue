<template>
  <div>
    <div class="col-md-12"><h5> All Startups</h5></div>
    <div v-if="loader && !startups" style="text-align: center;">
      <img src="/img/loader.svg" alt="loader" width="100">
    </div>
    <div v-if="startups" class="col-md-12 startup-table">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <td>Startup Image</td>
              <td>Startup Name</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="startup in startups" :key="startup.id">
              <td>
                <img
                  :src="startup.product_image"
                  class="img-thumbnail"
                  width="50"
                  :alt="startup.company_name"
                />
              </td>
              <td>{{ startup.company_name }}</td>
              <td>
                <span v-if="startup.approved" class="label label-success">
                  Approved</span
                >
                <span v-else class="label label-danger">Pending</span>
              </td>
              <td>
                <nuxt-link :to="{
                    name: 'admin-startups-id',
                    params: { id: startup.id },
                  }"
                  class="btn btn-default btn-xs"
                >
                  View Details
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  computed: {
    ...mapState({
      startups: (state) => state.startups.startups,
      loader: (state) => state.startups.loader
    }),
  },
  created() {
    this.getStartups()
  },
  methods: {
    async getStartups() {
      await this.$store.dispatch('startups/getAllStartups')
    }
  }
}
</script>
