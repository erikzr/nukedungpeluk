var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseup", function() {
    this.blur();
  });
}

var noCopyElement = document.getElementById('click');
  noCopyElement.addEventListener('copy', function(event) {
    event.preventDefault();
  });


  