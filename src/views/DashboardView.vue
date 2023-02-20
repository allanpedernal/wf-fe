<template>
    <div>
        <navbar-view></navbar-view>
        <div class="container">
            <div class="row justify-content-center pt-5">
                <div class="col-lg-5 col-md-10">
                    <p class="text-center">{{ user.name }}</p>
                    <p class="text-center"><a :href="`https://github.com/`+user.nickname" target="_blank">https://github.com/{{ user.nickname }}</a></p>
                    <form class="text-center" @submit.prevent="getWeather">
                        <div class="mb-3">
                            <input id="city" name="city" v-model="city" placeholder="City" class="form-control border rounded ps-3" />
                        </div>
                        <material-button type="submit" color="success" size="sm">Display Weather</material-button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MaterialInput from "@/components/MaterialInput.vue"
    import MaterialButton from "@/components/MaterialButton.vue"
    import NavbarView from "./components/NavbarView.vue"
    export default { 
        components: { 
            MaterialInput,
            MaterialButton,
            NavbarView
        },
        data: function () {
            return {
                user: this.$auth0.user,
                city: ''
            };
        },
        methods: {
            getWeather() {
                if(this.city != '') {
                    this.$router.push("/weather/forecast/"+this.city);
                }
            }
        }
    };
</script>
