import { FunctionComponent } from 'react';
import { useResponsiveValue, useBreakpointIndex } from '@theme-ui/match-media';
import { motion } from 'framer-motion';
import { useSetRecoilState } from 'recoil';
import { counterState } from 'store/atoms';

export const Slider: FunctionComponent = (): JSX.Element => {
  const setCount = useSetRecoilState(counterState);
  const index = useBreakpointIndex();
  const theme = useResponsiveValue([640 / 2, 832 / 2, 1024 / 2, 1216 / 2]);
  
  const onDragEnd = () => {
    setCount(Math.round(Math.random() * 100));
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: -theme[index],
        right: theme[index]
      }}
      dragElastic={0}
      onDragEnd={onDragEnd}
      style={{ width: 80, height: 40, backgroundColor: '#1c72e8', margin: 12, borderRadius: '5%' }}
    />
  );
};
