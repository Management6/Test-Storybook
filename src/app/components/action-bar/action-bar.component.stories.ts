import type { Meta, StoryObj } from '@storybook/angular';
import { ActionBarComponent } from './action-bar.component';

const meta: Meta<ActionBarComponent> = {
  title: 'Instagram/ActionBar',
  component: ActionBarComponent,
};

export default meta;
type Story = StoryObj<ActionBarComponent>;

export const Default: Story = {
  args: {
    likes: 24,
  },
};

export const PopularPost: Story = {
  args: {
    likes: 1532,
  },
};