<template>
    <section>
        <b-container>
            <router-link to='/events'>
                <h2>Events</h2>
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
                <b-button size="md" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-form>
        </b-container>
        <b-container>

            <Card  
                v-for='business in businessArray' 
                :business='business' 
                /> 
        </b-container>
    </section>
</template>
<script>
import axios from 'axios'
import Card from "../activites/Card.vue"
import {token} from "../../token"

export default {
    data() {
        return {
            businessArray: [],
            searchForm: {
                location: '',
                searchTerm: '',
            }
        }
    },
    components: {
        Card
    },
    methods: {
        fusionSearch() {
            const { location, searchTerm } = this.searchForm
            axios
                .get('http://localhost:3000/fusion/index',{
                    headers:{'Authorization': `Bearer ${token}`},
                    params: {
                        term: searchTerm, location: location
                        }
                    }
                )
                .then((response) =>{
                    console.log(response)
                    this.businessArray = response.data.businesses
                }) 
        }
    },
    mounted() {
        axios
        .get('http://localhost:3000/fusion/index', {
                headers:{'Authorization': `Bearer ${token}`},
                params: {
                        term: "events for kids", location: "80210"
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
