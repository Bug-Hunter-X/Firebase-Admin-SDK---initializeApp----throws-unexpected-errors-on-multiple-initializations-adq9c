The problem stems from attempting to initialize the Firebase Admin SDK multiple times. The solution involves checking if the SDK has already been initialized before attempting initialization again. This can be accomplished using a simple flag:

```javascript
let isInitialized = false;

function initializeFirebase(config) {
  if (!isInitialized) {
    try {
      admin.initializeApp(config);
      isInitialized = true;
      console.log('Firebase Admin SDK initialized successfully.');
    } catch (error) {
      console.error('Error initializing Firebase Admin SDK:', error);
    }
  } else {
    console.log('Firebase Admin SDK already initialized. Skipping re-initialization.');
  }
}

// Example usage with different configurations
initializeFirebase(config1);
initializeFirebase(config2); 
```
This approach ensures that only the first attempt to initialize the SDK will actually execute the `initializeApp` function.