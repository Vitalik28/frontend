import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

const meta: Meta<SidebarComponent> = {
  component: SidebarComponent,
  title: 'Widgets/Sidebar',
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
};

export default meta;

type Story = StoryObj<SidebarComponent>;

export const Default: Story = {};
