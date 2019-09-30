<template>
    <section>
        <b-container  >
            <router-link to="/activites">
                <h2>Activities</h2>
            </router-link>
        </b-container>
        <b-container>
            <b-form
                id="search-bar"
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
        <ReviewModal :selectedBusiness="selectedBusiness" />
        <MoreInfoModal :selectedBusiness="selectedBusiness" :reviewsArray="reviewsArray" />

    </section>
</template>
<script>
import axios from 'axios'
import Card from "./Card.vue"
import ReviewModal from "./ReviewModal.vue"
import MoreInfoModal from "./MoreInfoModal.vue"
const token = localStorage.getItem('jwt')
console.log(token)
export default {
    name: "Activites",
    data() {
        return {
            reviewsArray: [],
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
                    headers:{'Authorization': `Bearer ${token}`},
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
            axios({
                method: 'get',
                url: 'http://localhost:3000/reviews',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    }
            })
            .then(result => this.reviewsArray = result.data)


            
        }
    },
    mounted() {
        axios
        .get('http://localhost:3000/fusion/index', {
                headers:{'Authorization': `Bearer ${token}`},
                params: {
                        term: "kids", location: "80205"
                        }
                    }
            )
        .then((response) => {
                this.businessArray = response.data.businesses
            }
        )
         axios({
                method: 'get',
                url: 'http://localhost:3000/reviews',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    }
            }).then(result => this.reviewsArray = result.data)
    }
}
</script>