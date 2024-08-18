/*Both localStorage and sessionStorage are part of the Web Storage API, which provides a way to store key-value pairs in the browser. These storage mechanisms are similar to cookies but offer more straightforward and larger storage capabilities. They differ primarily in terms of lifespan and scope.

1.localStorage
Purpose:
localStorage is designed for persistent storage of data that should remain available even after the user closes the browser or navigates away from the page. Data stored in localStorage has no expiration time and remains available until explicitly deleted by the user or through code.

Usage:

Typically used for storing data that should persist across sessions, such as user preferences, themes, or saved form data.*/
//Store data
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('theme', 'dark');
//Retrieve data
let username = localStorage.getItem('username');
console.log(username); // Output: 'JohnDoe'
//Remove a specific item
localStorage.removeItem('theme');
//Clear all items
localStorage.clear();

/* sessionStorage
Purpose:
sessionStorage is designed for temporary storage that is only available for the duration of the page session. The data is stored per window or tab, and once the window or tab is closed, the data is lost.

Usage:
Typically used for storing data that should only persist for the duration of the page session, such as temporary form data, session-specific state, or transient UI preferences.*/
//Example
// Store data
sessionStorage.setItem('sessionID', '123456');
sessionStorage.setItem('temporaryData', 'This is temporary');
// Retrieve data
let sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID); // Output: '123456'
// Remove a specific item
sessionStorage.removeItem('temporaryData');
// Clear all items
sessionStorage.clear();
/*Differences Between localStorage and sessionStorage
Persistence:
localStorage: Data persists indefinitely until explicitly deleted.
sessionStorage: Data persists only for the duration of the page session.

Scope:
localStorage: Shared across all tabs and windows with the same origin.
sessionStorage: Limited to the specific tab or window where it was created.

Use Cases:
localStorage: Storing user settings, theme preferences, user tokens for authentication, etc.
sessionStorage: Storing temporary data like form inputs, UI states during a session, or information that should not persist beyond the current session. */
