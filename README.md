# Onlyoffice Server

基于 nest 的 Onlyoffice 示例。

环境 win10 wsl2 ubuntu 18.04




### 快速使用

- 使用根目录docker-compose起镜像

```
docker-compose up -d
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
<img src="https://github.com/yaolinhong/docker-onlyoffice/blob/docker-onlyoffice/onlyoffice-server/static/%E8%A7%A3%E5%86%B3private%20IP%20%E6%97%A0%E6%B3%95%E8%A7%A3%E6%9E%90.png?raw=true"></img>
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
```
- [参考项目](https://github.com/wytxer/demo-onlyoffice.git)

## License

[MIT](/LICENSE)
