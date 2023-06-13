// Load the HTML file using XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('GET', './canwork3.html', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Parse the HTML string as a DOM object
    var parser = new DOMParser();
    var doc = parser.parseFromString(xhr.responseText, 'text/html');

    // Get all comment nodes in the document
    var comments = doc.createNodeIterator(
      doc,
      NodeFilter.SHOW_COMMENT,
      null,
      false
    );

    // Loop through all comment nodes and remove them
    while (comments.nextNode()) {
      var commentNode = comments.referenceNode;
      commentNode.parentNode.removeChild(commentNode);
    }

    // Output the modified HTML string
    console.log(doc.documentElement.outerHTML);
  }
};
xhr.send();