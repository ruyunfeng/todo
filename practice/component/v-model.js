import Vue from 'vue'

const component = {
    props:['value'],
    template: `
        <div>
            <input type="text" @input="handleInput" :value="value">
            
        </div>
    `,
    methods: {
        handleInput(e){
            this.$emit('input',e.target.value)
        }
    }
}

 
new Vue({
    
    el:'#root',
    data(){
        return{
            value: '123'
        }
    },
    components:{
        Comp: component
    },
    template: `<comp :value="value" @input="value = arguments[0]"></comp>`
})
