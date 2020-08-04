import Vue from 'vue'

var globalVar = '111' //eslint-disable-line
new Vue({
    el:'#root',
    // template: `
    //     <div :id="aaa" @click="handleClick">
    //         <p v-html="html"></p>
    //     </div>
    // `,
    template: `
        <div 
            :class="[{active: isActive}]"
            :style="styles"
        >
            <p>{{getJoinedArr(arr)}}</p>
        </div>
    `,
    data: {
        isActive: true,
        arr: [1,2,3],
        html: '<span>123</span>',
        aaa: 'main',
        styles: {
            color:'red'
        }
    },
    // computed: {
    //     className
    // },
    methods:{
        handleClick(){
            alert('clicked') //eslint-disable-line
        },
        getJoinedArr (arr){
            return arr.join(' ')
        }
    }
})