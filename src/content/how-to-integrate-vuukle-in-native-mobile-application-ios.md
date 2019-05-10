---
title: 'How to integrate Vuukle web version into your native iOS application'
date: 2017-05-01T22:12:03.284Z
category: 'Install Vuukle'
tags:
  - how to
  - install
  - vuukle
  - native
  - ios
path: '/how-to-integrate-vuukle-in-native-mobile-application-ios/'
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

WKWebView is still not available on Interface Builder. However, it is very easy to add them via code.

### Example:

```
import WebKit

override func viewDidLoad() {
    super.viewDidLoad()

    // MARK: - Create WKWebView with configuration

    let configuration = WKWebViewConfiguration()
    let wkWebView = WKWebView(frame: "your frame", configuration: configuration)

    // MARk: - Add WKWebView to main view

    self.view.addSubview(wkWebView)

    let urlName = "yourUrl"

    if let url = URL(string: urlName) {
        wkWebView.load(URLRequest(url: url))
    }

}

```

### Example for log out by clearing cookies:

```
private func clearAllCookies() {
    let cookieJar = HTTPCookieStorage.shared

    for cookie in cookieJar.cookies! {
        cookieJar.deleteCookie(cookie)
    }
}

private func clearCookiesFromSpecificUrl(yourUrl: String) {
    let cookieStorage: HTTPCookieStorage = HTTPCookieStorage.shared
    let cookies = cookieStorage.cookies(for: URL(string: yourUrl)!)
    for cookie in cookies! {
        cookieStorage.deleteCookie(cookie as HTTPCookie)
    }
}

```

### Handling "Report comment":

Note : your main **ViewController** must extends **WKUIDelegate**.

```
// MARK: - Show confirm alert

func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {

    let alertController = UIAlertController(title: nil, message: message, preferredStyle: .alert)

    alertController.addAction(UIAlertAction(title: "Ok", style: .default, handler: { (action) in
        completionHandler(true)
    }))

    alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
        completionHandler(false)
    }))

    self.present(alertController, animated: true, completion: nil)
}

```

### Handling authorization process:

Note : your main **ViewController** must extends **WKUIDelegate**.

```
private var isPopUpAppeared = false

// MARK: - Show authorization tab

func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
    if navigationAction.targetFrame == nil {
        let popup = WKWebView(frame: self.view.frame, configuration: configuration)
        popup.uiDelegate = self
        self.view.addSubview(popup)
        isPopUpAppeared = true
        return popup
    }
    return nil
}

// MARK: - Close authorization tab

func webViewDidClose(_ webView: WKWebView) {
    if isPopUpAppeared {
        webView.removeFromSuperview()
    }
}

```

The full application example you can [check here](https://github.com/lesukk/vuukle_iOS_SDK/tree/web_sdk_iOS)
