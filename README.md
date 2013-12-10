Riffstrap
=========

Riffstrap is TCU 360's customized version of Twitter's [Bootstrap](http://getbootstrap.com/). Most of the customizations are within the LESS files provided by Bootstrap, which allow variables to be overriden across all of the project's CSS.

In addition to Bootstrap, this repository contains FontAwesome icons and a custom icon set generated using [FontCustom](http://fontcustom.com/). That font can be updated by adding SVG files to the `fontcustom/svg` directory and can be compiled by running `fontcustom compile`. Using the font, the TCU 360 logo can be printed using:

```HTML
<span class="icon-custom-logo-parts colorized">
	<i class="icon-custom-logo-riff"></i>
	<i class="icon-custom-logo-tcu"></i>
	<i class="icon-custom-logo-360"></i>
	<i class="icon-custom-logo-alltcu"></i>
</span>
```