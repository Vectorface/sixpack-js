var sixpack = require('../../');

//basic example
var session = new sixpack.Session("button-user");
session.participate("button", ["red", "blue"], function (err, resp) {
  if (err) return console.log(err);
  console.log(resp);
});

//force alternative with traffic fraction
var session = new sixpack.Session;
session.participate("test-force-alt", ["opt1", "opt2"], 0.1, "opt1", function(err, resp) {
    if (err) return console.log(err);
    console.log(resp);
});

//alternative with a conversion (using default kpi)
session.participate("default-kpi", ["opt1", "opt2"], function(err, resp) {
    if (err) return console.log(err);
    session.convert("default-kpi", function(err, resp) {
        if (err) return console.log(err);
        console.log(resp);
    });
});

//alternative with conversion (using custom kpi)
//NOTE: a participate event must have already been completed and an alternative
//recieved before a convert call can be sent.
//in this case the user for test 'button' would have gotten either the
// red or blue option already, then perhaps you want to track the
//conversion rate on 'add-to-cart' and 'bought-items'.
var session = new sixpack.Session("button-user");
session.convert("button", "added-to-cart", function(err, resp) {
    if (err) return console.log(err);
    console.log(resp);
});
