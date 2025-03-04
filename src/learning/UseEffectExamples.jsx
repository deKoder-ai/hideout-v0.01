import { useEffect } from 'react';

// [] dependency array examples

useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);

useEffect(
  () => {
    // here: execute side effect
    return () => {
      // here: cleanup function when unmounting or re-running effect
    };
  },
  // optional dependency array
  [
    /* 0 or more entries */
  ]
);

// You do not need effects for events. Code that runs when a component is
// displayed should be in effects, the rest should be in events.

// https://www.theodinproject.com/lessons/node-path-react-new-how-to-deal-with-side-effects

// https://react.dev/learn/lifecycle-of-reactive-effects
// Recap
// Components can mount, update, and unmount.
// Each Effect has a separate lifecycle from the surrounding component.
// Each Effect describes a separate synchronization process that can start and stop.
// When you write and read Effects, think from each individual Effect’s perspective (how to start and stop synchronization) rather than from the component’s perspective (how it mounts, updates, or unmounts).
// Values declared inside the component body are “reactive”.
// Reactive values should re-synchronize the Effect because they can change over time.
// The linter verifies that all reactive values used inside the Effect are specified as dependencies.
// All errors flagged by the linter are legitimate. There’s always a way to fix the code to not break the rules.

// https://react.dev/learn/you-might-not-need-an-effect
// Recap:
// If you can calculate something during render, you don’t need an Effect.
// To cache expensive calculations, add useMemo instead of useEffect.
// To reset the state of an entire component tree, pass a different key to it.
// To reset a particular bit of state in response to a prop change, set it during rendering.
// Code that runs because a component was displayed should be in Effects, the rest should be in events.
// If you need to update the state of several components, it’s better to do it during a single event.
// Whenever you try to synchronize state variables in different components, consider lifting state up.
// You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.
