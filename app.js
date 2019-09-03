new Vue ({
    el:"#vue-app",
    data: {
        name: "Yael",
        job: "Programmer"
    },
    methods: {
        greet: function(time){
            return "Good " + time + " " + this.name
        }
    }
})