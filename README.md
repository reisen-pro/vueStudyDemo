<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="80" height="80" alt="Vue.js" />
</p>

<h1 align="center">vueStudyDemo</h1>

<p align="center">
  <b>Vue 2.x 全家桶系统学习项目</b> — 从基础语法到商城实战
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-2.6.11-4FC08D?logo=vue.js&style=flat-square" />
  <img src="https://img.shields.io/badge/Vue_Router-3.2.0-4FC08D?logo=vue.js&style=flat-square" />
  <img src="https://img.shields.io/badge/Vuex-3.5.1-4FC08D?logo=vue.js&style=flat-square" />
  <img src="https://img.shields.io/badge/Axios-0.19.2-5A29E4?logo=axios&style=flat-square" />
  <img src="https://img.shields.io/badge/Better_Scroll-1.15.2-FF6B6B?style=flat-square" />
  <img src="https://img.shields.io/badge/Webpack-3.6.0-8DD6F9?logo=webpack&style=flat-square" />
</p>

---

## 📖 项目简介

本项目是一个 **Vue 2.x 全家桶** 系统学习仓库，包含 **7 个独立子项目**，覆盖了从 Vue 基础语法到企业级商城项目的完整学习路径。

遵循 **"基础 → 工具 → 生态 → 实战"** 的学习闭环，最终通过一个完整的多页面商城项目把所有知识点串联起来。

> 📅 学习时间：2020年6月-8月（约 64 天） | 🎯 适用人群：Vue 初学者 / 查漏补缺

---

## 🗂️ 项目结构

```
vueStudyDemo/
├── vue-base/                  # 子项目1：Vue 基础语法（60+ HTML 文件）
├── vue-webpack/               # 子项目2：Webpack 模块打包
├── vue-cli/                   # 子项目3：脚手架 + 路由 + Vuex + Axios
├── promise/                   # 子项目4：Promise 异步编程
├── tabbar/                    # 子项目5：TabBar 组件封装专项
├── demo-common/               # 子项目6：通用演示项目
├── mall/                      # 子项目7：⭐ 商城实战系统（核心）
├── 笔记/
│   ├── 笔记.md                # 技术笔记
│   ├── 进度记录.md            # 每日学习进度
│   ├── 简单回顾.md            # 知识点提纲
│   └── Webpack.md             # Webpack vs Gulp 对比
└── README.md
```

---

## 🎯 学习路线图

```
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
│  基础语法    │ ──► │  构建工具     │ ──► │  生态框架         │
│  vue-base   │     │  vue-webpack  │     │  脚手架/路由/Vuex │
│  promise    │     │  vue-cli      │     │  Axios           │
└─────────────┘     └──────────────┘     └────────┬─────────┘
                                                   │
                                                   ▼
               ┌──────────────┐      ┌──────────────────────┐
               │  组件封装     │ ──►  │  商城实战              │
               │  tabbar      │      │  mall (多页面 + 复用)   │
               └──────────────┘      └──────────────────────┘
```

---

## 📦 子项目详解

### 1. vue-base — Vue 基础语法 ⭐

通过 **60+ 个独立 HTML 文件** 覆盖 Vue 2.x 所有核心概念，零构建工具，浏览器直接打开即用。

| 章节 | 内容 | 文件数 |
|------|------|:---:|
| 插值语法 | Mustache `{{}}`、v-once、v-html、v-text、v-pre、v-cloak | 7 |
| 动态绑定 | v-bind: class 对象/数组、style 对象/数组 | 5 |
| 计算属性 | computed 基本/复杂、setter-getter | 3 |
| 事件监听 | v-on 基本使用、参数传递、修饰符（stop/prevent/enter/once） | 3 |
| 条件判断 | v-if、v-else、v-show、登录切换案例 | 4 |
| 循环遍历 | v-for 数组/对象、:key 重要性、响应式方法 | 4 |
| v-model | 原理、radio/checkbox/select 绑定、修饰符（lazy/number/trim） | 6 |
| 组件化开发 | 全局/局部组件、props/$emit、$children/$refs/$parent/$root | 14 |
| 组件化高级 | slot/具名插槽/编译作用域/作用域插槽 | 4 |
| 模块化 | CommonJS vs ES6 Module | 2 |
| 综合练习 | 购物车案例 | 3 |

---

### 2. vue-webpack — 构建工具

从零配置 Webpack，理解 Vue CLI 底层原理。

