import type {Meta, StoryObj} from '@storybook/angular';
import {ButtonComponent} from "./button.component";

const meta: Meta<ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        label: 'Click me',
        type: 'button'
    },
};