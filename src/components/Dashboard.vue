<template>
  <v-container>
    <simulator-controls />
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
        >
        <template #item.averageMPS="{ value }">
          {{ value | round }}
        </template>
      </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SimulatorControls from '@/components/SimulatorControls'
import { mapState } from 'vuex'

export default {
  components: {
    SimulatorControls
  },
  data () {
    return {
      headers: [
        { text: 'ICAO Code', value: 'code' },
        { text: 'Current m/s', value: 'currentMPS' },
        { text: 'Average m/s', value: 'averageMPS' },
        { text: 'Count', value: 'count' }
      ]
    }
  },
  computed: {
    ...mapState([
      'airportWindSpeeds'
    ]),
    items () {
      return Object.keys(this.airportWindSpeeds).map(code => {
        return Object.assign({}, { code }, this.airportWindSpeeds[code])
      })
    }
  }
}
</script>
