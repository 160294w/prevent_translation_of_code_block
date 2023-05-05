document.addEventListener('DOMContentLoaded', function() {
  var codeTags = document.getElementsByTagName('code');
  for (var i = 0; i < codeTags.length; i++) {
    codeTags[i].setAttribute('translate', 'no');
  }
});
