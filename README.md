Backbone JSON-API
=================

Backbone Model &amp; Collection .parse() functions for data from a JSON API (http://jsonapi.org/format/#url-based-json-api)

# Use

The "ready to use" files are in the ***dist*** folder.

```html
<script src='backbone-jsonapi.min.js'></script>
<script>
  // The scripts exports a single object, with a single function :
  BBJSAPI.setParseFunctions(Backbone, _);
</script>
```

## (Re)build

```
npm install
grunt dist
```

## Test

```
npm install
grunt test
```