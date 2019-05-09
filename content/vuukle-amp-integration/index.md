---
title: 'How to embed Vuukle on AMP pages'
date: 2017-05-01T22:12:03.284Z
category: 'Install Vuukle'
tags:
  - how to
  - install
  - amp
path: '/vuukle-amp-integration/'
shortDescription: 'Accelerated Mobile Pages (AMP) is a fast-loading, optimized Vuukle experience for Google AMP compatible pages. '
---

## Before you start

- If you haven't done so already, you'll want to familiarize yourself with Google's [What Is AMP?](https://www.ampproject.org/docs/get_started/about-amp.html) and [Create Your First AMP Page](https://www.ampproject.org/docs/get_started/create.html).
- Make sure you've [registered](https://vuukle.com/admin/sign-up.html) your site with Vuukle. Read the [Quickstart Guide](https://docs.vuukle.com/how-to-embed-vuukle-2.0-via-js) for more information.

## How to install

1. Add the following code to the page

```html
<amp-iframe
  width="600"
  height="350"
  layout="responsive"
  sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
  resizable
  frameborder="0"
  src="ARTICLE-URL-HERE"
>
  <div
    overflow
    tabindex="0"
    role="button"
    aria-label="Show comments"
    style="display: block;text-align: center;background: #1f87e5;color: #fff;border-radius: 4px;"
  >
    Show comments
  </div>
</amp-iframe>
```

2. Populate src url with parameters:

   url - Article URL

   host - Site Host

   id - article id

   apiKey - your api key

   title - article title

3. Add AD code to the page

```html
<amp-ad width="300" height="250" type="doubleclick" data-slot="/213794966/amp/{host}">
  //host should not contain http, https or www.
  <div placeholder></div>
  <div fallback></div>
</amp-ad>
```

4. Refer to the `amp-iframe` [documentation](https://www.ampproject.org/docs/reference/extended/amp-iframe.html) and `amp-ad` [documentation](https://www.ampproject.org/docs/reference/components/amp-ad) add the required `amp-iframe` and `amp-ad` script to your document's `<head>`. :

```html
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
```

---

You can check working samples [here](https://amp-example.netlify.com)

​
