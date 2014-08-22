# LDXEffectsLibrary

A JavaScript library that includes special effects you can use on HTML elements

## API

### show function

Fades an HTML element into view.

show(_ID of HTML element to show_,_Function name to execute on completion_);

Example:
```javascript
show("mydiv",divIsShown);
```

### hide function

Fades an HTML element out of view.

hide(_ID of HTML element to hide_,_Function name to execute on completion_);

Example:
```javascript
hide("mydiv",divIsHiden);
```

### fadeBackground function

Fades the body's background from one color to another.

fadeBackground(_Current red value_,_Current green value_,_Current blue value_,_New red value_,_New green value_,_New blue value_,_Function name to execute on completion_);

Example:
```javascript
fadeBackground(0,0,0,0,191,255,backgroundIsFaded);
```
