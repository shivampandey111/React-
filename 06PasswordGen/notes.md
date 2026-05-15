useCallback is a React hook that returns a memoized version of a callback function. 

It's used to optimize performance by preventing unnecessary re-renders. 

Specifically, it helps avoid recreating functions when their dependencies haven't changed, which can be useful when passing callbacks to child components that rely on referential equality to prevent re-rendering.



useEffect is a special hook that lets you run side effects in React. 

It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.