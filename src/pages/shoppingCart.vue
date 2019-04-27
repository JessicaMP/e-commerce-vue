<template>
    <div>
        <Header/>
        <section>
            <v-container fluid>
                <v-layout  wrap>
                    <v-flex v-for="product in products"
                    :key="product.id">
                        <ProductComponent 
                            :image="product.thumbnail" :title="product.title"
                            :price="product.price"
                            :typeMoney="product.currency_id"
                            :item="product"
                           />
                           <!--  @productSelect="addProduct" -->
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>
<script>

import Header from '@/components/Header.vue'
import ProductComponent from '@/components/ProductComponent.vue'

import { mapState } from 'vuex'


export default {
    components: {
        Header,
        ProductComponent
    },
    computed: {
        ...mapState({
            products: state => state.productsSelect
        })
    }
}
</script>
