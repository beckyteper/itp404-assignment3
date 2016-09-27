function getSubreddits() {
  var searchQuery = document.getElementById('subreddit_search').value;
  var searchURL = encodeURI('https://www.reddit.com/r/' + searchQuery + '.json');

  var promise = $.ajax({
     url: searchURL,
     type: 'get'
  });

  var promise2 = promise.then(function(response) {
    console.log(1, response);
    return response.data.children;
  });

  promise2.then(function(response) {
    console.log(2);
    var templateSource = $('#reddit-responses-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
      redditData: response
    });
    $('#reddit-responses').html(html);
  }, function() {
    console.log('There was an error');
  });
}
