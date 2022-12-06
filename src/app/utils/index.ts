import * as dayjs from "dayjs"

export const formatearFecha = (data: string) => {
    return dayjs(data).format('YYYY-MM-DD')
}