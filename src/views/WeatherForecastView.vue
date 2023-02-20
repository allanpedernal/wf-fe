<template>
    <div>
        <navbar-view></navbar-view>
        <div class="container">
            <div class="row justify-content-center pt-5">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center">Date (mm/dd/yyyy)</th>
                                <th class="text-center">Temp (F)</th>
                                <th class="text-center d-none d-lg-table-cell">Description</th>
                                <th class="text-center d-none d-lg-table-cell">Main</th>
                                <th class="text-center d-none d-lg-table-cell">Pressure</th>
                                <th class="text-center d-none d-lg-table-cell">Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">{{ weather_forecast.dt }}</td>
                                <td class="text-center">{{ weather_forecast.main.temp }}</td>
                                <td class="text-center d-none d-lg-table-cell">{{ weather_forecast.weather[0].description }}</td>
                                <td class="text-center d-none d-lg-table-cell">{{ weather_forecast.weather[0].main }}</td>
                                <td class="text-center d-none d-lg-table-cell">{{ weather_forecast.main.pressure }}</td>
                                <td class="text-center d-none d-lg-table-cell">{{ weather_forecast.main.humidity }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="col-12">
                    <material-button color="primary" size="sm" class="float-end mt-5" @click="goBack">Back</material-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import MaterialButton from "@/components/MaterialButton.vue"
    import NavbarView from "./components/NavbarView.vue"
    export default {
        components: { 
            MaterialButton,
            NavbarView
        },
        created(){
            this.getWeahterForecast();
        },
        data: function () {
            return {
                weather_forecast: {
                    coord: {
                        lon: 121.0333,
                        lat: 14.6333
                    },
                    weather: [
                        {
                            id: 0,
                            main: "",
                            description: "",
                            icon: ""
                        }
                    ],
                    base: "",
                    main: {
                        temp: 0,
                        feels_like: 0,
                        temp_min: 0,
                        temp_max: 0,
                        pressure: 0,
                        humidity: 0
                    },
                    visibility: 0,
                    wind: {
                        speed: 0,
                        deg: 0
                    },
                    clouds: {
                        all: 20
                    },
                    dt: "",
                    sys: {
                        type: 0,
                        id: 0,
                        country: "",
                        sunrise: 0,
                        sunset: 0
                    },
                    timezone: 0,
                    id: 0,
                    name: "",
                    cod: 0
                }
            };
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            getWeahterForecast()
            {
                if(this.$route.params.city == '')
                {
                    this.$router.push("/dashboard");
                }
                let city = this.$route.params.city;
                axios.get('http://127.0.0.1:8000/api/weather/forecast?city='+city)
                .then((res)=>{
                    this.weather_forecast = res.data.weather_forecast;
                })
                .catch((err)=>{
                    console.log(err);
                });
            }
        }
    };
</script>
