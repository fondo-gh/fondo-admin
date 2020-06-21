
<template>
<div class="dashboard">
    <four-charts4> </four-charts4>

    <!-- <b-row class="pt-0">
        <b-col md="12"
            lg="6">
            <area-stacked> </area-stacked>
        </b-col>

        <b-col md="12"
            lg="6">
            <time-line class="h-100"> </time-line>
        </b-col>
    </b-row> -->

    <!-- <page-footer> </page-footer> -->

</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import AreaStacked from '@/components/Module/Chart/Echarts/Line/Widget/AreaStacked'
import TimeLine from '@/components/Module/Social/Widget/TimeLine'
import FourCharts4 from '@/components/Module/Dashboard/Widget/FourCharts4'
import PageFooter from '@/components/Base/Page/PageFooter'

export default {
  layout: 'admin',
  components: {
    TimeLine,
    AreaStacked,
    FourCharts4,
    PageFooter
  },
  computed: {
    colorList () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      return [variablesColors.primary, variablesColors.theme1]
    }

  },

  meta: {
    page: {
      showBreadcrumb: true,
      titleBreadcrumb: 'Dashboard'
    }
  }
}

</script>



