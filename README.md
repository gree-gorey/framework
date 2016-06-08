### Доступ к элементам

Доступ к элементам осуществляется по тегу, классу, или id элемента. Если найден один элемент, возвращается объект `Element`, если больше одного элемента — возвращается объект `NodeList`.

```JavaScript
_("myTag")  // вернет все элементы с тегом "myTag"
_(".myClass") // вернет все элементы класса "myClass"
_("#myID")  // вернет элемент с id "myID"
_("div#myID")  // элемент div с id "myID"
_("span.myClass.fooClass")  // вернет все элементы span с классами "myClass" и "fooClass"
_("div#myID span[foo=bar]")  // вернет все элементы span со значением атрибута foo равным bar внутри элемента с id "myID"
```

### Работа с классами

```JavaScript
_("#myID").addClass("foo");  // добавит класс "foo" к элементу с id "myID"
_(".myClass").addClass("foo");  // добавит класс "foo" ко всем элементам класса "myClass"
_("#myID").removeClass("foo");  // удалит класс "foo" у элемента с id "myID"
_(".myClass").removeClass("foo");  // удалит класс "foo" у всех элементов класса "myClass"
_("#myID").toggleClass("bar");  // добавит класс "bar" к элементу с id "myID", если его не было; удалит, если был
_(".myClass").toggleClass("bar");  // добавит класс "bar" ко всем элементам класса "myClass", у которых его нет; удалит у всех элементов, у которых он был
_("#myID").hasClass("someClass");  // вернет true, если у элемента есть класс "someClass" и false, если нет такоо класса
```

### Работа со стилями

```JavaScript
_("#myID").setStyle("background-color", "red");  // устанавливает цвет фона для элемента с id "myID"
_(".myClass").setStyle("font-size", "50pt");  // устанавливает размер шрифта для всех элементов класса
```