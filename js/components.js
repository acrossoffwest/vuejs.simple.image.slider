Vue.component('image-item', {
    template: '#image-wrapper',
    props: ['src', 'index', 'current']
});
Vue.component('image-thumbs', {
    template: '#image-thumbs',
    props: ['images','thumbsize'],
    methods: {
        changeCurrentImage: function (index) {
            var parent = this.$parent.$parent;
            parent.slider.current = index;
        }
    }
});
Vue.component('aow-simple-image-slider', {
    template: '#aow-simple-image-slider',
    props: ['images', 'current']
});
