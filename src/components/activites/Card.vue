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
                href="#" 
                variant="light"
                v-b-modal.my-modal
                @click="passSelectedBusiness"
                >
                    Review
            </b-button>
            
        </b-card>
        
    
</template>

<script>
export default {
    props: {
        business: Object,
    },
    methods: {
        passSelectedBusiness() {
            console.log('clicked in child', this.business)
            selectedBusiness = this.business
            this.$emit('viewSelectedBusiness', selectedBusiness) 
        },
    },
    name: "Card"
}
</script>