<template>
    <div>
        <Header/>
        <v-carousel
            delimiter-icon="stop"
            prev-icon="arrow_left"
            next-icon="arrow_right"
        >
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        <section>
            <h2 class="cyan accent-3 white--text pa-3">Nuestros Productos</h2>
            <v-container fluid>
                <v-layout  wrap>
                    <v-flex v-for="product in products"
                    :key="product.id">
                        <ProductComponent 
                            :image="product.thumbnail" :title="product.title"
                            :price="product.price"
                            :typeMoney="product.currency_id"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
  </div>
</template>
<script>

import ProductComponent from '@/components/ProductComponent.vue'
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Header,
        ProductComponent
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            items: state => state.imagesCarousel,
            products: state => state.products
        })
    },
    created() {
        this.$store.dispatch('getCollections')
    }
}
</script>