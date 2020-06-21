
<template>
<b-card no-body>
    <b-card-body>
        <slot />
    </b-card-body>
</b-card>
</template>
<script>
import CardTitle from '@/components/Base/Card/CardTitle'

export default {
  components: {
    CardTitle
  },
  props: ['title', 'subTitle'],

  data () {
  	return { currentIdx: 0 }
  }
}

</script>


<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
}

.card-body {
  padding-bottom: 2rem;
}

</style>


