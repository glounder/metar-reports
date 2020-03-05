<template>
  <v-toolbar dense>
      <v-toolbar-title>Simulator Controls</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch hide-details v-model="polling" label="Polling" class="mr-2"/>
      <v-btn @click="generateNextHour()" class="mr-2">
        Next Hour
      </v-btn>
      <v-btn @click="generateNextDay()" class="mr-2">
        Next 24 Hours
      </v-btn>
      <v-btn @click="generateNextMonth()">
        Next 31 Days
      </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      poller: undefined,
      polling: false
    }
  },
  destroyed () {
    this.stopPoller()
  },
  watch: {
    polling (newValue) {
      if (newValue) {
        this.startPoller()
      } else {
        this.stopPoller()
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchLatestMetarReports'
    ]),
    generateNextMonth () {
      this.fetchLatestMetarReports(60 * 24 * 31)
    },
    generateNextHour () {
      this.fetchLatestMetarReports(60)
    },
    generateNextDay () {
      this.fetchLatestMetarReports(60 * 24)
    },
    startPoller () {
      if (!this.poller) {
        this.fetchLatestMetarReports(60)
        this.poller = setInterval(() => {
          this.fetchLatestMetarReports(60)
        }, 5000)
      }
    },
    stopPoller () {
      if (this.poller) {
        clearTimeout(this.poller)
      }
    }
  }
}
</script>
