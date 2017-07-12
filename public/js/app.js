var socket = io();

socket.on('connect', function () {
    console.log('Connected to socket.io server!');
});

socket.on('message', function (message) {
    console.log('New message: ');
    console.log(message.text);

    jQuery('.messages').append('<p>' + message.text + '</p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault(); //so it does not refresh the screen (submit default)

    var $message = $form.find('input[name=message]');
    socket.emit('message', {
        text: $message.val() //To pass it to string
    });
    $message.val('');

});
