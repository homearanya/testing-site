---
title: '[DEPRECATED] How to integrate Vuukle SDK into your Android app'
date: 2017-05-01T22:12:03.284Z
category: 'Install Vuukle'
tags:
  - how to
  - install
  - android
  - sdk
path: '/how-to-integrate-vuukle-sdk-into-your-android-app/'
shortDescription: 'We offer the powerful SDK ( software development kit) that allows to setup advanced commenting and user engagement system into any Android application.'
---

​ **[DEPRECATED]**

​ Support will be not provided

We offer the powerful SDK ( software development kit) that allows to setup advanced commenting and user engagement system into any Android application.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-E4fPdv-qT8" frameborder="0" allowfullscreen></iframe>

To setup Vuukle into your project just follow these steps:

1. Set up project build.gradle

1.1) add classpath for retro
`lambdabuildscript {dependencies {classpath 'me.tatarka:gradle-retrolambda:3.3.0-beta3'}}`

1.2) `add jitpackallprojects {repositories {jcenter()maven { url 'https://jitpack.io' }}}`

![img 1](./img_1.png)2) Set up app build.gradle

1.1) add plugin
`apply plugin: 'me.tatarka.retrolambda'`
1.2) add library to project
dependencies `{compile 'com.github.vuukle:vuukle_android_sdk:v1.0.1'}`

1.3)`set dataBinding trueandroid {...dataBinding {enabled true}}`

1.4) `set minSdkVersion: 16android {defaultConfig {...minSdkVersion 16}`

![img 2](./img_2.png)

3. Use java 1.8

4. create Layout in .xml file for Vuukle comments

5. create method in which init our library
   `private void initVuukleLibrary() {`

`new VuukleApiBuilder(this).setVuukleApiKey("6eaaf29c-d074-47bd-b462-92aaacdfcb5b").setVuukleHost("vuukle.com").setVuukleSecretKey("07115720-6848-11e5-9bc9-002590f371ee").build(); //- this method you need to init only ones.`
`new VuukleCommentsBuilder().setVuukleArticleId("00059").setTimeZone("Europe/Kiev").setArticleUrl("http://smalltester.esy.es/2017/01/20/article-6/").setVuukleTags("articleTag1, articleTag").setVuukleTitle("The title of the article").setPaginationToCount(2).setContext(this).setTopArticle(true).setFragmentId(R.id.container_for_vuukle_library).build(); //- this method you need to set for every article}`

– setVuukleHost(HOST) – Set host for API. Host – this is the domain of the publisher’s site(e.g. indianexpress.com, thehindu.com etc.).
For example: You are the owner of indianexpress.com and have own app where want’s to setup this library,
so when library installed on your app, You should paste domain for ‘host’ property without http:// or https:// or www.

– setVuukleSecretKey(SECRET_KEY) – To get SECRET KEY / API KEY you need :

1. Sign in to dashboard through vuukle.com
2. Navigate to domain from home page of dashboard (first page after signing in)
3. Choose in menu Integration, then API Docs from the dropdown
4. Then you will be able to see API and SECRET keys
   —- or —-
5. Sign in to dashboard though vuukle.com
6. after signing in, in the header you can find ‘Integration’ click -> choose API docs in the drop-down.

– setVuukleApiKey(API_KEY) – same as for SECRET KEY

– setVuukleArticleId(ARTICLE_ID) – every article have unique Article ID
– setTimeZone(TIME_ZONE) – set your timezone. https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
– setVuukleUrl(URL) – URL for your article (you will be able to share this link to facebook or to twitter)
– setVuukleTagsTags(TAGS) Tags – You need to paste tags separated by comma for each article(like you have on website/domain),
– setTopArticle(true) it will show top articles below the comments
– setVuukleTitle(TITLE) same for TITLE – the title of the article on which library is now.
– setPaginationToCount(paginationToCount) – this field in not required. You can set how many comments will be downloaded per one request. By default 10.
– setContext(this) – put context;
– setFragmentId(R.id.container) – Set fragment id from your .xml in which you want to put all comments

![img](./img_3.png)

Additional features:

6. VuukleColorEditor is a static class for changing color UI element in the library for example:

`VuukleColorEditor.setReportButtonColor(Color.parseColor("#FFFFFF")); // set color for report buttonVuukleColorEditor.setLoginButtonBackgroundColor(Color.parseColor("#5F6065")); //set background color for login buttonVuukleColorEditor.setUserNameColor(Color.parseColor("#FFFFFF")); // set user name color`
