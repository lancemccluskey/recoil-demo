/** @jsx */
import { FunctionComponent } from 'react';
import { jsx, Heading } from 'theme-ui';
import { useRecoilValue } from 'recoil';
import { currencyCounterState } from 'store/selectors';

export const Dollars: FunctionComponent = (): JSX.Element => {
  const currency = useRecoilValue(currencyCounterState);

  return (
    <>
      <Heading>
        Dollars
      </Heading>
      <Heading>
        {currency}
      </Heading>
    </>
  );
};