# Vue JS Tutorial

## Events

```javascript
v-on:click
v-on:dblclick
@click
@dblcick
```

### Event Modifieres

Modifiers are directive postfixes denoted by a dot.

- .stop
- .prevent
- .self
- .capture
- .once
- .passive

```Javascript
v-on:click.prevent
```

### Keyboard Events

- keydown: The event occurs when the user is pressing a key
- keypress: The event occurs when the user presses a key
- keyup: The event occurs when the user releases a key

**System Modifier Keys**

- .ctrl
- .alt
- .shift
- .meta

_Note_: On Macintosh keyboards, meta is the command key. On Windows keyboards, meta is the Windows key.

## 2-Way Data Binding

`v-model` directive can be used to create two-way data bindings on form input, textarea and select elements. It automatically picks the correct way to update the element based on the input type.

## Computed Properties

In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example:

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

At this point, the template is no longer simple and declarative. You have to look at it for a second before realizing that it displays `message` in reverse. The problem is made worse when you want to include the reversed message in your template more than once.

That’s why for any complex logic, you should use a computed property.

**_Basic Example_**

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```javascript
var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello"
  },
  computed: {
    // a computed getter
    reversedMessage: function() {
      // `this` points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
```

**Result:**

```
Original Message: "Hello"
Computed Reversed Message: "olleH"
```
