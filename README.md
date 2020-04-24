# Purpose of this repository

I made this sample application to show a bug on cookies used by https://github.com/react-native-community/react-native-webview on Android. It seems working fine on iOS.

The issue is that the cookies are not the good ones when you start the application after killing it. It depends on which time you wait for killing the application after a cookie changed.

It can be a big issue because a user thinks he logout from the application but is not in the end.

I fill an issue on react-native-webview component: https://github.com/react-native-community/react-native-webview/issues/1345.

# How to reproduce it

1. Launch the application on an Android (device or emulator)
2. Tap on `Set auth_test cookie`, you will see `auth_test=123` at the top of the page
3. Wait 30 seconds (maybe more) to be sure cookie will be stored by the Web View
4. Kill the application in the recent application list
5. Launch again the application. You should see `auth_test=123`. If not, start again from step 2 and wait longer.
6. Tap on `Remove auth_test cookie`
7. When you see `undefined`, kill the application without waiting
8. Launch the application, you will see `auth_test=123` instead of `undefined` 😕
