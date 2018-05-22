import * as moment from 'moment';

export default (ticket) => {
    return {
        id: ticket.ticket_number,
        createdAt: moment(ticket.created_at.date).format("ddd, hA"),
        amountOwed: (ticket.amount_owing / 100).toFixed(2),
        paid: ticket.payment_id ? 'Yes' : 'No'
    }
}