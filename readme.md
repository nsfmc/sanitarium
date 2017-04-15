# sanitarium

this adds a small tool (`deflow`) for stripping flow types from some js, either stdin or files on disk and outputting to stdout again


## usage as a binary

**installing**
```shell
yarn add -G @nsfmc/sanitarium
```

**running**
```shell
deflow < path/to/file.js
pbpaste | deflow
```

## usage via yarn

**installing**
```shell
yarn add -D @nsfmc/sanitarium
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
