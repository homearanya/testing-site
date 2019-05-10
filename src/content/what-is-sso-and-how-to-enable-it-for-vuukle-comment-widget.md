---
title: 'What is SSO and how to enable it for Vuukle comment widget'
date: 2017-05-01T22:12:03.284Z
category: 'FAQ'
tags:
  - how to
  - SSO
path: '/what-is-sso-and-how-to-enable-it-for-vuukle-comment-widget/'
shortDescription: 'Single sign-on (SSO) is an authentication process that allows a user to access multiple applications with one set of login credentials.'
---

![sso img](/img/what-is-sso-and-how-to-enable-it-for-vuukle-comment-widget-img_2.png)

**Single sign-on** (**SSO**) is an authentication process that allows a user to access multiple applications with one set of login credentials.

If your site has authorization you can use SSO with Vuukle comment widget.

Firstly email and **secret** apiKey are being hashed by SHA512 encryption:

```html
mous@email.com-07115720-6848-11e5-9bc9-002590f371ee
```

This gives us a signature:

```html
0C9C314E36B781786DA65F2CF7E30C7352655273786831314A9394A29277CEB59DB3005203A42F2DEA8A15A44630243E5B4F10C19AB0C7D703AC29D6C78A0180
```

General info and the signature are being encrypted by base64 (**using UTF8 encoding**):

```html
{ "username": "Sample User Name", "email": "mous@email.com", "public_key": "ead41e46-a5fd-11e2-bc97-bc764e0492cc", "signature":
"0C9C314E36B781786DA65F2CF7E30C7352655273786831314A9394A29277CEB59DB3005203A42F2DEA8A15A44630243E5B4F10C19AB0C7D703AC29D6C78A0180" }
```

So the SSO token is generated:

```html
ewogICAgInVzZXJuYW1lIjogIlNhbXBsZSBVc2VyIE5hbWUiLAogICAgImVtYWlsIjogIm1vdXNAZW1haWwuY29tIiwKICAgICJwdWJsaWNfa2V5IjogImVhZDQxZTQ2LWE1ZmQtMTFlMi1iYzk3LWJjNzY0ZTA0OTJjYyIsCiAgICAic2lnbmF0dXJlIjogIjBDOUMzMTRFMzZCNzgxNzg2REE2NUYyQ0Y3RTMwQzczNTI2NTUyNzM3ODY4MzEzMTRBOTM5NEEyOTI3N0NFQjU5REIzMDA1MjAzQTQyRjJERUE4QTE1QTQ0NjMwMjQzRTVCNEYxMEMxOUFCMEM3RDcwM0FDMjlENkM3OEEwMTgwIgp9
```

And finally the token can be used to gain momentum and fully secured access to your account.

```html
(function() { var d = document, s = d.createElement('script'); s.onload = function()
{vuukleLogin("ewogICAgInVzZXJuYW1lIjogIlNhbXBsZSBVc2VyIE5hbWUiLAogICAgImVtYWlsIjogIm1vdXNAZW1haWwuY29tIiwKICAgICJwdWJsaWNfa2V5IjogImVhZDQxZTQ2LWE1ZmQtMTFlMi1iYzk3LWJjNzY0ZTA0OTJjYyIsCiAgICAic2lnbmF0dXJlIjogIjBDOUMzMTRFMzZCNzgxNzg2REE2NUYyQ0Y3RTMwQzczNTI2NTUyNzM3ODY4MzEzMTRBOTM5NEEyOTI3N0NFQjU5REIzMDA1MjAzQTQyRjJERUE4QTE1QTQ0NjMwMjQzRTVCNEYxMEMxOUFCMEM3RDcwM0FDMjlENkM3OEEwMTgwIgp9")};
s.src = 'https://cdn.vuukle.com/platform.js'; (d.head || d.body).appendChild(s); })();
```

**How to disable Vuukle and social auth**

```html
<script>
   var VUUKLE_CONFIG = {
   	apiKey: "Place Your API Key Here",
   	articleId: "Generate Unique id for your article",
   comments: {
  	auth: {
  		facebook: false,
  		google: false,
  		twitter: false,
  		disqus: false,
  		password: false,
  		vuukle: false,
  		sso: {
  			onClick: login_from_vuukle // some function to invoke for sso modal
  		}
  	}
   };
   // ⛔️ DON'T EDIT BELOW THIS LINE
   (function() {
  	 var d = document,
   		s = d.createElement('script');
  	s.onload = function() {vuukleLogin("ewogICAgInVzZXJuYW1lIjogIlNhbXBsZSBVc2VyIE5hbWUiLAogICAgImVtYWlsIjogIm1vdXNAZW1haWwuY29tIiwKICAgICJwdWJsaWNfa2V5IjogImVhZDQxZTQ2LWE1ZmQtMTFlMi1iYzk3LWJjNzY0ZTA0OTJjYyIsCiAgICAic2lnbmF0dXJlIjogIjBDOUMzMTRFMzZCNzgxNzg2REE2NUYyQ0Y3RTMwQzczNTI2NTUyNzM3ODY4MzEzMTRBOTM5NEEyOTI3N0NFQjU5REIzMDA1MjAzQTQyRjJERUE4QTE1QTQ0NjMwMjQzRTVCNEYxMEMxOUFCMEM3RDcwM0FDMjlENkM3OEEwMTgwIgp9")};
   s.src = 'https://cdn.vuukle.com/platform.js';
  (d.head || d.body).appendChild(s);
   })();
</script>
```

This will help you to create smooth UX on your site.
