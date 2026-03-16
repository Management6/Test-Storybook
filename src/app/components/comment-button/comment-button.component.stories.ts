import type { Meta, StoryObj} from '@storybook/angular';
import { CommentButtonComponent } from './comment-button.component';

const meta: Meta<CommentButtonComponent> = {
    title: 'Instagram/Buttons/Comment Button',
    component: CommentButtonComponent,
};

export default meta;
type Story = StoryObj<CommentButtonComponent>;

export const Default: Story = {};