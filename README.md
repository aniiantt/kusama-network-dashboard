# kusama Network Dashboard

## 开发

1. 拉取代码 `git pull git@github.com:aniiantt/kusama-network-dashboard.git`
2. 进入项目目录，安装依赖 `yarn`
3. 运行代码 `yarn start`

## 单元测试

使用 `jest` 测试框架，在各目录的 `__tests__` 子目录下添加 `<filename>.test.ts` 文件。运行 `yarn test` 命令即可进行测试。

## UI 测试

使用 `storybook` 进行 UI 测试和开发。添加 `<filename>.stories.tsx` 文件即可。运行 `yarn storybook` 进行测试。

## 集成测试

使用 travis ci 进行自动化集成测试。

## 部署

使用 now-cli 进行自动部署。实时检测与部署 `master` 分支。

## 功能

- React + typescript 进行开发
- i18n 框架
- 使用 hooks 进行状态管理
- 有性能优化的考量
- 使用 git hooks 规范代码和 git messages
- 使用 rxjs 处理异步
- 使用 intersectionobserver 实现无限滚动
- 响应式设计
