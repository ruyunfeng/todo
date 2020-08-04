// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default[
    {
        path:'/',
        redirect:'/app'
    },
    {
        path:'/app',
        props: true,
        component: () => import('../views/todo/todo.vue'),
        // components: {
        //     default: Todo,
        //     a: Login
        // },
        name:'app',
        meta:{
            title:'this is app',
            description:'ajsj'
        },
        beforeEnter(to,from,next){
            console.log('app route before enter')
            next()
        }
        // children: [
        //     {
        //         path: 'test',
        //         component: Login
        //     }
        // ]
    },
    {
        path:'/login',
        component: () => import('../views/login/login.vue')
    },
    {
        path:'/login/exact',
        component: () => import('../views/login/login.vue')
    }
]