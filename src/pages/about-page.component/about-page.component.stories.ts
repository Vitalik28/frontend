import type { Meta, StoryObj } from '@storybook/angular';
import { AboutPageComponent } from './about-page.component';

const meta: Meta<AboutPageComponent> = {
  component: AboutPageComponent,
  title: 'Pages/About',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AboutPageComponent>;

export const Default: Story = {};
