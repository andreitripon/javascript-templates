
# javascript-templates

Folositor pentru popularea listelor cu informatii preluate prin ajax, repeater field-urilor, etc.

## Documentatie:
```javascript
new templateHtml(template, data, customAttrs);
```
### template
|||
|--|--|
|**Type:**|string|
|**Info:**|selector|
|**Ex.:**|```var template = ".template";``` or ```var template = "#template";```|

### data
|||
|--|--|
|**Type:**|array|
|**Info:**|Informatiile pregatite pentru listare in html|
|**Ex.:**|
```
var data = { 
    'index' : 1,  
    'title' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
    'link' : 'http://www.'  
};
```

### customAttrs
|||
|--|--|
|**Type:**|array|
|**Info:**|attribute suplimentare (https://www.w3schools.com/tags/ref_attributes.asp)|
|**Ex.:**|```var customAttrs = ['src', 'alt', 'href'];```|

## Cum functioneaza:
### Target element:
```html   
<ul id="target"></ul>
```

### Template:
```html 
<script id="template" type="text/html">
    <li>
        <span data-render-content="index"></span>.
        <b data-render-content="title"></b>
        <a href="#" data-render-href="link" data-render-title="title">Read more... </a>
    </li>
</script>
```
### Apelare plugin js
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../dist/js/javascript-templates.min.js"></script>
<script>
    var target = "#target";
    var template = "#template";

    new templateHtml(
        template,
        {
            'index' : 1,
            'title' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'link' : 'http://google.com'
        }
    ).appendTo(target);
</script>
```
### Rezultat
```html
<ul id="target">
	<li>
		<span data-render-content="index">1</span>.
		<b data-render-content="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
		<a href="http://google.com" data-render-href="link" data-render-title="title" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">Read more... </a>
	</li>
</ul>
```
