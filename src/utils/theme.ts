import { roboto } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

export const theme: Theme = {
  ...roboto,
  styles: {
    ...roboto.styles,
    hr: {
      color: '#E5E5E5',
      width: '100%',
      margin: 12
    },
    progress: {
      height: '32px',
      margin: 3
    }
  },
  text: {
    heading: {
      color: 'muted',
      textAlign: 'center',
      marginBottom: 4
    }
  },
  layout: {
    container: {
      height: '100vh',
      padding: 3,
      backgroundColor: '#232324'
    },
  },
  mainColumn: {
    flexDirection: 'column',
    height: '75%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dollarsRow: {
    justifyContent: 'space-around',
    width: '100%'
  }
};
