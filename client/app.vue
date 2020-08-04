<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>
            {{fullName}} {{counter}}
        </p>
        <!-- <Login></Login> -->
        <!-- <todo></todo> -->
        <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/login/exact">login exact</router-link>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <Footer></Footer>
        <!-- <router-view name="a"></router-view> -->
    </div>
</template>

<script>
import{
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex'
import Header from './layout/header.vue'
// import Login from './views/login/login.vue'
// import Todo from './views/todo/todo.vue'
import Footer from './layout/footer.jsx'
export default {
    components: {
        Header,
        // Login,
        // Todo,
        Footer
    },
    mounted(){
        console.log(this.$route)
        console.log(this.$store)
        // let i = 1
        // this.$store.state.count = 0
        // console.log(this.$store.state.count.num)
        this.updateCountAsync({
            num:5,
            time:2000
        })
        // setInterval(() => {
        //     this.$store.commit('updateCount',i++)
        // },1000)
    },
    methods:{
        ...mapActions(['updateCountAsync']),
        ...mapMutations(['updateCount'])
    },
    computed:{
        ...mapState({
            counter:(state) => state.count
        }),
        ...mapGetters(['fullName'])
        // count(){
        //     return this.$store.state.count
        // },
        // fullName(){
        //     return this.$store.getters.fullName
        // }
    }
}
</script>
<style lang="less" scoped>
 #app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: .9;
  z-index: -1;
}
</style>