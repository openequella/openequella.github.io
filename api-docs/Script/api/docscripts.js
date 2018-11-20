function hasNamePart(element, namePart) {
  if (!element) {
    return false;
  }

  var upperNamePart = namePart.toUpperCase();

  if (element.className) {
    var nameParts = element.className.split(" ");

    for (var i = 0; i < nameParts.length; i++) {
      if (nameParts[i].toUpperCase() == upperNamePart) {
        return true;
      }
    }
  }

  return false;
}

function addNamePart(element, namePart) {
  if (!hasNamePart(element, namePart)) {
    element.className += element.className ? " " + namePart : namePart;
  }
}

function removeNamePart(element, namePart) {
  var upperNamePart = namePart.toUpperCase();

  var remainingClasses = [];

  if (element.className) {
    var nameParts = element.className.split(" ");

    for (var i = 0; i < nameParts.length; i++) {
      if (nameParts[i].toUpperCase() != upperNamePart) {
        remainingClasses[remainingClasses.length] = nameParts[i];
      }
    }

    element.className = remainingClasses.join(" ");
  }
}
