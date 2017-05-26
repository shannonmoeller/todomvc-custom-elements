# Custom Elements [TodoMVC](http://todomvc.com) Example

> Custom Elements is a capability for creating your own custom HTML elements. They can have their own scripted behavior and CSS styling. They are a part of web components, but can also be used by themselves.

> [Custom Elements - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)

## Demo

https://todomvc-custom-elements.now.sh/

## Learning Custom Elements

The [Web Fundamentals website](https://developers.google.com/web/fundamentals/) is a great resource for getting started.

Articles and guides from the community:

* [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)
* [HTML templating with ES6 template strings](http://2ality.com/2015/01/template-strings-html.html)
* [Isn't the DOM slow?](https://github.com/patrick-steele-idem/morphdom#faq)

## Philosophy

The guiding principle in this implementation of the TodoMVC is to use up-and-coming vanilla code in the browser and on the server. Right now, the code is transpiled and uglified, but the ultimate goal is to remove the toolchain and have things Just Work™.

The web platform has come a long way. It is no longer the hostile environment it used to be. Embracing the browser is key to long-term code stability. Frameworks and patterns will come and go, but the browser is here for the foreseeable future.

Dare to reacquaint yourself.

### What about Shadow DOM?

Web components are comprised of many separate APIs. You don't need to use them all every time. The [Shadow DOM](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom) is often a cannon used to kill a mosquito. Scoped CSS is a really great idea when an element is going to be dropped into a hostile environment, but this project is friendlier than that. Additionally, encapsulation can [break the document outline](https://jakearchibald.com/2017/do-we-need-a-new-heading-element/), [complicate accessibility](https://www.youtube.com/watch?v=2UfabypzfGU), and lead to some nasty anti-patterns like [attribute-proxying](https://github.com/PolymerElements/paper-input/blob/master/paper-input.html#L170-L203).

### Why isn't every part of a component in the same directory?

This topic has been beaten to death [elsewhere](https://www.google.com/search?q=react+separation+of+concerns). Suffice it to say that I'm not ready to throw out over a decade of best practices regarding separation of concerns.

> But, separation of concerns is different from separation of technologies.

I agree! But, it just so happens that in the browser we _have_ separate technologies for separate concerns. Yay, browser! HTML defines what things are. CSS defines how things look. JS defines how things work. There may be overlap, but at the end of the day I don't want to fork a whole component or bloat its interface because I need to change a heading font in one particular use case (I wish that was a hypothetical example).

----

© Shannon Moeller <me@shannonmoeller.com> (http://shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)
