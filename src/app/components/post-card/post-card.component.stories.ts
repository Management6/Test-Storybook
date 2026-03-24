import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent, within } from 'storybook/test';
import { PostCardComponent } from './post-card.component';

const meta: Meta<PostCardComponent> = {
    title: 'Instagram/Post Card',
    component: PostCardComponent,
    parameters: {
        a11y: {
            test: 'todo',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PostCardComponent>;

export const Default: Story = {
    args: {
        username: 'lachlan_dev',
        profileImage: './imgs/Profile-pic.jpg',
        postImage: './imgs/Post.jpg',
        likes: 24,
        caption: 'Building an Instagram clone with Angular and Storybook!',
        location: 'Brisbane, Australia',
    },
    parameters: {
        a11y: {
            test: 'error',
        },
    },
};

export const PopularPost: Story = {
    args: {
        username: 'design.daily',
        profileImage: './imgs/Profile-pic.jpg',
        postImage: './imgs/Post.jpg',
        likes: 1024,
        caption: 'Check out our latest design tips and tricks!',
        location: 'Gold Coast, Australia',
    },
};

export const NoLocation: Story = {
    args: {
        username: 'travel.junkie',
        profileImage: './imgs/Profile-pic.jpg',
        postImage: './imgs/Post.jpg',
        likes: 512,
        caption: 'Testing a post card without a location.',
        location: '',
    },
};

export const InteractionTest: Story = {
    args: {
        username: 'lachlan_dev',
        profileImage: './imgs/Profile-pic.jpg',
        postImage: './imgs/Post.jpg',
        likes: 24,
        caption: 'Building an Instagram clone with Angular and Storybook!',
        location: 'Brisbane, Australia',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Like flow
        await expect(canvas.getByText('24 likes')).toBeTruthy();
        await userEvent.click(canvas.getByLabelText('Like post'));
        await expect(canvas.getByText('25 likes')).toBeTruthy();

        // Comment flow
        await userEvent.click(canvas.getByLabelText('Comment on post'));
        await expect(canvas.getByText('Comments')).toBeTruthy();
        await expect(canvas.getByText('Great post!')).toBeTruthy();

        // Close comments
        await userEvent.click(document.body); // Click outside to close comments

        // Share flow
        await userEvent.click(canvas.getByLabelText('Share post'));
        await expect(canvas.getByText('Share')).toBeTruthy();

        const searchInput = canvas.getByPlaceholderText('Search');
        await userEvent.clear(searchInput);
        await userEvent.type(searchInput, 'alex');

        await expect(canvas.getByText('alex.design')).toBeTruthy();
        await expect(canvas.getByText('Alex Parker')).toBeTruthy();
    }
}
