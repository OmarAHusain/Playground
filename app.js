new Vue({
    el: '#vue-app',
    data: {
        name: 'Omar',
        job: 'superhero',
        website: 'http://www.omar.cloud',
        websiteTag:'<a href="http://www.omar.cloud">OMAR.CLOUD</A>',
        age: 25,
        x: 0,
        y: 0,
        name: '',
        age: 33,
        a: 0,
        b: 0,
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc){
            this.age += inc;
        },
        sub: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('You clicked me');
        },
        logName: function(){
            console.log('You entered your name')
        },
        logAge: function(){
            console.log('You entered your age')
        },
        /*addToA: function(){
            return this.a + this.age;
        },
        addToB: function(){
            return this.b + this.age;
        }*/
    },
    computed: {
        addToA: function(){
            return this.a + this.age;
        },
        addToB: function(){
            return this.b + this.age;
        }
    }
});