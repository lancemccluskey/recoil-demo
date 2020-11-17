import { selector } from 'recoil';
import { counterState } from 'store/atoms';

export const currencyCounterState = selector<string>({
  key: 'currencyCounterState',
  get: ({ get }) => {
    const count = get(counterState);
    return `$${count.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  },
});
