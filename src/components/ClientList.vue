<template>
    <div class="container">
    <h1>Lista de Clientes</h1>
    <hr />
    <NewClientsForm v-on:add-client="addClient"></NewClientsForm>
    <div class="list-group">
        <p v-if="clients.length <= 0">Nenhum cliente cadastrado.</p>
      <div class="list-group-item" :key="index" v-for="(client, index) in clients" v-bind:id="index">
        <span class="client__id">
          ID:
          <strong>{{ index }}</strong>
        </span>
        <span class="client__name">
          Full Name:
          <strong>{{ client.name }}{{ client.midname }}{{ client.surname}}</strong>
        </span>
         <div>
          <a href="#" title="Excluir" v-on:click.prevent="deleteClient(index)">Excluir</a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import NewClientsForm from './NewClientsForm';
export default {
    components:{
        NewClientsForm
    },
    data(){
        return {
            clients: []
        };
    },
  methods: {
    addClient(client){
        this.clients.push(client);
    },
    deleteClient(index) {
      this.clients.splice(index, 1);
    }
  }
    
}
</script>