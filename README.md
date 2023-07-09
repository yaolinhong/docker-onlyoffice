# Onlyoffice Server

基于 nest 的 Onlyoffice 示例。

环境 win10 wsl2 ubuntu 18.04

### 快速使用

- docker镜像跑document server

```

docker run -i -t -d -p 8071:80 -p 443:443 -v /app/onlyoffice/Data:/var/www/onlyoffice/Data -v /app/onlyoffice/logs:/var/log/onlyoffice -e JWT_ENABLED=true -e JWT_SECRET=123456  --restart=always onlyoffice/documentserver-de

```

- 项目安装依赖

```bash
# 安装依赖
pnpm install

# 开发
pnpm run dev

# 打包
pnpm run build
```
- dorker容器内 private IP 无法解析的问题
<img src="./static/解决private IP 无法解析.png"></img>
```
<!-- 进入容器中修改 -->
<!-- docker exec -it ce76c1f824dc bash -->

<!-- /etc/onlyoffice/documentserver/local.json -->
{
  "services": {
    "CoAuthoring": {
      "request-filtering-agent": {
        "allowPrivateIPAddress": true,
        "allowMetaIPAddress": true
      }
<!-- nano ctrl+o ctrl+x保存 -->
<!-- exit docker restart  -->
<!-- https://github.com/ONLYOFFICE/DocumentServer/issues/2268#issuecomment-1591159946 -->

## License

[参考项目](https://github.com/wytxer/demo-onlyoffice.git)
[MIT](/LICENSE)
