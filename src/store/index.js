import Vue from 'vue'
import Vuex from 'vuex'

import generateSampleData from '@/simulator'
import parseMetarReport from '@/utils/metar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airportWindSpeeds: {},
    currentMinute: 0
  },
  mutations: {
    updateAirportWindSpeed (state, { code, speedMPS }) {
      if (code) {
        const airportWindSpeeds = state.airportWindSpeeds[code]
        if (!airportWindSpeeds) {
          Vue.set(state.airportWindSpeeds, code, {
            currentMPS: speedMPS,
            averageMPS: speedMPS,
            count: 1
          })
        } else {
          airportWindSpeeds.currentMPS = speedMPS
          airportWindSpeeds.count++
          airportWindSpeeds.averageMPS = recalculateAverage(airportWindSpeeds.averageMPS, speedMPS, airportWindSpeeds.count)
        }
      } else {
        console.warn(`updateAirportWindSpeed: Missing code '${code}'`)
      }
    }
  },
  actions: {
    fetchLatestMetarReports ({ commit, state }, minutes = 60) {
      const toMinutes = state.currentMinute + minutes
      const reports = generateSampleData(state.currentMinute, toMinutes)
      if (reports && reports.length > 0) {
        reports.forEach(value => {
          const report = parseMetarReport(value)
          if (report && report.code) {
            commit('updateAirportWindSpeed', report)
          } else {
            console.log(`Invalid metar report '${value}'`)
          }
        })
      }
      state.currentMinute = toMinutes
    }
  },
  modules: {
  }
})

function recalculateAverage (oldAverage, newValue, newCount) {
  return oldAverage + ((newValue - oldAverage) / newCount)
}
