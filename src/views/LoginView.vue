<template>
    <div>
        <navbar-view></navbar-view>
        <div class="container">
            <div class="row justify-content-center pt-5">
                <div class="col-lg-5 col-md-10">
                    <p>Welcome to the weahter forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
                    <material-button color="success" size="sm" @click="login">Login</material-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MaterialButton from "@/components/MaterialButton.vue"
    import NavbarView from "./components/NavbarView.vue"
    export default { 
        components: { 
            MaterialButton,
            NavbarView
        },
        beforeMount() {
           this.doSomethingWithToken();
        },
        methods: {
            login() {
                this.$auth0.loginWithRedirect();
            },
            async doSomethingWithToken() {
                const token = await this.$auth0.getAccessTokenSilently();
                if(token) { this.$router.push("/dashboard"); }
            }
        }
    };
</script>
