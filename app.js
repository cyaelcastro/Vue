new Vue ({
    el:"#vue-app",
    data: {
        name: "Yael",
        job: "Programmer",
        website: "http://www.thenetninja.co.uk",
        websiteTag: "<a href='http://www.thenetninja.co.uk'>The net ninja</a>"
    },
    methods: {
        greet: function(time){
            return "Good " + time + " " + this.name
        }
    }
})