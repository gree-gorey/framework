window.onload = function () {
    console.log(_("div#myID span[foo=bar]"));
    _("#myID").addClass("foo");
    // _("#myID").removeClass("myClass");
    console.log(_(".myClass"));
    _(".myClass").toggleClass("bar");
    console.log(_("#myID").hasClass("dfda"));
    _("#myID").setStyle("background-color", "red");
    _(".myClass").setStyle("font-size", "50pt");
};
