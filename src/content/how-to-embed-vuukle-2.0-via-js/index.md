---
title: 'How to install Vuukle 2.0 platform using JavaScript?'
date: 2017-08-22T10:16:10.353Z
category: 'Install Vuukle'
tags:
  - javascript
  - installation
  - vuukle 2.0
path: '/how-to-embed-vuukle-2.0-via-js/'
shortDescription: 'Vuukle 2.0 widget installation tutorial for JavaScript language.'
---

To embed Vuukle platform using JavaScript, [log into the Vuukle dashboard](https://vuukle.com/admin/index.html) and open the Integration drop-down present in the top menu. Then, proceed to click on the API Docs link

![](img_2.png)

Get your API key

![Get API KEY step](img_1.png)

Copy this script to your page:

```html
<script>
  var VUUKLE_CONFIG = {
    apiKey: 'Place Your API Key Here',
    articleId: 'Generate Unique id for your article',
  };
  // ⛔️ DON'T EDIT BELOW THIS LINE
  (function() {
    var d = document,
      s = d.createElement('script');
    s.src = 'https://cdn.vuukle.com/platform.js';
    (d.head || d.body).appendChild(s);
  })();
</script>
```

Change values in **apiKey** and **articleId** to the valid ones.

Place the code in your website’s HTML where you would like the comment system to appear. The shortcodes for displaying the various Vuukle plugins are as follows –

`<div id='vuukle-comments'></div>` – Displays the main Vuukle comment system

`<div id='vuukle-emote'></div>` – Displays the Emotes widget for the page

`<div id='vuukle-newsfeed'></div>` – Displays the Newsfeed widget for the page

`<div class='vuukle-powerbar'></div>` – Displays the social media share buttons. Can be included multiple times in a page.

---

#### Placeholder Values

- **apiKey** {string}: Publisher API key
- **articleId** {number | string}: Article ID

  ​
