$('.gallery').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function() {
        $('.gallery').addClass('visible')
    },
    doOut: function() {
        $('.gallery').removeClass('visible')
    },
    tolerance: 0,
    throttle: 100,
    toggleClass: 'onScreen',
    lazyAttr: null,
    debug: false
});
$('.article').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function() {
        $('.article').addClass('visible')
    },
    doOut: function() {
    },
    tolerance: 0,
    throttle: 100,
    toggleClass: 'onScreen',
    lazyAttr: null,
    debug: false
});