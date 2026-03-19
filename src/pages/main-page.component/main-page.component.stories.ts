import type { Meta, StoryObj } from '@storybook/angular';
import { MainPageComponent } from './main-page.component';

const meta: Meta<MainPageComponent> = {
  component: MainPageComponent,
  title: 'Pages/Main',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<MainPageComponent>;

export const Default: Story = {};
