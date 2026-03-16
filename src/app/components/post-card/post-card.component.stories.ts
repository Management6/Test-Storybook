import type { Meta, StoryObj } from '@storybook/angular';
import { PostCardComponent } from './post-card.component';

const meta: Meta<PostCardComponent> = {
    title: 'Instagram/Post Card',
    component: PostCardComponent,
};

export default meta;
type Story = StoryObj<PostCardComponent>;

export const Default: Story = {
    args: {
        username: 'lachlan_dev',
        profileImage: 'https://via.placeholder.com/40',
        postImage: 'https://via.placeholder.com/500x500',
        likes: 24,
        caption: 'Building an Instagram clone with Angular and Storybook!',
        location: 'Brisbane, Australia',
    },
};

export const PopularPost: Story = {
    args: {
        username: 'design.daily',
        profileImage: 'https://via.placeholder.com/40',
        postImage: 'https://via.placeholder.com/500x500',
        likes: 1024,
        caption: 'Check out our latest design tips and tricks!',
        location: 'Gold Coast, Australia',
    },
};

export const NoLocation: Story = {
    args: {
        username: 'travel.junkie',
        profileImage: 'https://via.placeholder.com/40',
        postImage: 'https://via.placeholder.com/500x500',
        likes: 512,
        caption: 'Testing a post card without a location.',
        location: '',
    },
};