import Vue from 'vue'

new Vue({
    el: '#root',
    template: `
        <div>
            <div v-if="active" v-text="text"></div>
            <div v-else>else content</div>
            <div v-html="html"></div>
            <input text='text' v-model.number="text">
            <input type="checkbox" v-model="active">
            <ul>
                <li v-for="(item, index) in arr" :key="item">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
            </ul>
        </div>
    `,
    data: {
        arr: [1,2,3],
        obj: {
            a: '123',
            b: '456',
            c: '789'
        },
        text: 0,
        active: false,
        html: "<span>this is html</span>"
    }
})