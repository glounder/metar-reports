const METAR_WIND_REGEX = /(\d{3})(\d{2,3})(G\d{2})?(KT|MPS)/
const METAR_TIMESTAMP_REGEX = /\d{2}\d{2}\d{2}Z/

function parseMetarReport (value) {
  const reportItems = value.split(' ')
  if (reportItems && reportItems.length === 3) {
    const code = reportItems[0]
    const time = parseMetarTimestamp(reportItems[1])
    const wind = parseMetarWindSpeed(reportItems[2])
    return {
      code,
      time,
      speedMPS: wind.speed || 0,
      direction: wind.direction
    }
  }
}

function parseMetarWindSpeed (wind) {
  if (wind) {
    const windItems = METAR_WIND_REGEX.exec(wind)
    if (windItems && windItems.length > 4) {
      const direction = parseInt(windItems[1], 10)
      const rawSpeed = parseInt(windItems[2], 10)
      const unitsIndex = windItems.length - 1
      const units = windItems[unitsIndex]
      const gusts = unitsIndex === 4 ? windItems[3] : undefined
      const speed = units === 'KT' ? Math.round(rawSpeed / 1.944) : rawSpeed

      return {
        speed,
        direction,
        gusts
      }
    }
  }
  return {
    speed: 0,
    direction: 0
  }
}

function parseMetarTimestamp (value) {
  const timeItems = METAR_TIMESTAMP_REGEX.exec(value)
  if (timeItems && timeItems.length === 5) {
    return {
      dayOfMonth: timeItems[1],
      hours: timeItems[2],
      minutes: timeItems[3]
    }
  }
}

export default parseMetarReport
