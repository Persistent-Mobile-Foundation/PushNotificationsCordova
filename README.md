PSL Mobile Foundation

# PushNotificationsCordova
A sample application demonstrating use of push notifications in Cordova applications.

Tutorials
https://pmf.persistentproducts.com/tutorials/en/foundation/9.0/notifications/

Usage
From a Command-line, navigate to the project's root folder.
Add a platform using the cordova platform add command.
Register the application by running the command: mfpdev app register.
Add a scope mapping for the element push.mobileclient.
In the Mobile Foundation Operations Console, setup the Mobile Foundation Server with either GCM details or APNS certificate, and add tags.
Run the application by running the cordova run command.
Notes:

iOS: Must be tested on physical devices.
iOS: The BundleID must relate to an AppID configured with push notifications.
iOS: The certificate must be uploaded via the Mobile Foundation Operations Console.
Android: Emulator must have Google APIs to test push notifications.
Android: The GCM Key and SenderId values must be configured via the Mobile Foundation Operations Console.
Supported Levels
PSL Mobile Foundation 9.0

