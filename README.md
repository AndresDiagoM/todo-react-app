# Todo App

This project is a simple Todo application built with React. It allows users to create, delete, and manage their todos. The application leverages React hooks for state management and uses localStorage to persist todos across browser sessions.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project folder structure

This project follows the feature-first folder structure. This means that the project is divided into features, and each feature has its own folder with all the components, hooks, and styles it needs.

```
src/
  features/
    todos/
      components/
        [CreateTodo.js]
        [TodoCounter.js]
        [TodoItem.js]
        TodoList.js
        [YourTask.js]
      hooks/
        [useLocalStorage.js]
        [useTodos.js]
      styles/
        TodoCounter.css
        TodoItem.css
        YourTasks.css
      TodoContext.js
      TodoService.js
  assets/
    lotties/
      animation.json
      ...
    styles/
  [App.js]
  [index.js]
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Config eslint and prettier

npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

```
 npx eslint --init    

 npx eslint .\src\components\ --fix   

 npm i -D eslint-config-prettier   

 npx prettier .\src\components --write 
```


## How to deploy with github pages

First, you need to install the gh-pages package as a dev-dependency of your project `npm install gh-pages --save-dev`. 

Then, you need to add some properties to your package.json file:

```json
{
  "homepage": "https://myusername.github.io/my-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Finally, you can deploy your app by running `npm run build` and then `npm run deploy`. This will create a new branch called gh-pages and push your build files to it. You can now access your app at the URL you specified in the homepage property.

In the repository settings on GitHub, you can set the source of the GitHub Pages to the gh-pages branch, and the root directory.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


