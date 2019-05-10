---
title: 'How to customize Emotes in Vuukle widget'
date: 2017-05-01T22:12:03.284Z
category: 'FAQ'
tags:
  - how to
  - customize
  - emotes
path: '/how-to-customize-emotes-in-vuukle-widget/'
shortDescription: 'You can easily change Emotes look and feel by using your own images'
---

![Emote screen](emote_img.png)

To set your own set of image into Emotes widget add following code inside `VUUKLE_CONFIG`

```
  emotes: {
    firstImg: 'place image URL here',
    secondImg: 'place image URL here',
    thirdImg: 'place image URL here',
    fourthImg: 'place image URL here',
    fifthImg: 'place image URL here',
    sixthImg: 'place image URL here',
  },
```

(just replace "place image URL here" to links to your images)

But note this, the heavier images you set – higher the load time 😉

You can set custom names for the emotes.

```
   emotes: {
    firstName: 'place desired name here',
    secondName: 'place desired name here',
    thirdName: 'place desired name here',
    fourthName: 'place desired name here',
    fifthName: 'place desired name here',
    sixthName: 'place desired name here',
   }
```

You can also set a custom text for any of the present fields.

```javascript
emotes: {
    customText:{
       comment: "Comment",
       comments: "Comments",
       header: "What is your reaction?",
       noRecommendations: "😢 No recommendations. Try to select another emote",
       suggestionsHeader: "You might like:",
       thanks: "thank you for voting",
       vote: "vote",
       votes: "votes"
    }


}
```
