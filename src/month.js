import dayjs from "dayjs";

export function getMonth(month=dayjs().month()){
    const year=dayjs().year()
    const firstDayofTheMonth=dayjs(new Date(year,month,1)).day()
    let currentMonthCount=0-firstDayofTheMonth

    const dayMatrix=new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++;
            return dayjs(new Date(year,month,currentMonthCount))
        })
    })
    return {dayMatrix,month,year}
}