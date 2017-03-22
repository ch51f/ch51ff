import moment from 'moment';
moment.locale('zh-cn')
export const today = moment().format('YYYY-MM-DD')
export const format = function(date, format = "") {
	return moment(date).format(format);
}