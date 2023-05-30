export const formatExcelDate = (numb, format = "-") => {
	const time = new Date((numb - 1) * 24 * 3600000 + 1)
	time.setYear(time.getFullYear() - 70)
	const year = time.getFullYear() + ""
	const month = time.getMonth() + 1 + ""
	const date = time.getDate() + ""
	if (format && format.length === 1) {
		return year + format + month + format + date
	}
	return (
		year + (month < 10 ? "0" + month : month) + (date < 10 ? "0" + date : date)
	)
}

export function diffDay(lastDate,earlyDate){
	return (Date.parse(lastDate) - Date.parse(earlyDate))/1000/60/60/24
}

  