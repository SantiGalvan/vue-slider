console.log('Vue OK', Vue);

// Attivo Vue
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            destinations,
            activeIndex: 0
        }
    },
    computed: {},
    methods: {}
});
app.mount('#root');