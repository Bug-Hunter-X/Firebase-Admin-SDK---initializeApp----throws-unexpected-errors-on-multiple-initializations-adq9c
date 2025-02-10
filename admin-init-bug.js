The Firebase Admin SDK's `initializeApp()` function throws an unexpected error when initialized multiple times within the same process, even when different configuration objects are provided. This leads to silent failures and makes debugging challenging.  The error messages are not consistently helpful.