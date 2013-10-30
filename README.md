# {{pkg}} [![NPM version](https://badge.fury.io/js/handlebars-helper-pkg.png)](http://badge.fury.io/js/handlebars-helper-pkg)

> {{pkg}} handlebars helper, for retrieving a value from your project's package.json.

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-pkg --save-dev
```

### Assemble config
If you use [Assemble config](http://assemble.io) and Grunt, in your Gruntfile simply add `handlebars-helper-pkg` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-pkg' module must also be listed in devDependencies
      // for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-pkg', 'foo/*.js']
    }
    ...
  }
});
```

You can now use begin using the helper in your templates:

```handlebars
v{{pkg "version"}}
```
Returns:

```html
v0.1.0
```


## Author

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)


## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.