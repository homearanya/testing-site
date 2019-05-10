---
title: 'How to install Vuukle 2.0 platform on infinite scroll pages'
date: 2017-08-22T10:16:10.353Z
category: 'Install Vuukle'
tags:
  - javascript
  - installation
  - Infinite scroll
path: '/how-to-embed-vuukle-on-endless-pages/'
shortDescription: 'How to integrate Vuukle with your Infinite Scrolling implementation'
---

Infinite Scrolling provides a seamless experience by automatically loading in new content as the user scroll down the page. Research findings consider it to be a superior implementation in comparison to pagination because it allows the user to view much more content smoothly and without the need for unnecessary and redundant interactions in form of loading in new content. Vuukle provides a solution for integrating with your Infinite Scrolling implementation so that it is possible to load multiple instances of Vuukle comments and Emotes widget on a single page.

## How to integrate Vuukle with your Infinite Scrolling implementation

The following steps would help you integrating Vuukle with your Infinite Scrolling implementation –

**1.** Add the following code in each of your stories. This is used for rendering the Vuukle Comments and Emotes widgets. Make sure to add unique identifiers across stories (in the form of `id` attribute) to the Emotes and comment section.

```html
<div class="vuukle-powerbar-{UNIQUE ARTICLE INDEX}"></div>
<div id="vuukle-emote-{UNIQUE ARTICLE INDEX}"></div>
<div id="vuukle-comments-{UNIQUE ARTICLE INDEX}"></div>
```

**Note:** The Vuukle widgets are rendered in the div by unique index, more about that in Step 3

**2.** Now include the JavaScript code for rendering Vuukle on the page –

```html
<script>
  var VUUKLE_CONFIG = {
    host: 'Your Host',
    apiKey: 'Your API key',
    language: 'en',
    endlessMode: true,
  };
</script>
<script type="text/javascript" src="https://cdn.vuukle.com/platform.js"></script>
```

**3.** Lastly, to render the Vuukle Emotes, Comment widget and powerbar on stories loaded by the Infinite Scrolling implementation, add the following JavaScript code into the articles

```html
<script>
  window.newVuukleWidgets({
      elementsIndex: 'UNIQUE INDEX',
      articleId: Unique article ID,
      img: 'Article image',
      title: 'Article title',
      tags: 'tag1, tag2',
      url: 'Article URL'
  });
</script>
```

**Note**: Unique index in `<script>` should be the same for the corresponding `<div>` element for the widget.

​
