const state = {
    turn: 1,
    symbol: 'x',
    winner: false
}

function updateTurn() {
    state.turn = (state.turn === 1) ? 2 : 1;
    state.symbol = (state.symbol === 'x') ? 'o' : 'x';
}

function updatePage() {
    $('#user-turn').text('player ' + state.turn + ' turn');
}

function checkWinner() {
    var patternOne = ($('#one-one').hasClass(state.symbol) && $('#one-two').hasClass(state.symbol) && $('#one-three').hasClass(state.symbol)) ? true : false;
    var patternTwo = $('#two-one').hasClass(state.symbol) && $('#two-two').hasClass(state.symbol) && $('#two-three').hasClass(state.symbol);
    var patternThree = $('#three-one').hasClass(state.symbol) && $('#three-two').hasClass(state.symbol) && $('#three-three').hasClass(state.symbol);
    var patternFour = $('#one-one').hasClass(state.symbol) && $('#one-two').hasClass(state.symbol) && $('#one-three').hasClass(state.symbol);
    var patternFive = $('#one-one').hasClass(state.symbol) && $('#two-one').hasClass(state.symbol) && $('#three-one').hasClass(state.symbol);
    var patternSix = $('#one-two').hasClass(state.symbol) && $('#two-two').hasClass(state.symbol) && $('#three-two').hasClass(state.symbol);
    var patternSeven = $('#one-three').hasClass(state.symbol) && $('#two-three').hasClass(state.symbol) && $('#three-three').hasClass(state.symbol);
    var patternEight = $('#one-one').hasClass(state.symbol) && $('#two-two').hasClass(state.symbol) && $('#three-three').hasClass(state.symbol);
    var patternNine = $('#one-three').hasClass(state.symbol) && $('#two-two').hasClass(state.symbol) && $('#three-one').hasClass(state.symbol);
    if (patternOne || patternTwo || patternThree || patternFour || patternFive || patternSix || patternSeven || patternEight || patternNine) {
        state.winner = true;
    }
    return state.winner;
}

function checkIfAlreadyOcc(element) {
    if ($(element).hasClass('x') || $(element).hasClass('o')) {
        return true;
    } else {
        return false;
    }
}

function handleAddClass(element) {
    $(element).addClass(state.symbol);
}

function handleUserTurn() {}

function watchForUserClick() {
    $('td').click(function(event) {
        var target = event.target;
        if (!checkIfAlreadyOcc(target)) {
            handleAddClass(target);
            if (checkWinner() === true) {
                $('#user-turn').text('Player ' + state.turn + ' wins!!!!!!!');
                $('.container').append('<a href="index.html">Reset</a>');
            } else {
                updateTurn();
                updatePage();
            }
        }

    });
}

$(function() {
    watchForUserClick();
});
