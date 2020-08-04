import Vue from 'vue'

 
const app = new Vue({
    // el: '#root',
    template: '<div>{{text}}</div>',
    data:{
        text: 0,
        obj: {}
    }
    // watch: {
    //     text (newText, oldText){
    //         console.log(`${newText} : ${oldText}`)
    //     }
    // }
})
app.$mount('#root')

// let i = 0
setInterval(() => {
    // i++
    app.text += 1
    app.text += 1
    app.text += 1
    app.text += 1
    app.text += 1
    // app.obj.a = app.text
    // app.$set(app.obj,'a',i)
    // app.$delete
    // app.$forceUpdate()
    // app.$data.text += 1
},1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//     return h('div', {}, 'new render funcction')
// }
// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText)=>{
//     console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//     unWatch()
// },2000)

// app.$on('test', (a, b) => {
//     console.log(`text emited ${a} ${b}`)
// })
// app.$once('test', (a, b) => {
//     console.log(`text emited ${a} ${b}`)
// })
// setInterval(() => {
//     app.$emit('test', 1, 2)
// },1000)



