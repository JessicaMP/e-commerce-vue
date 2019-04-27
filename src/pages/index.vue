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
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Header
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            items: state => state.imagesCarousel
        })
    }
}
</script>