- Webpack 起步 → 配置文件 → loader（css/less/url/babel） → 配置 Vue `.vue` 单文件 → plugin

---

### 3. vue-cli — 脚手架生态

| 子目录 | 主题 | 核心内容 |
|--------|------|---------|
| `01-runtimecompiler/` | runtime-compiler 模式 | 对比 runtime-only |
| `02-runtimeonly/` | runtime-only 模式 | render 函数原理 |
| `03-testvuecli3/` | Vue CLI 3 | 脚手架项目结构 |
| `04-箭头函数/` | ES6 箭头函数 | this 指向解析 |
| `05-learnvuerouter/` | **Vue Router** ⭐ | 路由配置 / 嵌套路由 / 动态路由 / 懒加载 / 导航守卫 |
| `06-learnvuex/` | **Vuex** ⭐ | State / Mutations / Actions / Getters / Modules 完整拆分 |
| `07-learnaxios/` | **Axios** ⭐ | 实例创建 / 拦截器 / 多封装方式对比 |
| `08-learnBS/` | Better-Scroll | 滚动组件基础 |

---

### 4. promise — 异步编程

Promise 基本使用 → 链式调用 `.then().catch()` → `Promise.all()` 并发处理

---

### 5. tabbar — 组件封装专项

独立练习 TabBar 组件的完整封装流程：

- `TabBar.vue` — Flex 容器（fixed bottom + box-shadow）
- `TabBarItem.vue` — 导航项（props 接收 path + activeColor，插槽切换图标，路由联动 isActive）
- 配合 Vue Router 实现页面切换与高亮联动

---

### 6. demo-common — 通用演示

Vue CLI 4 搭建的通用项目模板，包含：

- Vue Router 路由配置（home/login/register/404）
- Vuex 状态管理
- 标准目录结构（views/components/store/router）

---

### 7. mall — 商城实战系统 ⭐⭐⭐

项目的核心产出，一个**多页面移动端商城**，采用组件化 + 模块化开发。

```
mall/src/
├── main.js                        # 入口（事件总线 $bus + Vuex + Router）
├── App.vue                        # 根组件（keep-alive + TabBar）
│
├── router/index.js                # 路由（history 模式 + 懒加载 + keep-alive）
│   ├── /home          → Home.vue          # 首页（购物街）
│   ├── /category      → Category.vue      # 分类页
│   ├── /cart          → Cart.vue          # 购物车
│   ├── /profile       → Profile.vue       # 我的
│   └── /detail/:id    → Detail.vue        # 商品详情
│
├── store/index.js                 # Vuex（购物车状态管理）
│
├── network/                       # 网络请求层
│   ├── request.js                 # Axios 实例 + 拦截器
│   ├── home.js                    # 首页 API
│   └── detail.js                  # 详情 API + 数据类
│
├── components/                    # 组件库
│   ├── common/                    # 可复用通用组件
│   │   ├── navbar/NavBar.vue      # 导航栏（left/center/right 插槽）
│   │   ├── scroll/Scroll.vue      # Better-Scroll 封装（滚动/上拉加载/回到顶部）
│   │   ├── swiper/Swiper.vue      # ⭐ 纯手写轮播图（无缝滚动+触摸拖拽）
│   │   ├── swiper/SwiperItem.vue
│   │   ├── tabbar/TabBar.vue      # 底部导航容器
│   │   └── tabbar/TabBarItem.vue  # 导航项（插槽 + 路由联动）
│   │
│   └── content/                   # 业务组件
│       ├── backTop/BackTop.vue    # 回到顶部
│       ├── goods/GoodsList.vue    # 商品列表
│       ├── goods/GoodsListItem.vue# 商品卡片
│       └── tabControl/TabControl.vue # 标签切换（流行/新款/精选 + 吸顶）
│
├── views/                         # 页面视图
│   ├── home/                      # 首页（轮播 + 推荐 + 商品流）
│   │   ├── Home.vue
│   │   └── childComps/
│   │       ├── HomeSwiper.vue
│   │       ├── RecommendView.vue
│   │       └── FeatureView.vue
│   │
│   └── detail/                    # 商品详情（主页面 + 10 个子组件）
│       ├── Detail.vue
│       └── childComps/
│           ├── DetailNavBar.vue       # 详情导航（返回 + 锚点）
│           ├── DetailSwiper.vue       # 商品轮播图
│           ├── DetailBaseInfo.vue     # 商品基本信息
│           ├── DetailShopInfo.vue     # 店铺信息
│           ├── DetailGoodsInfo.vue    # 图文详情
│           ├── DetailParamInfo.vue    # 参数表格
│           ├── DetailCommentInfo.vue  # 评论信息
│           ├── DetailBottomBar.vue    # 底部操作栏
│           └── DetailShoppingCart.vue # 购物车弹层
│
└── assets/                        # 静态资源
    ├── css/base.css               # 全局样式 + CSS 变量主题
    └── img/                       # 图片资源
```

