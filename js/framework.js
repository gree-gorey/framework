function getStyleSheet() {
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
      console.log(sheet.title);
      sheet.insertRule(".new { border: 1px solid black;}", 1);
      console.log(sheet);
    // if(sheet.title == unique_title) {
    //   return sheet;
    // }
  }
}

getStyleSheet();

Element.prototype.fontSize = function(size) {
    this.style.fontSize = size;
};

function _(className) {
    return document.getElementsByClassName(className);
}

var div = _("new");

console.log(div);

// var newEl = document.createElement("div");

window.onload = function () {
    var newEl = document.getElementById("1");
    console.log(newEl);

    // newEl.foo();

    newEl.fontSize("10pt");
};

// var newEl = document.getElementById("1");
// console.log(newEl);
//
// // newEl.foo();
//
// newEl.foofoo();