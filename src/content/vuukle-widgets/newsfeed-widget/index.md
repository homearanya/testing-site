---
title: 'Newsfeed widget and everything you need to know about it'
date: 2017-08-23T15:30:37.862Z
category: 'Vuukle Widgets'
tags:
  - widgets
  - newsfeed
  - wordpress
  - javascript
path: '/newsfeed-widget/'
shortDescription: 'Simple steps to enable Newsfeed widget in your article with WordPress or javascript'
---

![Newsfeed Widget](img-1.png)

## HOW TO ENABLE

### Enable Vuukle Newsfeed widget using WordPress plugin:

In your WordPress Admin panel, go to Settings > Vuukle and choose On for Show Newsfeed

![Enable Newsfeed in WordPress](Vuukle-Enable-Newsfeed-Wordpress.png)

### For JavaScript:

In your website’s HTML, insert the following code where you want the Newsfeed widget to display

```javascript
<div id="vuukle-newsfeed" />
```

---

## HOW TO CUSTOMIZE

### JS variables:

```html
var VUUKLE_CONFIG = { comments: { hideRecommendedArticles:false, //Hide "Newsfeed" widget and "Talk of the town" section; },
recommendationsWideImages:false, //Changes the type of recommendation cards for emote, newsfeed and comment widgets; link:"https://[url]", //Choose
protocol for articles url; globalRecommendations:false, // Enables global recommendations in emotes, comments and newsfeed widget; },
```
