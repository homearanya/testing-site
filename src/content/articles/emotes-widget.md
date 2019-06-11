---
title: 'Emote widget and everything you need to know about it'
date: 2017-08-23T15:30:37.862Z
category: 'Vuukle Widgets'
tags:
  - widgets
  - emotes
  - wordpress
  - javascript
  - blogger
path: '/emotes-widget/'
shortDescription: 'Simple steps to enable Emotes widget in your article with WordPress, javascript or blogger'
---

![Emotes Widget](emotes-widget-/img/emotes-widget-img-1.jpg)

## HOW TO ENABLE

### Enable Vuukle Emote widget using WordPress plugin:

In your WordPress Admin panel, go into Settings > Vuukle and choose On for Show Emote at the end of each post option

![Enable Emotes in WordPress](/img/emotes-widget-Vuukle-Enable-Emotes-Wordpress.jpg)

### For Blogger:

In your Blogger dashboard, go into Layout tab, edit the Vuukle HTML/JavaScript widget and insert the shortcode `[vuukle-emote]`. Then click the Save button.

![Enable Emotes in Blogger](/img/emotes-widget-Vuukle-Enable-Emotes-Blogger.jpg)

### For JavaScript:

In your website’s HTML, insert the following code where you want the Emotes widget to display

```javascript
<div id="vuukle-emote" />
```

---

## HOW TO CUSTOMIZE

### JS variables:

```html
emotes: { enabled: true, //Enables Emote widget on the page hideRecommendedArticles: false, //Hides Article recommendations on Emote selection size:
undefined, // icons size firstImg: undefined, // Set here the image URL to the desired emoji or image firstName: 'Happy', //Change the name of the
Emote secondImg: undefined, secondName: 'Unmoved', thirdImg: undefined, thirdName: 'Amused', fourthImg: undefined, fourthName: 'Excited', fifthImg:
'https://upload.wikimedia.org/wikipedia/commons/1/10/Linea_5.png', fifthName: 'Angry', sixthImg: undefined, sixthName: 'Sad', disable: [], //You can
disable some emotes (Emotes id's 1,2,3,4,5,6) customText: {}, },
```

### WordPress Settings

Same as the JS variable list but with User friendly settings look:

![wp emote s](emotes-widget-/img/emotes-widget-img-2.jpg)
