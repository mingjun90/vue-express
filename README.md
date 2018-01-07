Vue + Express wheel（**vue-resource** + **ElementUI**）
=========================================

- Based on original repo，modify config files about webpack. Current project can run build command, and compile vue code.
- Frontend add vue tools(vue-router，vuex, **vue-resource**), and **ElementUI**.
- Backend express add history module.
- Rearrange the project strcture.

## Keywords

- Vue (vue-router + vuex + **vue-resource**)
- **ElementUI**
- Express
- Nodemon
- Webpack
- Npm

## Usage

1. Install dependency

   `npm install`

2. Run project under development mode, then check localhost:4000

   `npm run dev`

3. Build frontend code

   `npm run build`

    Build code will be generated under ./dist.
    Add script to run express under production mode.

## Preview

![preview](https://github.com/mingjun90/vue-express-dev/blob/master/preview.png)

## Project Structure

```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── client
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── Hello.vue
│   │   │── static
│   │   │── router
│   │   │── store
│   │   │── views
│   │   └── index.js
│   └── server
│       ├── index.js
│       ├── config
│       ├── dao
│       ├── model
│       ├── router
│       ├── public
│       │   └── favicon.ico
│       └── views
│             └── index.html
├── build
│   ├── build.js
│   ├── clicheck-version.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
     ├── dev.env.js
     ├── index.js
     └── prod.env.js
```


## Reference

forked from:[LuckyStarry/vue-express-dev-boilerplate](https://github.com/LuckyStarry/vue-express-dev-boilerplate)

Some ideas are stolen from them, really appreciated.

- [Eslint guide](http://eslint.org/docs/user-guide/getting-started)
- [Express generator](http://expressjs.com/en/starter/generator.html)
- [Vue template](https://github.com/vuejs-templates/webpack)
- [Nodemon doc](https://github.com/remy/nodemon#nodemon)
- [Babel register](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [webpack-dev-middleware-boilerplate](https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src)
- [how-can-i-use-webpack-with-express](http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express)
- [The-ultimate-webpack-setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
