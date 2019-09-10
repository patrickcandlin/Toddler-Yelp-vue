<template>
    <section>
        <b-container  >
            <router-link to="/activites">
                <h2>Activities</h2>
            </router-link>
        </b-container>
        <b-container>
            <b-form
                @submit="fusionSearch()"
                v-on:submit.prevent
                inline
                class="min-vw-100 p-3"
                > 
                <b-form-input 
                    size="md"
                    style="width: 24%;"
                    class="mr-sm-2" 
                    placeholder="Address, City or Zip" 
                    v-model="searchForm.location" 
                >
                </b-form-input>
                <b-form-input 
                    size="md"
                    style="width: 24%;"
                    class="mr-sm-2"
                    placeholder="Search" 
                    v-model="searchForm.searchTerm" 
                >
                </b-form-input>
                <b-button 
                    size="md"   
                    class="my-2 my-sm-0" 
                    type="submit"   
                >
                    Search
                </b-button>
            </b-form>  
        </b-container>
        <b-container>
            <Card 
                v-for='business in businessArray' 
                :business='business' 
                @viewSelectedBusiness="setSelectedBusiness"
            /> 
        </b-container>
        <ReviewModal :selectedBusiness="selectedBusiness"/>
        <MoreInfoModal :selectedBusiness="selectedBusiness" />

    </section>
</template>
<script>
import axios from 'axios'
import Card from "./Card.vue"
import ReviewModal from "./ReviewModal.vue"
import MoreInfoModal from "./MoreInfoModal.vue"

export default {
    name: "Activites",
    data() {
        return {
            
            businessArray: [],
            searchForm: {
                location: '',
                searchTerm: '',      
            },
           
            selectedBusiness: {
                location: {
                    display_address: []
                }
            },
        }
    },
    components: {
        Card,
        ReviewModal,
        MoreInfoModal
    },
    methods: {
        fusionSearch() {
            const { location, searchTerm } = this.searchForm
            axios
                .get('http://localhost:3000/fusion/index', {
                    params: {
                        term: searchTerm, location: location
                        }
                    }
                )
                .then((response) =>{
                    this.businessArray = response.data.businesses
                }) 
        },
        setSelectedBusiness(business){
            this.selectedBusiness = business
        },

    },
    mounted() {
        axios
        .get('http://localhost:3000/fusion/index', {
                params: {
                        term: "Activites", location: "80210"
                        }
                    }
            )
        .then((response) => {
                this.businessArray = response.data.businesses
            }
        )
    }
}
</script>