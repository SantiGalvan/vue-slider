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
    methods: {
        goNextImg() {
            if (this.activeIndex < 4) this.activeIndex++;
            else this.activeIndex = 0;
        },
        goPrevImg() {
            if (this.activeIndex > 0) this.activeIndex--;
            else this.activeIndex = 4;
        },
        setImg(i) {
            this.activeIndex = i;
        }
    }
});
app.mount('#root');