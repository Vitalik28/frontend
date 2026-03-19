import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
  title: 'Widgets/Navbar',
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
};

export default meta;

type Story = StoryObj<NavbarComponent>;

export const Default: Story = {};
