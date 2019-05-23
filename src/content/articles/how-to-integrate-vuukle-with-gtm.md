---
title: 'How to integrate Vuukle using Google Tag Manager'
date: 2017-05-01T22:12:03.284Z
category: 'Install Vuukle'
tags:
  - how to
  - install
  - GTM

path: '/how-to-integrate-vuukle-with-gtm/'
shortDescription: 'Vuukle plugins integration via Google Tag Manager'
---

## GTM Steps

1. Create the GTM container

2. Go to Variables and create a new user defined data layer variable.

3. Chose the data layer variable name, e.g., "VuukleAPI" and save. (Do this for all other variables needed)

   Default variable list you can check [Here](https://docs.vuukle.com/how-to-embed-vuukle-2.0-via-js/)

   Advanced variable list [Here](https://docs.vuukle.com/general-settings/)

4. Go to Tags and create a new custom HTML tag.

   ![](//img/how-to-integrate-vuukle-with-gtm-img_1.png)

5. In custom HTML tag use default [integration code](https://docs.vuukle.com/how-to-embed-vuukle-2.0-via-js/)

6. Use data layer variable names for apiKey, articleId, and other variables. For example apiKey: "{{VuukleAPI}}"

   ![](//img/how-to-integrate-vuukle-with-gtm-img_3.png)

7. On triggering chose all pages, page view.

   ## Target Pages Steps

1) Add GTM container as instructed by Google changing last "dataLayer" to the name you want (this is important to don't mess with other gtms installed on the page. Here I used "Vuukle_dataLayer".

   ![](//img/how-to-integrate-vuukle-with-gtm-img_2.png)

2) On the line right above GTM <head> container add data layer declaration:

```html
<script>
  Vuukle_dataLayer = [
    {
      VuukleAPI: 'api key', //replace with real api key
      VuukleArticleID: 'article id', //replace with real article id
    },
  ];
</script>
```

You can check [DEMO page here](https://adoring-shirley-6ff2f5.netlify.com/)
