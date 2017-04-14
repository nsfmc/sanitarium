# sanitarium

this is just a small tool for stripping flow types from some js.

## usage

**installing**
```shell
git clone https://github.com/nsfmc/sanitarium
cd sanitarium
yarn
```

**running on a file**

```shell
yarn deflow -- < path/to/file.js
```

**running on clipboard**
```shell
pbpaste | yarn deflow --
```
