<template>
    <div class="login">
        <form class="style-form">
						<label class="title">BIENVENIDO A TU TIENDA ONLINE</label>
            <v-text-field
            v-model="name"
            :counter="10"
            label="Usuario"
            data-vv-name="name"
            required
            ></v-text-field>
            <!-- <v-text-field
            v-model="email"
            label="Contraseña"
            data-vv-name="email"
            required
            ></v-text-field> -->

						<v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            hint="Añade 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

            <v-btn @click="submit">Entrar</v-btn>
            <!-- <v-btn @click="clear">Limpiar</v-btn> -->
        </form>
    </div>
</template>
<script>
//   import VeeValidate from 'vee-validate'

//   Vue.use(VeeValidate)

  export default {
    // $_veeValidate: {
    //   validator: 'new'
    // },

    data: () => ({
      name: '',
			email: '',
			show1: false,
			password: '',
			rules: {
				required: value => !!value || 'Requiredo.',
				min: v => v.length >= 8 || 'Min 8 characters',
				emailMatch: () => ('The email and password you entered don\'t match')
			}
    }
    ),

    mounted () {
    //   this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        // this.$validator.validateAll()
      },
      clear () {
        this.name = '',
        this.email = ''
        // this.$validator.reset()
      }
    }
  }
</script>

<style>
  .login {
		display: flex;
    justify-content: center;
		padding-top: 2rem;
  }

	.style-form {
		border: solid 1px #4A148C;
    padding: 2rem;
	}

	.title {
		font-size: 16px;
	}
</style>