---
title: 'Comment widget and everything you need to know about it'
date: 2017-08-23T15:30:37.862Z
category: 'Vuukle Widgets'
tags:
  - widgets
  - comments
  - wordpress
  - javascript
  - blogger
path: '/comment-widget/'
shortDescription: 'Simple steps to enable Comment widget in your article with WordPress, javascript or blogger and customize it as you want'
---

![Emotes Widget](/img/comment-widget-img-1.png)

## HOW TO ENABLE

### Enable Vuukle Comment widget using WordPress plugin:

In your WordPress Admin panel, go into Settings > Vuukle and choose On for "Enable comments" in the "Advanced settings"

![Enable Comments in WordPress](/img/comment-widget-img-3.png)

OR

![enable in wp settings](/img/comment-widget-img-4.png)

### For Blogger:

It's auto enabled in blogger, please check [integration article](https://docs.vuukle.com/how-to-install-vuukle-on-a-blogger-blog/)

You can disable comment widget by editing JS parameters in Blogger template.

More information below in **JS variables** section.

### For JavaScript:

In your website�s HTML, insert the following code where you want the Comments widget to display

```javascript
<div id="vuukle-comments" />
```

---

## HOW TO CUSTOMIZE

### JS variables:

```html
var VUUKLE_CONFIG = {
        comments: {
            transliteration: { //Enables transliteration
                language: "en",
                enabledByDefault: true,
            },
            auth: {
                facebook: false,
                google: false,
                twitter: false,
                disqus: true,
                password: true,
                vuukle: true,
            },
            editorOptions: ['image', 'gif', 'bold', 'italic', 'underline', 'url', 'blockquote', 'code', 'list'], // you can enable/disable ability to paste image or gif, choose the style of text
            hideRecommendedArticles: false, //Hides "Talk of the town" section
            hideMoreNews: true, // hide button 'Show more articles'
            hideCommentInputBox: false, // Hides Comment input field ( can be expanded by           pressing on the " add comment button")
            enabled: true, //Enables comment widget
            commentingClosed: false, // Closes commenting (Users can view already posted           comments but can't post new ones)
            maxChars: 3000, //Comment char limit (You can set a limit up to 3000                   characters)
            countToLoad: 10, // number of comments to load initialy on the page
            toxicityLimit: 80, // 1-99 - you can set how strict is the automoderation. 100    - disables the parameter
            spamLimit: 50, //1-99 - you can set how strict is the spam limit. 100  - disables the parameter
            hideCommentInputBoxWithButton: false, //Hides Comment input field (without "add comment button")
            sorting: latest / oldest //sorts by latest or oldest comments on initial loading
            customText: {}, // please check this article for custom texts                           https://docs.vuukle.com/how-to-do-language-customizations-if-using-js-          implementation/
        },

        theme: {
            color: "#10e9ba",
            darkMode: true,
        },
    },
```

### WordPress Settings

Same as the JS variable list but with User friendly settings look:

![wp emote s](/img/comment-widget-img-2.png)
