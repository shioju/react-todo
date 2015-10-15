# React Tutorial

This tutorial will introduce you to the core concepts of React. I've tried to simplify this as much as possible by stripping away unnecessary dependencies such as Flux and backend servers.

In fact, this example runs without a server.

*p.s. this tutorial was used for the workshop conducted at the ReactJS Singapore meetup on 15 Oct 2015*

## Component Hierarchy

In this tutorial, we'll be building a simple Todo app with the following components:

```
- TodoBox       // displays the header and contains TodoForm and TodoList
  - TodoForm    // provides an input field and a submit button
  - TodoList    // iterates data and renders a TodoItem for each item
    - TodoItem  // displays a single todo item
```

## Key concepts
- JSX: A cleaner syntax for writing markups within javascript. Gets transpiled into normal javascript before being served to the browser (we're using webpack here).
- props: This looks like HTML attributes, and is how parent components pass information to its child components.
- `key` props: Disambiguates other instances of the same component type. Try displaying TodoItems without keys, the done status will go crazy.
- `render()`: Every React component must have this. This tells the component what to display when it's rendered.
- `this.refs.someRef`: Put this in DOM elements so that you can refer to them elsewhere in the code.

## Getting started
```
# after cloning this repo, you should revert to the initial commit (tagged as clean)
git checkout clean

# install dependent node modules
npm install

# bundles relevant javascript files into bundle.js
./node_modules/.bin/webpack -w

# you should see Hello World
open index.html
```

## How it works
Webpack looks at `entry.js` and basically combines all the required javascript files into `bundle.js`. Webpack has also been configured to convert ES6 syntax (e.g. class keyword) into ES5 friendly equivalents.

`index.html` merely includes the generated `bundle.js`. If you look at `entry.js`, once `index.html` is loaded, it renders the `HelloWorld` component on the page in the DOM element with id `content`.

## What's next?
For starters, we can create a `TodoBox` component to display a header such as `My Todo List`. You can refer to `components/HelloWorld.js` as a guide.

You'll also need to modify `index.html` to render our `TodoBox` instead of the `HelloWorld` component.
