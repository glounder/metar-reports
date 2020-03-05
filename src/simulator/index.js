
import padStart from 'lodash/padStart'
import random from 'lodash/random'

const ICAO_CODES = ['CYAB', 'CYAG', 'CYAH', 'SCCH', 'PAYA', 'CYAL', 'CYAM', 'FZIR', 'FKKY', 'PTYA', 'CYBA', 'CYBB', 'CYBC', 'CYBE', 'CYBG', 'CYBK', 'CYBL', 'ZUYB', 'CYBR', 'CYBT', 'CYBV', 'CYBX', 'CYBF']
const SPEED_UNITS = ['KT', 'MPS']
const MINUTE_INTERVAL = 10

function generateSampleData (fromMinute = 0, toMinute = 44640) {
  const reports = []
  generateSampleTimes(fromMinute, toMinute).forEach(time => {
    ICAO_CODES.forEach(code => {
      const value = `${code} ${time} ${randomWind()}`
      reports.push(value)
    })
  })
  return reports
}

function generateSampleTimes (fromMinute, toMinute) {
  const times = []
  for (let minutes = fromMinute + MINUTE_INTERVAL; minutes <= toMinute; minutes += MINUTE_INTERVAL) {
    const minuteOfHour = minutes % 60
    const hourOfDay = Math.floor(minutes / 60)
    const dayOfMonth = Math.floor(hourOfDay / 24)
    const time = `${padStart(dayOfMonth, 2, '0')}${padStart(hourOfDay, 2, '0')}${padStart(minuteOfHour, 2, '0')}Z`
    times.push(time)
  }
  return times
}

function randomWind () {
  const direction = padStart(random(0, 359), 3, '0')
  const speed = randomSpeed()
  return `${direction}${speed}`
}

function randomSpeed () {
  const units = SPEED_UNITS[random(0, 1)]
  const speed = padStart(units === 'KT' ? random(0, 75) : random(0, 150), 2, '0')
  const gusts = random(0, 1) === 1 ? `G${random(1, 99)}` : ''
  return `${speed}${gusts}${units}`
}

export default generateSampleData
