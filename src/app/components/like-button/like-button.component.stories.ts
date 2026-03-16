import type {Meta, StoryObj} from '@storybook/angular';
import {LikeButtonComponent} from "./like-button.component";

const meta: Meta<LikeButtonComponent> = {
    title: 'Instagram/Buttons/Like Button',
    component: LikeButtonComponent,
};

export default meta;
type Story = StoryObj<LikeButtonComponent>;

export const Default: Story = {
    args: {
        likes: 24,
    },
};

export const PopularPost: Story = {
    args: {
        likes: 1056
    },
};