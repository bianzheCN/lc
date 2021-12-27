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

JSON，描述 JWT 的元数据，通常是两部分

```javascript
{
    "alg": "HS256",
    "typ": "JWT"
}
```

`typ` 表示 token 类型，也就是 JWT，`alg` 表示签名算法(默认是 HS256)，这部分用 `Base64URL` 转成字符串

### Payload

JSON，用来传递的数据，官方规定 7 个字段供选用

- iss (issuer)：签发人
- exp (expiration time)：过期时间
- sub (subject)：主题
- aud (audience)：受众
- nbf (Not Before)：生效时间
- iat (Issued At)：签发时间
- jti (JWT ID)：编号

当然除了这些之外也可以定义私有字段，这部分也用 `Base64URL` 转成字符串。注意 JWT 默认是不加密的，所以不能把秘密信息放在这个部分

### Signature

对前两部分的签名，防止数据被篡改.

首先，需要指定一个密钥(secret)。这个密钥只有服务器知道。然后按照 `Header` 里面指定的算法(HS256)，按照下面公式产生签名

```javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（`.`）分隔，返回用户。

## Base64URL & Base64

Base64 中的 `+`, `-` 和 `=`，在 URL 里有特殊含义，所以被替换掉：`=` 被省略，`+` 被替换成 `-`，`/` 替换成 `_`

## JWT 使用方式

客户端接收到 JWT 之后，可以放在 Cookie ，也可以放在 localStorage

然后每次和服务器通信，都要带上这个 JWT。对于放在 localStorage 里的 JWT，可以写在 HTTP Header 的 `Authorization` 里，也可以放在 `POST` 请求体中

## 总结

- JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。

- JWT 不加密的情况下，不能将秘密数据写入 JWT。

- JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。

- JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。

- JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。

- 为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。
