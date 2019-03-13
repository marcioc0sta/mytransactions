import moment from 'moment';

const DATE_FORMAT = 'DD-MM-YY';

export const gTid = () => moment(Date.now()).format(DATE_FORMAT)
