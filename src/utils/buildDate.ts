export const getActualDate = () => {
  const currentDate: Date = new Date()

  const day: number = currentDate.getDate()
  const month: number = currentDate.getMonth() + 1
  const year: number = currentDate.getFullYear()

  const formattedDay: string = day < 10 ? '0' + day : day.toString()
  const formattedMonth: string = month < 10 ? '0' + month : month.toString()

  return `${formattedDay}/${formattedMonth}/${year}`
}
export const formatCurrentDateTime = (): string => {
  const currentDateTime: Date = new Date()

  const day: number = currentDateTime.getDate()
  const month: number = currentDateTime.getMonth() + 1
  const year: number = currentDateTime.getFullYear()
  const hours: number = currentDateTime.getHours()
  const minutes: number = currentDateTime.getMinutes()

  const formattedDay: string = day < 10 ? '0' + day : day.toString()
  const formattedMonth: string = month < 10 ? '0' + month : month.toString()
  const formattedHours: string = hours < 10 ? '0' + hours : hours.toString()
  const formattedMinutes: string =
    minutes < 10 ? '0' + minutes : minutes.toString()

  return `${formattedDay}/${formattedMonth}/${year} | ${formattedHours}:${formattedMinutes}`
}
