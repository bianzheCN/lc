# Hooks

## types

### Basic

#### useState

Functional components originally do not have any states, `useState` can help add a state

#### useEffect

This where side effects should be written. For function components, render phase should not contain side effects, so the main body of the function cannot contain them.

This will be triggered each time the component has completed render, but you can choose whether it should by adding some dependencies.

#### useContext

Pass a value through the component tree by the provider and `useContext`.

### Additional

## useReducer

## useCallback

## useMemo

## useRef

## useImperativeHandle

## useLayoutEffect

## useDebugValue
