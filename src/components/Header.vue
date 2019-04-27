<template>
    <header>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon @click="redirect('')"></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="redirect('shoppingCart')" v-if="isShow">
                <v-icon>shopping_cart</v-icon>
            </v-btn>
            <v-btn icon @click="redirect('login')">
                <v-icon>account_circle</v-icon>
            </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            isShow: true
        }
    },
    methods: {
        redirect(value) {
            this.$router.push(`/${value}`)
        }
    },
    created() {
        switch(this.$route.name) {
            case 'ShoppingCart':
                this.title = 'Mi carrito de compras'
                this.isShow = false
            break;
            default:
                this.title = 'Compra fácil'
                this.isShow = true
            break;
        }
    }
}
</script>
