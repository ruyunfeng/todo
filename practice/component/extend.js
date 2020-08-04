import Vue from 'vue'

const component = {
    props: {
        active: {
            type: Boolean
            // required: true
            // default: true
        },
        propOne: String
    },
    template: `
        <div>
            <input type="text" v-model="text">
            <span @click="handleChange">{{propOne}}</span>
            <span v-if="active">see me if show</span>
        </div>
    `,
    data(){
        return {
            text: 0
        }
    },
    mounted(){
        console.log('comp mounted')
    },
    methods: {
        handleChange(){
            this.$emit('change')
        }
    }
}

const component2 = {
    extends: component,
    data(){
        return{
            text:1
        }
    },
    mounted(){
        console.log(this.$parent.$options.name)
    }
}

const CompVue = Vue.extend(component)

// new CompVue ({
//     el: '#root',
//     propsData: {
//         propOne : 'xxx',
//         active:false
//     },
//     mounted(){
//         console.log('instance mounted')
//     },
// })
new Vue({
    name:'Root',
    el:'#root',
    components:{
        Comp: component2
    },
    propsData:{
        active:false
    },
    template: `<comp></comp>`
})
