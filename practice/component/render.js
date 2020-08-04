import Vue from 'vue'

 

 
const component = {
    name:"comp",
     
     
    // template: `
    //     <div :style="style">
    //         <slot></slot>
    //     </div>
    // `,
    render(createElement){
        return createElement('div',{
            style: this.style
        },[
            this.$slots.default,
            this.props1
        ])
    },
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
     
    // template: `
    //     <div>
    //         <comp ref="comp" >
    //             <span ref="span" >{{value}}</span>
    //         </comp>
    //     </div>
    // `,
    render(createElement){
        return createElement('comp',{
            ref:'comp',
            props:{
                props1:this.value
            }
        },
        [
            createElement('span',{
                ref:'span' 
            },this.value)
        ]
    )}
})
