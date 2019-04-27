<template>
    <v-card class="card__style">
        <v-img :src="image">
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline_style">{{title}}</div>
            <span class="grey--text">Precio : {{money}}{{price}}</span>
          </div>
        </v-card-title>

        <v-card-actions class="flex-around">
          <v-btn flat class="btn_color">Comprar</v-btn>
            <v-btn icon color="cyan darken-3" @click="addProduct(item)">
                <v-icon color="white">shopping_cart</v-icon>
            </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>

    export default {
        props: {
            image: String,
            title: String,
            price: Number,
            typeMoney: String,
            item: Object
        },
        data() {
            return {
                show: false,
                // counter: 0
            }
        },
        computed: {
            money() {
                return this.typeMoney == "PEN" ? 'S/.' : this.typeMoney
            }
        },
        methods: {
            addProduct(value) {
                this.$emit('productSelect', value)
                // this.counter+= 1
            }
        }
    }
</script>

<style lang="css">
    .card__style {
        width: 200px;
        margin: 10px 10px 20px 10px!important;
        box-sizing: border-box;
    }
    .btn_color {
        border: 2px solid #00838F;
        color: #00838F !important;
        border-radius: 4px !important;
    }
    .headline_style{
        font-size: 20px!important;
        line-height: 26px!important;
    }
    .flex-around {
        display: flex;
        justify-content: space-around;
    }
</style>