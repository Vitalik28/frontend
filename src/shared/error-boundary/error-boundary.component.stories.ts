import type { Meta, StoryObj } from '@storybook/angular';
import { ErrorBoundaryComponent } from './error-boundary.component';

const meta: Meta<ErrorBoundaryComponent> = {
  component: ErrorBoundaryComponent,
  title: 'Shared/ErrorBoundary',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ErrorBoundaryComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <app-error-boundary>
        <p>Content inside boundary</p>
      </app-error-boundary>
    `,
  }),
};
