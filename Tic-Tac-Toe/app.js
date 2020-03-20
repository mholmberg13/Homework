$(()=>{

    let value = 0;
    
    for (let i=0; i<9; i++) {
        let $div = $('<div>');
        $div.addClass('square');
        $('.container').append($div);
    };

    const boxClickX = (event) => {
        event.preventDefault();
        const $x = $('<h1>X</h1>');
        $(event.currentTarget).append($x);
        value += 1;


    }

    const boxClickO = (event) => {
        event.preventDefault();
        const $o = $('<h1>O</h1>');
        $(event.currentTarget).append($o);
        value += 1;

    }

    const boxClick = (event) => {
        if ( value % 2 == 0) {
            boxClickX(event);
        } else {
            boxClickO(event);
        }
        

    }

    
    $(".square").one('click', boxClick);

});