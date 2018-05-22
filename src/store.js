import Vue from 'vue'
import Vuex from 'vuex'
import TicketService from '@/api/ticket/TicketService'
import TicketMapper from '@/api/ticket/TicketMapper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    ticket: {}
  },
  mutations: {
    setTickets: (state, tickets) => state.tickets = tickets,
    setTicket: (state, ticket) => state.ticket = ticket
  },
  getters: {
    tickets: ({tickets}) => tickets,
    ticket: ({ticket}) => ticket
  },
  actions: {
    async tickets (context) {
      context.commit('setTickets', (await TicketService.tickets())?.data?.data?.map(ticket => {
        return TicketMapper(ticket)
      }))
    },
    async ticket (context, id) {
      context.commit('setTicket', TicketMapper((await TicketService.ticket(id)).data.data))
    }
  }
})
