<template>
    <div>
      <b-navbar type="light" variant="faded">
        <b-navbar-brand class="" id='logo' href="#">
            <router-link to="/">
                Yelp<span id="let">let</span>
            </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav pills>
            <b-nav-item href="#">
                <router-link to="/activites">
                    <a>Activites</a>
                </router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/events">
                  <a> Events </a>
                </router-link>
              </b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
          <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <b-img src="https://placekitten.com/g/30/30" alt="kid"></b-img>
        </b-navbar-brand>
      </b-navbar>
      </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
      return  { 
  
       }
    },
}
</script>
<style>

</style