sed -i "s@\(archive\|security\).ubuntu.com@mirrors.aliyun.com@g" /etc/apt/sources.list &&
npm set registry http://registry.npmmirror.com/ 