---

## 🛠️ 技术栈

| 类别 | 技术 | 版本 | 说明 |
|------|------|------|------|
| 核心框架 | Vue.js | 2.5.x ~ 2.6.11 | 渐进式 UI 框架 |
| 路由 | Vue Router | 3.0.1 ~ 3.2.0 | SPA 路由管理 |
| 状态管理 | Vuex | 3.4.0 ~ 3.5.1 | 中心化状态管理 |
| HTTP 请求 | Axios | 0.19.2 | Promise 封装 HTTP 客户端 |
| 滚动组件 | Better-Scroll | 1.15.2 | 移动端滚动体验 |
| 构建工具 | Vue CLI 4 | 4.4.0 ~ 4.5.0 | 脚手架 |
| 构建工具 | Webpack | 3.6.0 | 模块打包 |
| CSS | CSS 变量 | - | 主题色定制 |
| 通信 | EventBus | 内置 | `$bus` 事件总线跨组件通信 |

---

## 🚀 快速开始

### 运行各子项目

```bash
# vue-base — 直接用浏览器打开 HTML 文件
open vue-base/01-初试/demo01.html

# tabbar — Webpack 开发服务器
cd tabbar
npm install
npm run dev

# mall — Vue CLI 开发服务器
cd mall
npm install
npm run serve

# vue-cli 各子目录同样方式
cd vue-cli/03-testvuecli3
npm install
npm run dev
```

### Mall 启动注意事项

```bash
cd mall

# 安装依赖
npm install

# 启动本地 mock API（端口 8000）
# 或修改 src/network/request.js 中的 baseURL

# 启动开发服务器
npm run serve

# 浏览器访问 http://localhost:8080
```

---

## ✨ 项目亮点

1. **循序渐进** — vue-base → webpack → vue-cli → promise → tabbar → mall，六大阶梯逐步登顶
2. **手写核心组件** ⭐ — 轮播图（Swiper）和滚动组件（Scroll）从零实现，**不使用第三方轮播库**
   - 无缝滚动（首尾克隆元素）
   - 触摸拖拽（touchstart/touchmove/touchend）
   - 自动轮播 + dots 指示器
3. **Better-Scroll 封装** — `Scroll.vue` 封装滚动监听、上拉加载、`scrollTo` 定位、`refresh` 刷新
4. **插槽设计的优秀实践** — NavBar（left/center/right）、TabBarItem（active/inactive 图标切换）都使用插槽设计，灵活可扩展
5. **吸顶效果** — TabControl 控件通过复制 DOM + fixed 定位实现页面滚动时吸附顶部
6. **防抖优化** — 图片加载完成后 `refresh()` 防抖处理，避免频繁重计算
7. **事件总线** — `Vue.prototype.$bus` 实现非父子组件通信
8. **CSS 变量主题** — `--color-tint`、`--color-high-text` 统一管理主题色（粉红色系）
9. **keep-alive 缓存** — 首页离开记录滚动位置，回来恢复，详情页排除缓存
10. **Vuex 模块化拆分** — mutations / actions / getters 独立文件 + 常量类型 `mutations-types.js`
11. **数据层封装** — `GoodsInfo` / `Shop` 数据类，代码分层清晰
12. **64 天学习记录** — 完整记录了从 `2020.6.20` 到 `2020.8.23` 每天的学习进度

---

## 📚 相关资源

- [Vue.js 官方文档](https://v2.cn.vuejs.org/)
- [Vue Router 文档](https://v3.router.vuejs.org/zh/)
- [Vuex 文档](https://v3.vuex.vuejs.org/zh/)
- [Better-Scroll 文档](https://better-scroll.github.io/docs/zh-CN/)
- [Webpack 文档](https://webpack.js.org/)

---

## 📝 License

MIT — 仅供学习参考，欢迎 Star & Fork ⭐

