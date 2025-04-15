var elems = [];
var Game = function(name) {
  this.name = name;
  this.refElem = document.createElement('canvas');
};
Game.prototype.add = function(type, x, y, id) {
  var elem = document.createElement(type);
  elem.id = id;
  elem.top = y;
  elem.left = x;
  this.refElem.appendChild(elem);
  elems.append(id);
};
Game.prototype.chain = function(elementId, event, func) {
  if (event == 'click') {
    document.getElementById(elementId).addEventListener('click', function() {
      func();
    });
  }
  else if (event == 'dblclick') {
    document.getElementById(elementId).addEventListener('dblclick', function() {
      func();
    });
  }
  else if (event == 'mouseover') {
    document.getElementById(elementId).addEventListener('mouseover', function() {
      func();
    });
  }
  else if ('keypress' in event) {
    document.addEventListener('keypress', function(e) {
      if (e.keyCode == event.substr(9, event.length)) {
        func();
      }
    });
  }
};
Game.prototype.run = function() {
  document.body.appendChild(this.refElem);
};
