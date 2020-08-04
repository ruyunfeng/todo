import Vue from 'vue'

const component = {
    props: {
        active: {
            type: Boolean,
            required: truen
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
    methods: {
        handleChange(){
            this.$emit('change')
        }
    }
}

// Vue.component('CompOne', component)

new Vue({
    components: {
        CompOne: component
    },
    data: {
        prop1: 'text1'
    },
    methods: {
        handleChange(){
            this.prop1 += 1
        }
    },
    mounted(){
        console.log(this.$refs.comp1)
    },
    el: '#root',
    template: `
        <div>
            <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
            <comp-one :active="false" prop-one="text2"></comp-one>
        </div>
    `
})