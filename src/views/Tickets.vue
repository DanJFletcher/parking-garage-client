<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Time In</th>
            <th>Amount Owed</th>
            <th>Paid</th>
        </tr>
        <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.createdAt }}</td>
            <td>${{ ticket.amountOwed }}</td>
            <td>{{ ticket.paid }}</td>
        </tr>
    </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters([
          'tickets'
      ])
  },

  created () {
      this.$store.dispatch('tickets')
  }
};
</script>

<style lang="scss" scoped>
    th, td {
        min-width: 120px
    }
</style>

