import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dates = []
  let indexDate = firstDayOfTheYear

  while (indexDate.isBefore(today)){
    dates.push(indexDate.toDate())
    indexDate = indexDate.add(1,'day')

  }

  return dates
}