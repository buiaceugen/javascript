# javascript
# Loader
## Accessor descriptor = get + set (see the example above)
## get must be a function; its return value is used in reading the property; if not specified, the default is undefined, which behaves like a function that returns undefined
## set must be a function; its parameter is filled with RHS in assigning a value to property; if not specified, the default is undefined, which behaves like an empty function
## Data descriptor = value + writable (see the example below)
## value default undefined; if writable, configurable and enumerable (see below) are true, the property behaves like an ordinary data field
## writable - default false; if not true, the property is read only; attempt to write is ignored without error*!
## Both descriptors can have these members:
## configurable - default false; if not true, the property can't be deleted; attempt to delete is ignored without error*!
## enumerable - default false; if true, it will be iterated in for(var i in theObject); if false, it will not be iterated, but it is still accessible as public
