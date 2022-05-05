import {format, parseISO} from 'date-fns'

export const formatDate = (date) => {
    const dateParsed = parseISO(date)
    const dateFormatted = format(dateParsed, "do MMM yyyy HH:m")
    return dateFormatted

}