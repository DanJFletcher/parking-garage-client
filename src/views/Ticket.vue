<template>
    <div>
        Ticket: {{ ticket.id }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters([
          'ticket'
      ])
  },

    created () {
        this.$store.dispatch('ticket', this.$route.params.id)
    }
}
</script>
