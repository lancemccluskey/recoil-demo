/** @jsx */
import { FunctionComponent } from 'react';
import { jsx, Container, Flex, Heading, Divider } from 'theme-ui';
import { Slider } from 'components/Slider';
import { Button } from 'components/Button';
import { Progress } from 'components/Progress';
import { Dollars } from 'components/Dollars';

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <Heading sx={{ fontSize: 32 }}>
        Recoil Demo
      </Heading>
      <Flex variant="mainColumn">
        <Slider />
        <Divider />
        <Button />
        <Divider />
        <Progress />
        <Divider />
        <Flex variant="dollarsRow">
          <Dollars />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
