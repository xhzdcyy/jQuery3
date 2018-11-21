let allButtons = $('#buttons > span');
let n = 0;

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        console.log('hi');
        let index = $(e.currentTarget).index();
        let w = -560 * index;
        $('#images').css({
            transform: 'translate(' + w + 'px)'
        })
        n = index;
        activeButton(allButtons.eq(index));
    })
}

let size = allButtons.length;
allButtons.eq(n % size).trigger('click')

let timerId = setTimer();

$('.window').on('mouseenter', function () {
    console.log('enter');
    window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {
    timerId = setTimer();
})

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

function setTimer() {
    return setInterval(() => {
        n++;
        allButtons.eq(n % size).trigger('click')
    }, 3000)
}
