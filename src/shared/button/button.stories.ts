import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Shared/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
  },
};
