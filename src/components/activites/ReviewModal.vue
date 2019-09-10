<template>
    <b-modal 
        id="write-review-modal"
        @ok="submitReview"    
    >
        <form 
            @submit.prevent
            >
            <h3> {{ selectedBusiness.name }} </h3>
            <b-form-group>
                <b-form-textarea
                    v-model="reviewContent">
                </b-form-textarea>
                <label>Rating: {{ reviewRating }} / 5 </label>
                <b-form-input   
                    v-model="reviewRating" 
                    type="range" 
                    min="0" 
                    max="5">
                </b-form-input>
            </b-form-group>
        </form>
    </b-modal>
</template>
<script>
export default {
    name: "ReviewModal",
    data(){
        return{
             reviewContent: "",
             reviewRating: "5",
        }
    },
    props: {
        selectedBusiness: Object,
    },
    methods: {
        submitReview(){
            console.log(this.reviewContent, this.reviewRating, this.selectedBusiness.id)
            // axios
            //     .post('http://localhost:3000/reviews/index',{
            //         params: {
            //             user_id: this.user_id,
            //             content: this.reviewContent,
            //             rating: this.reveiwRating
            //             }
            //     })
            this.reviewContent = ""
            this.reviewRating = "5"
         }
    }
}
</script>