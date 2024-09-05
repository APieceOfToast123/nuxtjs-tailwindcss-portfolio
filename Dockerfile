# 使用特定版本的 Node.js
FROM node:16

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . .

# 安装依赖
RUN yarn install --ignore-engines

# 暴露应用运行的端口
EXPOSE 3000

# 启动应用
CMD ["yarn", "dev"]
