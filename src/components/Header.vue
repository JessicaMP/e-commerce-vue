<template>
    <header>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Compra fácil</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>shopping_cart</v-icon>
            </v-btn>
            <v-btn icon @click="redirectLogin">
                <v-icon>account_circle</v-icon>
            </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
    methods: {
        redirectLogin() {
            this.$router.push('/login')
        }
    }
}
</script>
