import Api from '@/api'

export default {
  ticket (id) {
    return Api().get(`/tickets/${id}`)
  },
  async tickets () {
      return await Api().get('/tickets')
  }
}