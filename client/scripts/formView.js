// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.




    let text = $('#message').val();
    let username = App.username;


    let message = {
      username: username,
      text: text,
      roomname: $('#rooms select').val().slice(1, $('#rooms select').length - 2)
    };

    Parse.create(message);

    console.log('click!');

    MessagesView.render();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', false);
  }

};