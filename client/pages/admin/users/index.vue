
<template>
<div class="dashboard">
    <card-component>
        <b-container fluid>
            <!-- User Interface controls -->
            <b-row>
                <b-col md="6"
                    class="my-1">
                    <b-form-group label-cols-sm="3"
                        label="Filter"
                        class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="filter"
                                placeholder="Type to Search" />
                            <b-input-group-append>
                                <b-button :disabled="!filter"
                                    @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6"
                    class="my-1">
                    <b-form-group label-cols-sm="3"
                        label="Per page"
                        class="mb-0">
                        <b-form-select v-model="perPage"
                            :options="pageOptions" />
                    </b-form-group>
                </b-col>
            </b-row>
            <br/>
            <br/>

            <!-- Main table element -->
            <b-table show-empty
                stacked="md"
                :items="items9"
                :fields="fields9"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                @filtered="onFiltered">
                <template v-slot:cell(name)="row">
                    {{ row.value.first }} {{ row.value.last }}
                </template>

                <template slot="isActive"
                    slot-scope="row">
                    {{ row.value ? 'Yes :)' : 'No :(' }}
                </template>

                <template slot="actions"
                    slot-scope="row">
                    <b-button size="sm"
                        @click="info(row.item, row.index, $event.target)"
                        class="mr-1">
                        Info modal
                    </b-button>
                    <b-button size="sm"
                        @click="row.toggleDetails">
                        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                    </b-button>
                </template>

                <template slot="row-details"
                    slot-scope="row">
                    <b-card>
                        <ul>
                            <li v-for="(value, key) in row.item"
                                :key="key">{{ key }}: {{ value }}</li>
                        </ul>
                    </b-card>
                </template>
            </b-table>

            <b-row>
                <b-col md="6"
                    class="my-1">
                    <b-pagination v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        class="my-0" />
                </b-col>
            </b-row>

            <!-- Info modal -->
            <b-modal id="modal-info"
                @hide="resetModal"
                :title="modalInfo.title"
                ok-only>
                <pre>{{ modalInfo.content }}</pre>
            </b-modal>
        </b-container>
    </card-component>
    <page-footer> </page-footer>

</div>
</template>
<script>

import PageFooter from '@/components/Base/Page/PageFooter'
import TitlePage from '@/components/Base/Title/TitlePage'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  layout: 'admin',
  components: {
    PageFooter,
    TitlePage,
    CardComponent
  },
  computed: {
    colorList () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      return [variablesColors.primary, variablesColors.theme1]
    }
  },
   data () {
    return {
      fields3: ['first_name', 'last_name', 'age'],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      items9: [{
        isActive: true,
        age: 40,
        name: {
          first: 'Dickerson',
          last: 'Macdonald'
        }
      }, 
      ],
      fields9: [{
        key: 'name',
        label: 'Person Full name',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'age',
        label: 'Person age',
        sortable: true,
        class: 'text-center'
      }, {
        key: 'isActive',
        label: 'is Active'
      }, {
        key: 'actions',
        label: 'Actions'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: {
        title: '',
        content: ''
      }
    }
  }, 

  meta: {
    page: {
      showBreadcrumb: true,
      titleBreadcrumb: 'Users'
    }
  }
}

</script>



