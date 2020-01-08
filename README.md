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
