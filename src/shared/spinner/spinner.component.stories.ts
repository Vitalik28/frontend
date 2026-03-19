import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  component: SpinnerComponent,
  title: 'Shared/Spinner',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {};
