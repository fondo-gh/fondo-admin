<template>
  <div>
    <div>
      <h5>Investor Personal Details</h5>
      <span v-if="!investordetail.profile_is_completed" class="badge badge-danger">Profile Not Complete</span>
      <span v-if="investordetail.profile_is_completed" class="badge badge-success">Profile Complete</span>

      <hr />

      <p>First Name: <strong>{{investordetail.first_name}}</strong></p>
      <p>Last Name: <strong>{{investordetail.last_name}}</strong></p>
      <p>Email: <strong>{{investordetail.email}}</strong></p>
      <p>Bio: <strong>{{investordetail.bio}}</strong></p>
      <p>Occupation: <strong>{{investordetail.occupation}}</strong></p>

    </div>
    <div>
      <h5>Investor Interests</h5>
      <hr />

      <p>Interest <strong>{{investordetail.interest}}</strong></p>
      <p>Startups Invested In <strong>{{investordetail.startups_invested_in}}</strong></p>
      <p>Amount Invested: <strong>{{investordetail.amount_invested}}</strong></p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  computed: {
    ...mapState({
      investordetail: (state) => state.investors.investordetail,
    }),
  },
}
</script>
