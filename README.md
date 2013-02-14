Cufon-Smooth-Hover
==================

I like Cufon, it enables us to put custom smooth and thin fonts (against the Google Web Font API) in webpages. However, a huge drawback in styling (for me) is that Cufon is not capable of smooth hover transitions. It CAN change colors when a link was hovered, but with absolutely no transition.

Cufon Smooth Hover enables a smooth hover color transition on Cufonized elements.

<hr>

Usage
=====

#####1. Include the javascript and stylesheet into your webpage:

```javascript
<link rel="stylesheet" href="jquery.cufon-smooth-hover.css" type="text/css" media="all">
<script type="text/javascript" src="jquery.cufon-smooth-hover.min.js"></script>
```

#####2. Write your Cufon anchor links properly:

```html
<h3>Hello <a href='#'>World</a></h3>
```

#####3. Call `$.cufonHover()` when jQuery is ready:

```javascript
<script type="text/javascript">
jQuery(document).ready(function($){
    Cufon.replace('h3');
    $.cufonHover();
});
</script>
```

#####4. Style your hover color

```css
<style type="text/css">
/* Normal link color */
a {
    color: hotpink;
}
/* Hover link color */
a.csh {
    color: royalblue;
}
</style>
```

<hr>

Parameters
==========

###`speed`

Time in milliseconds for the hover transition. Default is `400` milliseconds.

```javascript
$.cufonHover({speed:400});
```

<hr>

Styling
=======

Specifying the color of the hover cufon is done by css. The hover-cufon is assigned the class `csh`. For example:

```css
/* The hover color
a.csh {
    color: royalblue;
}
```

<hr>

How does it work?
=================

The plugin finds `cufon` elements inside anchor `a` tags and creates a clone of it. This clone is Cufonized and then positioned on top of the original link and is hidden from view. When your mouse hovers on this element, it is animated in and the original one is animated out.

<hr>

Browser support
===============

* Chrome
* Firefox
* Opera
* Safari
* IE 8 (untested)
* IE 9 (untested)
* IE 10 (untested)

<hr>

Some weirdness
==============

There's some weirdness with the process of Cufon Smooth Hover. Since in some cases (e.g. maybe a floating menu with cufon anchor links), the script waits 100 ms before proceeding, or else the positioning of the hover effect will be way off.

Author
======

Created by [@bfintal](https://github.com/bfintal).

Follow me in Twitter [@bfintal](http://twitter.com/bfintal) and [@gambitph](http://twitter.com/gambitph).
