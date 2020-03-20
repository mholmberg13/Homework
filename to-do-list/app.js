$(()=>{


$('#submit').on('click', (event) => {
    let $div = $('<div>');
    
    $div.addClass('to-do-item');
    $($div).append($('#input-box').val());
    

    let $done = $('<button class="done">DONE</button>');
    $($div).append($($done));
    $('#to-do-list').append($div);
    

    $($done).on('click', (event) => {
        $(event.currentTarget).parent().removeClass();
        $(event.currentTarget).parent().addClass('done-item');
        $(event.currentTarget).parent().appendTo('#completed');

        let $remove = $('<button class="remove">REMOVE</button>');
        $(event.currentTarget).parent().append($remove);
        $($done).remove();

        $($remove).on('click', (event) => {
            $(event.currentTarget).parent().remove();
        });

    });
    
    event.preventDefault();
});

$('#submit').on('click', (event) => {
    $('input').val('')
    event.preventDefault();
});








})