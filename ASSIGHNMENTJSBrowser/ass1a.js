/*The XMLHttpRequest (XHR) object is a built-in JavaScript object that allows developers to send HTTP requests to a server and load the response data back into the JavaScript code. It's a fundamental component of Asynchronous JavaScript and XML (AJAX) technology.

The XMLHttpRequest object provides a way to:
Send HTTP requests (GET, POST, PUT, DELETE, etc.) to a server
Receive response data from the server
Manipulate the response data in JavaScript
How is XMLHttpRequest used in AJAX?
In AJAX, the XMLHttpRequest object is used to send asynchronous requests to a server, allowing the client-side JavaScript code to communicate with the server without requiring a full page reload. Here's a high-level overview of the process:
Create an XMLHttpRequest object: The JavaScript code creates an instance of the XMLHttpRequest object using the new keyword.
Open a connection: The open() method is called to specify the request method (e.g., GET, POST), the URL of the server-side resource, and whether the request should be sent asynchronously.
Send the request: The send() method is called to send the request to the server. If the request is asynchronous, the JavaScript code continues executing without waiting for the response.
Handle the response: When the response is received from the server, the onreadystatechange event is triggered. The JavaScript code checks the readyState property to determine if the response is complete and the status property to check the HTTP status code.
Process the response data: If the response is successful, the JavaScript code can access the response data using the responseText or responseXML properties.*/
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://example.com/data', true); // true indicates asynchronous request

xhr.onload = function() {
  if (xhr.status === 200) {
    const responseData = xhr.responseText;
    console.log(responseData);
    // Process the response data
  } else {
    console.error('Error:', xhr.statusText);
  }
};

xhr.send();