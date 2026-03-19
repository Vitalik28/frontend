import type { Preview } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';

const preview: Preview = {
  decorators: [
    componentWrapperDecorator((story) => `<div class="app light">${story}</div>`),
  ],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
