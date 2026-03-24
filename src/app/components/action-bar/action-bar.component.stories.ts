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
    liked: false,
    likedChange: () => {},
  },
};

export const PopularPost: Story = {
  args: {
    liked: true,
    likedChange: () => {},
  },
};