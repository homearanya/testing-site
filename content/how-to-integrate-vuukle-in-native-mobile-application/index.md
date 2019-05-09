---
title: 'How to integrate Vuukle web version into your native Android application'
date: 2017-05-01T22:12:03.284Z
category: 'Install Vuukle'
tags:
  - how to
  - install
  - vuukle
  - native
  - android
path: '/how-to-integrate-vuukle-in-native-mobile-application/'
shortDescription: "We want to create the best experience possible for you. You have no need to update SDK anymore, since it's in the web view we will handle the heavy lifting for you. You will get the latest updates and new features as soon as they are uploaded on our servers"
---

We want to create the best experience possible for you. You have no need to update SDK anymore, since it's in the web view we will handle the heavy lifting for you. You will get the latest updates and new features as soon as they are uploaded on our servers.

You will be working with our **iframe URL's**

Comment widget iframe looks like this:

https://cdn.vuukle.com/amp.html?apiKey=c7368a34-dac3-4f39-9b7c-b8ac2a2da575&host=smalltester.000webhostapp.com&id=381&img=https://smalltester.000webhostapp.com/wp-content/uploads/2017/10/wallhaven-303371-825x510.jpg&title=Newpost&url=https://smalltester.000webhostapp.com/2017/12/new-post-22#1

**Required parameters (for comment widget iframe):**

1. apiKey - Your API key (https://docs.vuukle.com/how-to-embed-vuukle-2.0-via-js/)
2. host - your site host (Exclude http:// or www.)
3. id -unique article ID
4. img - article image
5. title - article title
6. url - article URL (include http:// or www.)

Emote widget iframe looks like this:

https://cdn.vuukle.com/widgets/emotes.html?apiKey=c7368a34-dac3-4f39-9b7c-b8ac2a2da575&host=smalltester.000webhostapp.com&articleId=381&img=https://smalltester.000webhostapp.com/wp-content/uploads/2017/10/wallhaven-303371-825x510.jpg&title=New%20post%2022&url=https://smalltester.000webhostapp.com/2017/12/new-post-22#1

**Required parameters (for emote widget iframe):**

1. apiKey - Your API key (https://docs.vuukle.com/how-to-embed-vuukle-2.0-via-js/)
2. host - your site host (Exclude http:// or www.)
3. articleId -unique article ID
4. img - article image
5. title - article title
6. url - article URL (include http:// or www.)

If you have any additional options to include, please contact support@vuukle.com

**Integration Steps**

1. **Create xml resourse:**

```java
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:id="@+id/container"
    android:layout_height="match_parent"
    tools:context="com.vuukle.webview.MainActivity">

    <WebView
        android:id="@+id/activity_main_webview_comments"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:layout_editor_absoluteX="8dp"
        tools:layout_editor_absoluteY="8dp" />

</FrameLayout>
```

**Add permission to AndroidManifest.xml:**

```java
<uses-permission android:name="android.permission.INTERNET" />
```

**Getting events from javascript page.**

You can listen to events from javascript via console logs. WebChromeClient provides a callback onConsoleMessage.

_Example_:

//mWebViewComments - your WebView

mWebViewComments.setWebChromeClient(new WebChromeClient() { @Override public boolean onConsoleMessage(ConsoleMessage consoleMessage) {

```java
//mWebViewComments - your WebView
mWebViewComments.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {

      //message
                Log.d("consolejs", consoleMessage.message());
                return super.onConsoleMessage(consoleMessage);
            }
 	    @Override
            public boolean onCreateWindow(WebView view, boolean isDialog, boolean isUserGesture, Message resultMsg) {
                popup = new WebView(MainActivity.this);
                popup.getSettings().setJavaScriptEnabled(true);
                popup.getSettings().setPluginState(WebSettings.PluginState.ON);
                popup.getSettings().setSupportMultipleWindows(true);
                popup.setLayoutParams(view.getLayoutParams());
                popup.getSettings().setUserAgentString(popup.getSettings().getUserAgentString().replace("; wv", ""));


                popup.setWebViewClient(new WebViewClient() {
                    @Override
                    public boolean shouldOverrideUrlLoading(WebView view, String url) {
                        if (url.contains("auth")) {
                            popup.loadUrl(url);
                        } else {
                            mWebViewComments.loadUrl(url);
                            mContainer.removeView(popup);
                            return false;
                        }
                        return true;
                    }
                });
                popup.setWebChromeClient(new WebChromeClient() {
                    @Override
                    public void onCloseWindow(WebView window) {
                        mContainer.removeView(window);
                    }
                });
                mContainer.addView(popup);

                WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
                transport.setWebView(popup);
                resultMsg.sendToTarget();

                return true;
            }
        });
```

**Passing data to javascript page.**

WebView lets you ability to inject your javascript code into page. We can use it for passing data.

_Example_:

```java
//signInUser(name, email) - function implemented in javascript code on page
mWebViewComments.loadUrl("javascript:signInUser("name", "email")");
```

**Listening on url loading.**

We also can override url loading with WebViewClient.

_Example_:

```java
mWebViewComments.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, final String url) {

     //Clicked url
                Log.d(TAG, "Clicked url: " + url);
  		view.loadUrl(url);
                //if u use super() it will load url
                return true;
            }
        });

```

**Handling social login windows.**

You need to add the property `.setSupportMultipleWindows(true)`to webview setting in order to enable the support of multiple windows.

---

Implements the possibility to go back on the previous page.

**Handling onBackPressed**

```@Override
 public void onBackPressed() {
     if (popup != null && popup.getParent() != null) {
         mContainer.removeView(popup);
         popup = null;
         mWebViewComments.reload();
     } else {
         mWebViewComments.goBack();
     }
 }
```

---

The full application example you can [check here](https://github.com/vuukle/webSDK) or download a demo APK [Here](https://www.dropbox.com/s/81ljpjzb0zrgong/Vuukle.apk?dl=0)
