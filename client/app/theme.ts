import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    primary: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd699',
      '#ffb833',
      '#ffa500', // Main orange
      '#ff8c00', // Darker orange
      '#e67e22',
      '#d35400',
      '#ba4a00',
      '#a63d00',
    ],
    golden: [
      '#fffdf0',
      '#fffae5',
      '#fff9d4',
      '#fff4b3',
      '#ffed80',
      '#ffe64d',
      '#ffdd1a', // Golden yellow
      '#e6c700',
      '#ccb000',
      '#b39900',
    ],
    sky: [
      '#e3f2fd',
      '#bbdefb',
      '#90caf9',
      '#64b5f6',
      '#42a5f5',
      '#2196f3', // Sky blue
      '#1e88e5',
      '#1976d2',
      '#1565c0',
      '#0d47a1',
    ],
  },
  primaryColor: 'primary',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  headings: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontWeight: '700',
  },
  radius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        padding: 'lg',
      },
    },
  },
};
