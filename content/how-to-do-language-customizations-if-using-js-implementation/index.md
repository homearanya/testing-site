---
title: 'How to do language customizations if using JS implementation?'
date: 2017-05-01T22:12:03.284Z
category: 'FAQ'
tags:
  - how to do
  - language customizations
  - using JS implementation

path: '/how-to-do-language-customizations-if-using-js-implementation/'
shortDescription: 'You can customize any element using JS implementation.'
---

You can customize any element using JS implementation.

## How to do language customizations if using JS implementation

In our widgets you can change different texts to custom. Just replace value to needed and save changes:

To add Custom text please add the code below to Vuukle config:

1. Comments custom text

```html
comments: { customText: { common: { name: 'Name', email: 'Email', writeComment: 'Write a comment', blankName: 'Name cannot be blank', blankEmail:
'Email cannot be blank', blankComment: 'Comment cannot be blank', invalidEmail: 'Invalid email, please try again.', invalidName: 'The name should not
contain numbers, URL, special characters or offensive words', reply: 'Reply', // used for action in comment/reply 'Reply [1]' replies: 'Replies',
report: 'Report Comment', or: 'or', // used in sign in [SOCIAL] or [NAME, EMAIL] to: 'to', // not needed // used in reply item - [reply icon] to Ross
recommend: 'Recommend', // used for recommend item in header of widget recommended: 'Recommended', // used for recommend item in header of widget -
when user recommended article readMore: 'Read more', // comment / reply text truncate to show more showLess: 'show less', // comment / reply text
truncate to show less points: 'points', point: 'point', // added }, profile: { myProfile: 'My Profile', myComments: 'My Comments', signOut: 'Sign
out', removeComment: 'Remove comment', }, toxicity: { long: 'likely to be perceived as "toxic"', // toxicity message for big screens: [percentage] +
[long] -> 90% likely to be perceived as "toxic" messageTooLong: 'Characters limit exceeded. Please try to make your comment shorter or remove some
symbols.', // this might be displayed if user added long text with not common symbols which might be calculated as few symbols in length }, messages:
{ charlimits: 'The moderator has set a character limit up to', alreadyReported: 'You have already reported this comment to moderator.',
commentsClosed: 'Comments are now closed.', alreadySubmitted: 'Your comment has been already submitted for this article.', almostSame: 'Your previous
comment was almost same. Comments should be different.', // Previous comment and new one are not passing difference of 25% flaggedMessage: 'Thanks,
the moderator will be notified', errorSubmitting: 'There was an error while saving your comment, please refresh the page and try again', invalidLogin:
'Invalid login, please login again', spammerComment: 'Your comment is under moderation', moderationMessage: 'Your comment is under moderation and will
be approved by the site moderator. Thank you for your patience.', spamComment: 'Seems like you want to post a spam comment. If you still want to send
it just click on "POST" button again.', // ADDED ownCommentVote: 'You cannot add vote to your own comment', // When user want to vote on his/her own
comment commentAdded: 'Comment is successfully posted', // Comment has been added successfuly noComments: 'Be the first to comment', // Used to show
'Be the first to comment' instead comments if there is no comments noCommentsInSorting: 'No comments here', // Used in sorting category ( not latest )
to tell user that there is no comments flagQuestion: 'Do you want to report this comment?', // Used in confirm window after click on flag icon
toxicityLimit: 'You cannot post comments with toxicity value more than %d', // %d - is number position. i.e. if limit is 70% message willbe: You
cannot post comments with toxicity value more than 70% }, timeAgo: { suffixAgo: 'ago', suffixFromNow: 'from now', seconds: 'less than a minute',
minute: 'about a minute', minutes: '%d minutes', //%d is replaced with the date value hour: 'an hour', hours: '%d hours', day: 'a day', days: '%d
days', month: 'a month', months: '%d months', year: 'year', years: '%d years', }, shareIcons: { google: 'Share using Google Plus', facebook: 'Share
using Facebook', twitter: 'Share using Twitter', linkedin: 'Share using Linkedin', }, login: { google: 'Login using Google', facebook: 'Login using
Facebook', }, commentText: { when1: 'comment', whenX: 'comments', }, sorting: { sortBy: 'Sort by:', latest: 'Latest', mostLiked: 'Best', editorsPick:
"Editor's Pick", mostReplied: 'Most Replied', oldest: 'Oldest', more: 'More', // dropdown for filters: mostReplied, mostDisliked, oldest }, buttons: {
loadMore: 'Load more comments', post: 'Post', showMoreArticles: 'Show more articles', like: 'Like', liked: 'Liked', addComment: 'Add Comment', },
recommendedStories: 'Talk of the town', }, };
```

2. PowerBar custom text

```html
powerbar: { CustomText = { shares: "Shares", //This parameter used to set name of the 'Shares' item (used with shares counter to display shares count)
share: "Share", //This parameter used to set name of the 'Share' item (used with shares counter to display shares count) recommend: "Recommend", ,
//This parameter used to set name of the 'Recommend' tooltip text - action description }, };
```

3. Emote custom text

```
emotes: {
	customText = {
		header: 'What is your reaction?',
		thanks: 'Thank you for voting!',
		suggestionsHeader: 'You might like:',
		previous: 'Previous',
		next: 'next',
		noRecommendations: 'ðŸ˜¢ No recommendations. Try to select another emote',
		feel: 'Feel', // Recommended Articles /* 45% Feel Happy */
		votes: 'votes',
		vote: 'vote',
	},
};
```
