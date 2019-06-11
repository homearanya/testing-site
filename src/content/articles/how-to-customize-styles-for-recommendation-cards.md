---
title: 'How to customize styles for recommendation cards'
date: 2018-11-29T15:10:03.284Z
category: 'FAQ'
tags:
  - how to
  - style
  - recommendation
  - cards

path: '/how-to-customize-styles-for-recommendation-cards/'
shortDescription: "We want to create the best experience possible for you. Now you can customize the looking's of the recommendation articles cards. "
---

### How to enable:

Initially we provide a default looking article recommendation cards.

You can customize the looking's of the recommendation articles cards in Emote Widget and in Talk of the Town that is a part of Comment Widget at your choice.

### Example:

```
VUUKLE_CONFIG= {
	theme: {
		cardStyles: {
			color: '#333', //changes the color of the card text.
			borderRadius: 0, //configure the shape of the corners
			boxShadow: '0 0 2px 0 rgba(0,0,0,.15)', //customize shadows
			'.v-card__heading': {
				fontFamily: 'Playfair Display,serif', //choose preferable font
			}
			,
			'&:hover': {
				transform: 'none', //pick an effect on hover
				cursor: 'pointer', //define the cursor
				boxShadow: '0 0 10px 0 rgba(0,0,0,.05)', //customize shadows on hover
				border: 'none', //add or delete borders
				transition: 'box-shadow .2s ease-in-out', //add animation 3D effect
				'.v-card__heading span': {
					borderBottom: '1px solid #27ffbc', //configure bottom border
				},
			},
		},
	},
```

![img_1](/img/how-to-customize-styles-for-recommendation-cards-img_1.jpg)
