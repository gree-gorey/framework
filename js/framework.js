Element.prototype.addClass = function(className) {
    this.classList.add(className);
};

Element.prototype.removeClass = function(className) {
    this.classList.remove(className);
};

Element.prototype.toggleClass = function(className) {
    this.classList.toggle(className);
};

Element.prototype.hasClass = function(className) {
    return this.classList.contains(className);
};

Element.prototype.setStyle = function(propertyName, value) {
    this.style[propertyName] = value;
};

NodeList.prototype.addClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(className);
    }
};

NodeList.prototype.removeClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(className);
    }
};

NodeList.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(className);
    }
};

NodeList.prototype.setStyle = function(propertyName, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].style[propertyName] = value;
    }
};

function _(query) {
    var result = document.querySelectorAll(query);
    if (result.length > 1) {
        return result
    } else {
        return result[0]
    }

}

