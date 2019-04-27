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
            <v-btn icon color="cyan darken-3">
                <v-icon color="white">shopping_cart</v-icon>
            </v-btn>
        </v-card-actions>

        <!-- <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition> -->
      </v-card>
</template>

<script>

    export default {
        props: {
            image: String,
            title: String,
            price: Number,
            typeMoney: String
        },
        data() {
            return {
                show: false
            }
        },
        computed: {
            money() {
                return this.typeMoney == "PEN" ? 'S/.' : this.typeMoney
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