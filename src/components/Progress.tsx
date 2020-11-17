/** @jsx */
import { FunctionComponent } from 'react';
import { jsx, Progress as TUIProgress } from 'theme-ui';
import { useRecoilValue } from 'recoil';
import { counterState } from 'store/atoms';

export const Progress: FunctionComponent = (): JSX.Element => {
  const count = useRecoilValue(counterState);

  return (
    <TUIProgress
      max={100}
      value={count}
    />
  );
};
