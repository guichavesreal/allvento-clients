<template>
    <div class="clients">
        <ClientList />
    </div>
</template>

<script>
// @ is an alias to /src
import ClientList from '@/components/ClientList'

export default {
  name: 'Clients',
  components: {
    ClientList
  }
}
</script>