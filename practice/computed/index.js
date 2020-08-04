import Vue from 'vue'

new Vue({
    el:'#root',
    template: `
        <div>
            <p>
                Name: {{name}}
            </p>
            <p>
                {{getName()}}
            </p>
            <p>
                fullName: {{getName()}}
            </p>
            <p>
                Number: {{number}}
            </p>
            <p>
                <input type="text" v-model="number">
            </p>
            <p>
                <input type="text" v-model="obj.a">
            </p>
        </div>
    `,
    data: {
        firstName: 'ru',
        lastName: 'yunfeng',
        number:0,
        obj:{
            a:6
        }
    },
    computed: {
        name () {
            console.log('new Name')
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch:{
         
        'obj.a':{
            handler(){
                console.log('obj.a change')
            },
            immediate: true
        }
    },
    methods:{
        getName(){
            console.log('new getName')
            return `${this.firstName} ${this.lastName}`
        }
    }
})