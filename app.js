new Vue ({
    el:"#vue-app",
    data: {
        a: "",
        b: "",
        age: ""
    },
    methods: {
    },
    computed: {
        addToA: function(){
            console.log("addToA")
            return this.a + this.age
        },
        addToB: function(){
            console.log("addToB")
            return this.b + this.age
        }
    }
})