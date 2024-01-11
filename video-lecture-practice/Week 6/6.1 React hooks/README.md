# Assignment

## Create a react app that has a prop and renderes it inside a div

## The top level App component renderes 2 Headers

## Re-rendering in react

A re-render means that

1. React did some work to calculate what all should update in this component
2. The compoenent actually got called (you can put a log to confirm this)
3. The inspector shows you a bounding box around the compoenent

# It happens when

1. A state variable that is being used inside a component changes
2. A parent compoent re-render triggers all children re-rendering

You want to minimise the number of re-render to make a highly optimal react app
The more the componenents that are getting re-rendered, the worse

## Keys in react

Lets create a simpel todo app that renders 3 todos

1. Create a Todo component that accepts title, description as input
2. Initialize a state array that has 3 todos
3. Iterate over the array to render all the TODOs
4. A button in the top level App component to add a new TODO
