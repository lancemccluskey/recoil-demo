# Recoil-Demo

This is an example of using `recoil` with `nextjs`. It is comprised of
4 components that all share the same state inside of an atom using 
different hooks to write/read from. 
<br /><br />
The draggable rectangle component at the top only *writes* to the atom state. The button in the middle *reads* and *writes* to the atom. The progress bar only *reads* from the atom. The contrived dollar at the bottom uses a `selector` to convert the current atom state into currency.
<br /><br />
## Technologies

- `framer-motion`
- `nextjs`
- `react`
- `recoil`
- `theme-ui`

## Usage

1. Clone the repo
2. `nvm use`
3. `npm install`
4. Navigate to `http://localhost:3000/`

## Recoil Specifics

This example doesn't go over any experimental features of `recoil`,
but instead focuses on some of the common hooks including :

- `useRecoilState`
- `useSetRecoilState`
- `useRecoilValue`

This example also only goes over the basic primitives `atoms` and `selectors`.

