import Vue from 'vue'

const ChildComponent = {
    template: `<div>child component</div>`,
    inject: ['yeye'],
    mounted() {
        console.log(this.$parent.$options.name)
    }
}
const component = {
    name:"comp",
    // props:['value'],
    // template: `
    //     <div :style="style">
    //         <div class='header'>
    //             <slot name="header"></slot>
    //         </div>
    //         <div class='body'>
    //             <slot name="footer"></slot>
    //         </div>
    //     </div>
    // `,
    components: {
        ChildComponent
    },
    template: `
        <div :style="style">
            <slot value="456"></slot>
            <child-component></child-component>
        </div>
    `,
    data(){
        return{
            style:{
                width:'200px',
                height:'200px',
                border:'1px solid #aaa'
            }
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
    provide(){
        return{
            yeye:this,
            value: this.value
        }
        
    },
    template: `
        <div>
            <comp  >
                <span slot-scope="props">{{props.value}}</span>
            </comp>
        </div>
    `
})
