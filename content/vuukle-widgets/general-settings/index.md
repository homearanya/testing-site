---
title: 'General settings for Vuukle widgets'
date: 2017-08-23T15:30:37.862Z
category: 'Vuukle Widgets'
tags:
  - general settings
  - javascript
path: '/general-settings/'
shortDescription: 'Simple general settings for Vuukle widgets in javascript'
---

## HOW TO CUSTOMIZE

### JS variables:

Here are general settings that applies to whole Vuukle system:

```html
var VUUKLE_CONFIG = { img: "http://article_image.jpg", // image URL of the article tags: "tag1, tag2, tag3", // tags of the article url: "Your article
URL", // article URL title: "article title", // article title author: "article author", // author of the article link:"https://[url]", //Choose
desired protocol recommendationsWideImages: false, //Changes the type of recommendation cards for emote and comment widgets globalRecommendations:
false, // Enables global recommendations in emotes, comments and newsfeed widget wordpressSync: "true", //Sync with WordPress }; // ⛔️ DON'T EDIT
BELOW THIS LINE (function() { var d = document, s = d.createElement('script'); s.async = true; s.src = 'https://cdn.vuukle.com/platform.js'; (d.head
|| d.body).appendChild(s); })();
```

Those settings should be placed in VUUKLE_CONFIG.
