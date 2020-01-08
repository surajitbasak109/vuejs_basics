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
