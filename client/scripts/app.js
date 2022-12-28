// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    $('.username').on('click', function (event) {
      console.log($(event));
    });

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // var step = () => {
    //   setTimeout(function() {
    //     MessagesView.render();
    //     step();
    //   }, 5000);
    // };

    // step();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      for (let i = 0; i < data.length; i++) {
        MessagesView.renderMessage(data[i]);
      }
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
