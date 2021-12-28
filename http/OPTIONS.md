# OPTIONS

## What & Why?

HTTP 的 OPTIONS 方法 用于获取目的资源所支持的通信选项。
客户端可以对特定的 URL 使用 OPTIONS 方法，也可以对整站（通过将 URL 设置为“*”）使用该方法。

## How

### 检测服务器支持的请求方法

发一个 OPTIONS 请求到 URL，response 的 `Allow` 字段有所有支持的请求方法

### 预检请求

在 CORS 中，发 OPTIONS 请求，检测请求是否被服务器接受。
其中请求头中：
`Access-Control-Request-Method`, 表示请求方法，
`Access-Control-Request-Headers`, 表示自定义的 Header 字段

在相应头：

`Access-Control-Allow-Origin`
The https://foo.example origin is permitted to request the bar.example/resources/post-here/ URL via the following:

`Access-Control-Allow-Methods`
POST, GET, and OPTIONS are permitted methods for the URL. (This header is similar to the Allow response header, but used only for CORS.)

`Access-Control-Allow-Headers`
Any script inspecting the response is permitted to read the values of the X-PINGOTHER and Content-Type headers.

`Access-Control-Max-Age`
The above permissions may be cached for 86,400 seconds (1 day).
