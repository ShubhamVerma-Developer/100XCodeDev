# 6.2 useEffect, useMemo, useCallback

## Common hooks in react

<b>useEffect, useCallback, useMemo, custom hooks prop drilling</b>

### Two jargons before we start

1.  Side effects
2.  Hooks

### 1. Side effects

<p>In react, the concept of side effects encompasses any operations that reach outside
the functional scope of a React component. These operations can affect other components, interact, or perform asynchronous data fetching.</p>

### 2. Hooks

<p>Hooks are a feature introduced in React 16.8 that allow you to use state
and other React features without writing a class. They enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class components. This has led to a more concise and readable way of writing compoenents in React</p>

#### Some common hooks are

1. useState
2. useEffect
3. useCallback
4. useMemo
5. useRef
6. useContext

## 1. useState

Let's you describe the state of your app Whenever state updates, it triggers a re-render which finally results in a DOM update

## 2. useEffect

The 'useEffect' hook is a feature in React, a popular Javascript library for building user interfaces. It allows you to perform side effects in function components. Side effects are operations that can affect other components or can't be done using rendering, such as data fetching, subscriptions, or manually changing the DOM in React components.
The 'useEffect' hook serves the same purpose as 'componentDidMount',
'componentDidUpdate', and 'componentWillmount' in React class components, but unified into a single API.

## Lets start with an example

<p>You are a car racer that has to do a 100 laps across a stadium You are allowed to take a pit stop from time to time.
Do you take the stop in b/w every lap? Or do you take a stop after every 10 laps lets say?</p>

You will only make a pit stop From time to time (Lets say once every 20 laps)
even though you pass right in front of it in every lap
Making a pit stop is a side effect.

### Write a component that takes a todo id as an input and fetches the data from that todo from the given endpoint and then renders it. How would the dependency array change?
