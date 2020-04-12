This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 可能存在的问题

### build out of memory
当前模板不存在这个问题，应该是由于代码量很小的原因，实测当代码多了之后，可能会编译失败。

查看了官方的 issue，讨论该问题有很多，由于该模板创建时，使用的是 `react-script@3.3.0`，尝试升级到当前最新版 `@3.4.1`，但问题并没有解决。

但初步判断应该是 `@babel/core` 的在生成 `source-map` 时存在的问题，已经在新版本中解决，于是尝试手动升级 `@babel/core`，直接通过如下命令安装最新版
```bash
npm install @babel/core --save-dev
```

结果问题得到解决，查看升级后 `react-script@3.3.0` 后 `@babel/core` 的版本其实是有更新的，但目前不明白为什么直接升级 `react-script` 没有生效，考虑到该包应该由 `react-script` 维护，因此模板目前未加入 `@babel/core` 依赖，而是选择跟踪这个问题，最终交由 `react-script` 来解决。
