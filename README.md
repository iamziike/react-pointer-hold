# react-pointer-hold

A small utility library to simulate a pointerhold event in React

## Installation

### npm

```sh
npm i react-pointerhold
```

### yarn

```sh
yarn add react-pointerhold
```

## Usage

```js
import { usePointerHold } from 'react-pointer-hold';

const App = () => {
  const { attachPointerHold } = usePointerHold();

  return (
    <button
      {...attachPointerHold({
        onPointerHold() {
          console.log('Jello World');
        },
      })}
    >
      Click Me
    </button>
  );
};
```

## API Simplified

attachPointerHold() takes in two arguments.

The first argument it takes in is an object of type Handlers

```ts
type Handlers = {
  onPointerHold: VoidFunction;
  onPointerDown?: VoidFunction;
  onPointerUp?: VoidFunction;
};
```

The last serves as a timer. It has a default value of 1600

```js
<button
  {...attachPointerHold(
    {
      onPointerHold() {
        console.log('Jello World');
      },
    },
    3000
  )} // onPointerHold will be called in 3 seconds
>
  Click Me
</button>
```

**Note** whenever you may need to use an _onPointerDown || onPointerUp_, structure your code this way.

```js
<button
  {...attachPointerHold({
    onPointerHold() {
      console.log('Jello World');
    },
    onPointerDown() {
      console.log('Pointer Down');
    },
    onPointerUp() {
      console.log('Pointer Up');
    },
  })}
>
  Click Me
</button>
```
