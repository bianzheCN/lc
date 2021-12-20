# Method & Status Code

## Method

## Status Code

### 405 Method Not Allowed

Case: I used `GET` which not allowed, and swap it by `POST` made it worked.

### 401 Unauthorized

Case: haven't append the `x-csrf-token` token, which is required in our backend, resulting in an error in my request.
