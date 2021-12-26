# JWT

## What

跟传统的 session 一样，表示客户端和服务器的会话状态

## 与传统 session 区别

传统的 session 需要在服务器保存用户信息，而 JWT(JSON Web Tokens) 方案是将 session 信息都保存在客户端

## JWT 的原理

客户端发一个请求给服务器，生成一个 JSON 对象返回，之后的每次请求都会带上这个 JSON，然后为了防止用户篡改数据，服务器会在生成这个对象的时候，加上签名

## JWT 数据结构

实际的 JWT 是一个很长的字符串，中间用点隔成 3 部分：

- Header
- Payload
- Signature

### Header

JSON，描述 JWT 的元数据
