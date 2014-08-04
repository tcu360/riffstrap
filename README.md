Riffstrap
=========

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Riffstrap is TCU 360's customized version of Twitter's [Bootstrap](http://getbootstrap.com/). Most of the customizations are within the LESS files provided by Bootstrap, which allow variables to be overriden across all of the project's CSS.

In addition to Bootstrap, this repository contains FontAwesome icons and a custom icon set generated using [FontCustom](http://fontcustom.com/). That font can be updated by adding SVG files to the `fontcustom/svg` directory and can be compiled by running `fontcustom compile`. Using the font, the TCU 360 logo can be printed using:

```html
<span class="icon-custom-logo-parts colorized">
	<i class="icon-custom-logo-riff"></i>
	<i class="icon-custom-logo-tcu"></i>
	<i class="icon-custom-logo-360"></i>
	<i class="icon-custom-logo-alltcu"></i>
</span>
```

## Usage

There are several ways you can use Riffstrap in your project, from simply including the bundled JavaScript and CSS files to cloning this repository and using it as a starting point for a simple single-page app.

Riffstrap is already setup to work with Grunt and includes a lightweight development server, so it will serve as a great scaffolding for a single-page Web app. For example, using [Grunt](http://gruntjs.com/), it's setup to watch the files in the `src/` folder as you're working on them, check them for errors and transpile/compile them as you work on your app. When you're finished developing, it can even minify your files and package all of your app code for production.

If that interests you, skip down to [Tool installation and configuration](#tool-installation-and-configuration). If you'd rather just include the bundled Bootstrap styles, fonts, etc. in your project then [download the zipped repository](https://github.com/tcu360/riffstrap/archive/gruntify.zip). The minified JavaScript and CSS files can be found in the `dist/` folder and the FontAwesome and FontCustom fonts are in the `fonts/` folder.

### Tool installation and configuration

*Already have Grunt and Bower installed globally? Run `npm install` and [skip ahead](during-development).*

Both Grunt and Bower require [Node.js](http://nodejs.org/). If you need to install Node.js, you can download an installer for your OS at [nodejs.org/download](http://nodejs.org/download/).

Then, using Node's [NPM](https://www.npmjs.org/) (**N**ode **P**ackage **M**anager) command line tool, which is automatically installed with Node.js, install Grunt and Bower by running `npm install -g grunt bower`. That will install Grunt and Bower globally (`-g`) so they can now be used for any project.

Next, in the Riffstrap directory, type `npm install`. This step will install all of the [plugins](http://gruntjs.com/plugins) that Grunt needs to do things like [transpile the LESS files](https://github.com/gruntjs/grunt-contrib-less) and [check your JavaScript](https://github.com/gruntjs/grunt-contrib-jshint) for errors.

All of the Grunt plugins (which are specified in `package.json`) are Node.js modules. They're stored in the `node_modules` directory, which you'll now see in your project. That directory is ignored by git and there's no need to deploy those files with your app when you push it to production.

### During development

[`Gruntfiles.js`](Gruntfile.js) defines a [task](http://gruntjs.com/configuring-tasks) (`dev`), which you'll want to use during development. To run the task, simply type `grunt dev` at the command line from anywhere inside your app. When you do, you'll notice that several things happen:

1. Your JavaScript is [checked for erros](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L40-L41) using [JSHint](http://www.jshint.com/).
2. The `dist/` and `fonts/` folders are [deleted](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L66-L70) (we're about to fill them again).
3. Your .less [files are transpiled](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L17-L38) into a single CSS file at [`dist/style.css`](dist/style.css).
4. Your JavaScript files are [concatenated, beautified and saved](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L43-L64) at [`dist/script.js`](dist/script.js) using [UglifyJS2](https://github.com/mishoo/UglifyJS2).
5. Fonts are [copied](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L72-L85) into the `fonts/` directory.
6. A lightweight [Web server is started](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L87-L127) and your app is opened in your default browser.
7. All of your source files are [watched](https://github.com/tcu360/riffstrap/blob/6ecbc91e5a98c38bdca9620a701cc34229817814/Gruntfile.js#L100-L129) and reconcatenated/retranspiled each time a file is changed. The app in your Web browser will automatically reload each time a file is changed using [livereload](http://livereload.com/).

Awesome, right?

You can now add your styles to [`src/style.less`](src/style.less) and JavaScript to [`src/script.js`](src/script.js). The main HTML file is [`index.html`](index.html).

When you're done developing use Ctrl + C to stop Grunt.

### Adding JavaScript and LESS files

You're not limited to the single .less and .js file that are setup by default. You can break your app into as many files as you want.

Add additional JavaScript files by editing the `scripts` array at the top of [`Gruntfile.js`](Gruntfile.js). Just remember to include the files in the order you want them to be concatenated by UglifyJS. For CSS, use an `@import` in [`style.less`](src/style.less) to bring in any additional .less files.

### Additional libraries, frameworks, etc.

To bring in additional libraries, you should use [Bower](http://bower.io/). For example, to add Tabletop.js you would type `bower install tabletop --save`. That would download Tabletop.js and add it as a dependency in [`bower.json`](bower.json). See the [Bower docs](http://bower.io/) for the `bower install` command for more info.

Once you've added something using Bower, add it to your build just like you'd add your own code using the steps under [*Adding JavaScript and LESS files*](Adding JavaScript and LESS files) above.

### Readying for production

When you're ready to push your app to production, run `grunt prod`. Doing so will follow most of the steps as `grunt dev`, except:
- your code will be minified before it's saved to the `dist/` folder
- a Web server won't be started
- your files won't be watched for changes; the task will exit and you'll need to rerun `grunt prod` to rebuild the files
- a [source map](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) will be generated for your JavaScript, which will make debugging much easier

You should also consider trimming down what's in your build, which can significantly reduce the amount of code in your app. See the [*Performance*](#performance) section below on how to do custom Bootstrap builds and reduce the size of the Webfont download.

## Performance

Because this is a one-size-fits-all solution there's probably some extra stuff that can be trimmed to reduce the amount of stuff bundled with this app. Here are a few places you may want to trim:

####Bootstrap
**CSS:** Bootstrap's default build has styles in it for every one of Bootstrap's many [components](http://getbootstrap.com/components/). In Riffstrap, what is included in Bootstrap's build is set by [`/src/custom-bootstrap/bootstrap.less`](https://github.com/tcu360/riffstrap/blob/master/src/custom-bootstrap/bootstrap.less). For example, we don't use Bootstrap's built-in [glyphicons](http://getbootstrap.com/components/#glyphicons) (we use [FontAwesome](http://fontawesome.io/) instead), so `glyphicons.less` is commented out:

```css
// Reset and dependencies
@import "normalize.less";
@import "print.less";
/*@import "glyphicons.less";*/
```

You can do the same for any of Bootstrap's many components that you're not using. This can substantially decrease the amount of CSS generated by Bootstrap.

**JavaScript:** Bootstrap comes with a pretty extensive library of JavaScript components for everything from [modal boxes](http://getbootstrap.com/javascript/#modals) to [tooltips](http://getbootstrap.com/javascript/#tooltips). Chances are you're not using all of them, but by default they're all included here. The easiest way to trim that down is by stopping Grunt from mixing them in with your app's `script.js` file. At the top of [`Gruntfile.js`](https://github.com/tcu360/riffstrap/blob/master/Gruntfile.js) there's a `scripts` array that probably looks something like this:

```javascript
var scripts = [
	'bower_components/jquery/dist/jquery.js',
	'bower_components/bootstrap/js/**.js',
	'src/script.js'
];
```

The line that says `bower_components/bootstrap/js/**.js` is telling Grunt to mix every file in Bootstrap's JavaScript folder into your app's `script.js`. You can delete that line and instead only list the scripts you want. For example, if you were using modals and no other JavaScript components, you could change the above to:

```javascript
var scripts = [
	'bower_components/jquery/dist/jquery.js',
	'bower_components/bootstrap/js/modal.js',
	'bower_components/bootstrap/js/transition.js',
	'src/script.js'
];
```

Our JavaScript now only includes the Bootstrap plug-ins for modal boxes and transitions (used by the modal boxes). That reduced the size of our JavaScript by about 1,300 lines.

Also keep in mind that if you're not using any of Bootstrap's JavaScript functionality that you can exclude it entirely from your build without any negative effects.

####Web fonts
The Lato font, loaded from the Google Fonts API in the `<head>` of the main `index.html` file, loads all varieties of the Lato font. You're likely not using all of them and can drop the ones you don't need. Google has [a tool](https://www.google.com/fonts#UsePlace:use/Collection:Lato) that can help with that, but you can also just drop them from the URL in `index.html`:

```html
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic">
```
