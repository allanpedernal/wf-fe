<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/dashboard" class="navbar-brand"><img :src="logo" class="img-fluid" style="width: 90px; height: 60px;">Weather Forecast</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
                    <li class="nav-item"><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
                    <li class="nav-item"><router-link to="/weather/forecast" class="nav-link">Weather Forecast</router-link></li>
                </ul>
            </div>
            <material-button color="primary" size="sm" @click="logout" v-if="user">Logout</material-button>
        </div>
    </nav>
</template>

<script>
import sunCloud from "@/assets/img/small-logos/icon-sun-cloud.png";
import MaterialButton from "@/components/MaterialButton.vue"
export default {
    components: { 
        MaterialButton
    },
    data: function () {
        return {
            logo: sunCloud,
            user: this.$auth0.user
        }
    },
    methods: {
        logout() {
            this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
        }
    }
}
</script>
