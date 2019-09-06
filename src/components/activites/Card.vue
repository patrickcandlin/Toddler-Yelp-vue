<template>
        <b-card
            :title="name"
            :img-src="image_url""
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem;"
            class="mb-2"
            >
                <b-card-text>
                {{ name }}
                </b-card-text>
            <b-button 
                href="#" 
                variant="light"
                v-b-modal.my-modal
                >
                Review
            </b-button>
            
        </b-card>
        
    
</template>

<script>
export default {
    props: {
        name: String,
        image_url: String
    },

    data(){
        return {
            name: this.name,
            image_url: this.image_url
        }
    },
    name: "Card"
}
</script>