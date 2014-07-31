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

## Performance

Because this is a one-size-fits-all solution there's probably some extra stuff that can be trimmed to reduce the download times for some of the resource bundled with this app. Here are a few ideas of places you may want to trim:
- The Lato font, loaded from the Google Fonts API in the `<head>` of the main `index.html` file, loads all varieties of the Lato font. You're likely not using all of them and can drop the ones you don't need. Google has [a tool](https://www.google.com/fonts#UsePlace:use/Collection:Lato) that can help with that, but you can also just drop them from the URL in `index.html`:

```html
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic">
```
