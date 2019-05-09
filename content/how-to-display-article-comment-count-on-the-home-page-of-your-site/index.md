---
title: 'How to display article comment count on the home page of your site'
date: 2017-05-01T22:12:03.284Z
category: 'FAQ'
tags:
  - how to
  - comment count

path: '/how-to-display-article-comment-count-on-the-home-page-of-your-site/'
shortDescription: 'In this modern day, user engagement is very important and you can improve it if you show comment count on your home page.'
---

In this modern day, user engagement is very important and you can improve it if you show comment count on your home page.

To display comment count for each article on your home page you need to call this API:

https://api.vuukle.com/api/v1/Comments/getCommentCountListByHost?host=**Your site host** &articleIds= **Article ID’s separated by comma\*\*

The comment count will be returned in response for each article that was listed in the request.
