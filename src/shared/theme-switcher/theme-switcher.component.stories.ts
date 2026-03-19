import type { Meta, StoryObj } from '@storybook/angular';
import { ThemeSwitcherComponent } from './theme-switcher.component';

const meta: Meta<ThemeSwitcherComponent> = {
  component: ThemeSwitcherComponent,
  title: 'Shared/ThemeSwitcher',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ThemeSwitcherComponent>;

export const Default: Story = {};
