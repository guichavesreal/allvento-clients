<template>
    <div class="form-todo form-group">
    <p><input placeholder="Nome" type="text" name="name" class="form-control" v-model="name"/></p>
    <p><input placeholder="Nome do meio" type="text" name="midname" class="form-control" v-model="midname"/></p>
    <p><input placeholder="Sobrenome" type="text" name="surname" class="form-control" v-model="surname"/></p>
    <p><input placeholder="CPF" type="text" name="documentNumber" class="form-control" v-model="documentNumber"/></p>
    <p><input placeholder="Data de Nascimento" type="text" name="birthDate" class="form-control" v-model="birthDate"/></p>
    <div>
        <p><input placeholder="Endereço" type="text" name="addressDescription" class="form-control" v-model="address.description"/></p>
        <p><input placeholder="Cidade" type="text" name="addressCity" class="form-control" v-model="address.city"/></p>
        <p><input placeholder="Estado" type="text" name="addressState" class="form-control" v-model="address.state"/></p>
        <p><input placeholder="CEP" type="text" name="addressZipCode" class="form-control" v-model="address.zipCode"/></p>
    </div>
    <button v-on:click.prevent="addClient" type="submit" class="btn btn-primary">Enviar</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
                id: '',
                name: '',
                midname: '',
                surname: '',
                documentNumber: '',
                birthDate: '',
                address: [{
                    id: '',
                    description: '',
                    city: '',
                    state: '',
                    zipCode: ''
                }],
                phone: [{
                    id: '',
                    number: '',
                    extension: ''
                }],
                email: [{
                    id: '',
                    description:''
                }]
        }
    },
    methods: {
        //This method pushes the Client data to the Client List.
        addClient(){
            //Verify if the fields are empty and block the progress.
            if (this.name.trim() === ''){
                return;
            }

            //Commits the Client Data to the client list
            this.$emit('add-client', {

                id: this.id,
                name: this.name,
                midname: this.midname,
                surname: this.surname,
                documentNumber: this.documentNumber,
                birthDate: this.birthDate,
                address: [{
                    id: this.address.id,
                    description: this.address.description,
                    city: this.address.city,
                    state: this.address.state,
                    zipCode: this.address.zipCode
                }],
                phone: [{
                    id: this.phone.id,
                    number: this.phone.number,
                    extension: this.phone.extension
                }],
                email: [{
                    id: this.email.id,
                    description:this.email.description
                }]

            })

            //Clean the fields of the form
        }

    }
};
</script>
