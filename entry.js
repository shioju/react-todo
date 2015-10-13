var TodoBox = require("./components/TodoBox");
var data = [
  {
    id: 1,
    text: "Buy milk",
    done: false
  },
  {
    id: 2,
    text: "Walk the dog",
    done: true
  }
]

document.addEventListener("DOMContentLoaded", function() {
  React.render(<TodoBox data={data} />, document.getElementById('content'));
});
