Backbone JSON-API
=================

Backbone Model &amp; Collection .parse() functions for data from a [JSON API](http://jsonapi.org/format/#url-based-json-api)

### Install

̀`npm install backbone-jsonapi`


# Use

The "ready to use" [script file](https://raw.github.com/guillaumervls/backbone-jsonapi/master/dist/backbone-jsonapi.min.js)
is in the `dist` folder.

```html
<script src='backbone-jsonapi.min.js'></script>
<!--
  Works with or without AMD
  In both case it requires '_' and 'Backbone'
 -->
```

Also works with [Browserify](https://github.com/substack/node-browserify) :

```javascript
require('backbone-jsonapi')(Backbone, _);
```


## (Re)build

```
npm install
grunt dist
```

## Test

```
npm install
grunt lint
grunt test
```

### Licence

**The MIT License (MIT)**

*Copyright (c) 2013 guillaumervls*

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
