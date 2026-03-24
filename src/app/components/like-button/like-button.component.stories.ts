import type {Meta, StoryObj} from '@storybook/angular';
import {LikeButtonComponent} from "./like-button.component";

const meta: Meta<LikeButtonComponent> = {
    title: 'Instagram/Buttons/Like Button',
    component: LikeButtonComponent,
};

export default meta;
type Story = StoryObj<LikeButtonComponent>;

export const Unliked: Story = {
    args: {
        liked: false,
        likedChange: () => {}
    },
};

export const Liked: Story = {
    args: {
        liked: true,
        likedChange: () => {}
    },
};
