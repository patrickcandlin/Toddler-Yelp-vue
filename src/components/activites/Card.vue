<template>
        <b-card
            :title="business.name"
            :img-src="business.image_url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem;"
            class="mb-2"
            >
                <b-card-text>
                {{ business.name }}
                </b-card-text>
            <b-button 
            class="mr-1"
                href="#" 
                variant="light"
                v-b-modal.write-review-modal
                @click="passSelectedBusiness"
                >
                     Review
            </b-button>
            <b-button
            class="mr-1"
                href="#" 
                variant="light"
                v-b-modal.more-info-modal
                @click="passSelectedBusiness"
            >
                more
            </b-button>
            
        </b-card>
        
    
</template>

<script>
import axios from 'axios'
export default {
    props: {
        business: Object,
        reviews: [],
    },
    methods: { 
        passSelectedBusiness() {
            this.$emit("viewSelectedBusiness", this.business)
        }
    },
    name: "Card"
}
</script>

