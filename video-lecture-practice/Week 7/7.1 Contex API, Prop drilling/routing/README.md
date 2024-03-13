## Prop drilling

### The problem with passing props

Passing props is a great way to explictily pipe data through your UI tree to the components that use it.
But passing props can become verbose and inconvienent when you need to pass some prop deeply through the tree, or if many compoents need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called "prop drilling"
