/**
 *author:doulu
 *create time:2018-08-11
 *description:https://www.cnblogs.com/wangning528/p/6388464.html
 * HTTP协议通常承载于TCP协议之上，有时也承载于TLS或SSL协议层之上，HTTPS
 * 默认HTTP的端口号为80，HTTPS的端口号为443
 * HTTP协议永远都是客户端发起请求，服务器回送响应。
 * HTTP协议是一个无状态的协议，同一个客户端的这次请求和上次请求是没有对应关系。
 */
/*工作过程：
1）首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。

2）建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和可能的内容。

3）服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。

4）客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。
* */