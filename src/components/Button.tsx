import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { counterState } from 'store/atoms';

export const Button: FunctionComponent = (): JSX.Element => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setCount(count + 1)}
      style={{
        backgroundColor: '#1c72e8',
        width: '64px',
        height: '64px',
        borderRadius: '25%',
        border: 'none',
        outline: 'none'
      }}
    >
      {count}
    </motion.button>
  );
};
