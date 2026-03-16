import type {Meta, StoryObj} from '@storybook/angular';
import {ShareButtonComponent} from './share-button.component';

const meta: Meta<ShareButtonComponent> = {
    title: 'Instagram/Buttons/Share Button',
    component: ShareButtonComponent,
};
export default meta;
type Story = StoryObj<ShareButtonComponent>;

export const Default: Story = {
    args: {
        shareClicked: () => {}
    }
};