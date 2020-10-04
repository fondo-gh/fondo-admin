<template>
  <div>
    <div>
      <div class="col-md-12" v-if="basic">
        <button
          :disabled="approveloader"
          class="btn btn-danger"
          @click="approveStartup"
          v-if="basic.approved===false"
        >
          Approve Startup
          <span v-if="approveloader">
            <img src="/img/loader.svg" alt="loader"
          /></span>
        </button>
      </div>
      <b-tabs pills card vertical>
        <b-tab
          @click="getBasicDetails"
          title="Basic Detail"
          active
        >
          <h4>Basic Details</h4>
          <div v-if="loader && !basic" style="text-align: center;">
            <img
              width="100"
              class="loader-big"
              src="/img/loader.svg"
              alt="loader"
            />
          </div>
          <div v-if="basic">
            <p>
              Completed Registation
              <strong>{{ basic.registration_is_complete }}</strong>
            </p>
            <p>
              Approved
              <strong>{{ basic.approved }}</strong>
            </p>
            <p>
              Caption : <strong>{{ basic.caption }}</strong>
            </p>
            <p>
              Company Name: <strong>{{ basic.company_name }}</strong>
            </p>
            <p>
              Duration for fund raise
              <strong>{{ basic.duration_for_raise }}</strong>
            </p>
            <p>
              Amount to raise <strong>{{ basic.funds_to_raise }}</strong>
            </p>
            <p>
              Product image
              <strong
                ><a :href="basic.product_image" target="_blank"
                  >Open product image</a
                ></strong
              >
            </p>
          </div></b-tab
        >
        <b-tab @click="getDetails" class="custom-pill" title="Startup Detail">
          <h4>Startup Details</h4>
          <div v-if="loader && !detail" style="text-align: center;">
            <img
              width="100"
              class="loader-big"
              src="/img/loader.svg"
              alt="loader"
            />
          </div>
          <div v-if="detail">
            <p>
              Business Registration Number:
              <strong>{{ detail.business_registration_number }}</strong>
            </p>
            <p>
              Has Patend : <strong>{{ detail.has_patent }}</strong>
            </p>
            <p>
              Location: <strong>{{ detail.location }}</strong>
            </p>
            <p>
              Industry: <strong>{{ detail.startup_industry }}</strong>
            </p>
            <p>
              Type: <strong>{{ detail.startup_type }}</strong>
            </p>
          </div></b-tab
        >
        <b-tab
          @click="contactDetails"
          class="custom-pill"
          title="Contact Details"
        >
          <h4>Contact Details</h4>
          <div v-if="loader && !contact" style="text-align: center;">
            <img
              width="100"
              class="loader-big"
              src="/img/loader.svg"
              alt="loader"
            />
          </div>
          <b-card-text>
            <div v-if="contact">
              <p>
                Email: <strong>{{ contact.email }}</strong>
              </p>
              <p>
                Phone: <strong>{{ contact.phone }}</strong>
              </p>
              <p>
                Facebook Handle: <strong>{{ contact.facebook_handle }}</strong>
              </p>
              <p>
                Instagram Handle:
                <strong>{{ contact.instagram_handle }}</strong>
              </p>
              <p>
                Linkedin Handle: <strong>{{ contact.linkedin_handle }}</strong>
              </p>
              <p>
                Skype Handle: <strong>{{ contact.skype_handle }}</strong>
              </p>
            </div>
          </b-card-text></b-tab
        >
        <b-tab @click="businessModel" title="Business Model">
          <h4>Business Model</h4>
          <div v-if="loader && !model" style="text-align: center;">
            <img
              width="100"
              class="loader-big"
              src="/img/loader.svg"
              alt="loader"
            />
          </div>
          <div v-if="model">
            <p>
              Key Resources: <strong>{{ model.key_resources }}</strong>
            </p>
            <p>
              Custormer Target: <strong>{{ model.customer_target }}</strong>
            </p>
            <p>
              Value Proposition: <strong>{{ model.value_proposition }}</strong>
            </p>
            <p>
              Sales Channel: <strong>{{ model.sales_channels }}</strong>
            </p>
            <p>
              Revenue Streams: <strong>{{ model.revenue_streams }}</strong>
            </p>
            <p>
              Key Metrics: <strong>{{ model.key_metrics }}</strong>
            </p>
            <p>
              Cost Structure: <strong>{{ model.cost_structure }}</strong>
            </p>
            <p>
              Financial File:
              <strong
                ><a :href="model.financial_file">Open Financial File</a></strong
              >
            </p>
            <p>
              Optional File:
              <strong
                ><a :href="model.optional_file">Open optional file</a></strong
              >
            </p>
          </div>
        </b-tab>
        <b-tab @click="productDetails" title="Product Detail">
          <h4>Startup Team</h4>
          <div v-if="loader && !product" style="text-align: center;">
            <img
              width="100"
              class="loader-big"
              src="/img/loader.svg"
              alt="loader"
            />
          </div>
          <div v-if="product">
            <p>
              Product Progress: <strong>{{ product.product_progress }}</strong>
            </p>
            <p>
              Product Url:
              <strong
                ><a :href="product.product_url" target="_blank">{{
                  product.product_url
                }}</a></strong
              >
            </p>
          </div>
        </b-tab>
        <b-tab @click="cofounderDetails" title="Cofounder Detail"
          ><b-card-text>
            <h4>Cofounder Detail</h4>
            <div v-if="loader && !cofounder" style="text-align: center;">
              <img
                width="100"
                class="loader-big"
                src="/img/loader.svg"
                alt="loader"
              />
            </div>
            <div v-if="cofounder">
              <p>
                Funding Amount: <strong>{{ cofounder.funding_amount }}</strong>
              </p>
              <p>
                Rate of devotion:
                <strong>{{ cofounder.rate_of_devotion }}</strong>
              </p>
              <hr />
              <h4>Cofounders</h4>
              <table class="table table-striped">
                <thead>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </thead>
                <thead>
                  <tr
                    v-for="cofounderone in cofounder.cofounders.data"
                    :key="cofounderone.id"
                  >
                    <td>{{ cofounderone.name }}</td>
                    <td>{{ cofounderone.email }}</td>
                    <td>{{ cofounderone.cofounder_role }}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </b-card-text></b-tab
        >
        <b-tab @click="startupTeam" title="Strtup Team">
          <h4>Startup Team</h4>
          <div v-if="loader && !startupteam" style="text-align: center;">
            <img
              width="100"
              class="loader-big"
              src="/img/loader.svg"
              alt="loader"
            />
          </div>
          <div v-if="startupteam">
            <table class="table">
              <thead>
                <th>Team Name</th>
                <th>Team Description</th>
                <th>Name</th>
              </thead>
              <thead>
                <tr v-for="team in startupteam" :key="team.id">
                  <td>{{ team.business_team_name }}</td>
                  <td>{{ team.business_team_description }}</td>
                  <td>{{ team.name }}</td>
                </tr>
              </thead>
            </table>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  computed: {
    ...mapState({
      detail: (state) => state.startups.startupdetail,
      contact: (state) => state.startups.contactdetail,
      model: (state) => state.startups.businessmodel,
      product: (state) => state.startups.productdetail,
      cofounder: (state) => state.startups.cofounderdetail,
      startupteam: (state) => state.startups.startupteam,
      loader: (state) => state.startups.loader,
      approveloader: (state) => state.startups.approveloader,
      basic: (state) => state.startups.startupbasic,
      startups: (state) => state.startups.startups,
    }),
  },
  created() {
    this.getBasicDetails()
  },
  methods: {
     getBasicDetails() {
      if (this.startups) {
        this.$store.commit('startups/getBasic', this.$route.params.id)
      } else {
        this.$store.dispatch('startups/getAllStartups')
        this.$store.commit('startups/getBasic', this.$route.params.id)
      }
    },
    getDetails() {
      this.$store.dispatch('startups/getDetails', this.$route.params.id)
    },
    contactDetails() {
      this.$store.dispatch('startups/getContacts', this.$route.params.id)
    },
    businessModel() {
      this.$store.dispatch('startups/businessModel', this.$route.params.id)
    },
    productDetails() {
      this.$store.dispatch('startups/productDetails', this.$route.params.id)
    },
    cofounderDetails() {
      this.$store.dispatch('startups/cofounderDetails', this.$route.params.id)
    },
    startupTeam() {
      this.$store.dispatch('startups/startupTeam', this.$route.params.id)
    },
    approveStartup() {
      this.$store.dispatch('startups/approveStartup', this.$route.params.id)
    },
  },
}
</script>
