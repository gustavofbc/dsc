import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from "ui";

export default {
    title: "Form/Button",
    component: Button,

    args: {
        children: 'Assine agora',
        variant: 'base',
        disabled: false,
    },

} as Meta<ButtonProps>

export const Base: StoryObj<ButtonProps> = {}

export const Hodl: StoryObj<ButtonProps> = {
    args: {
        variant: 'hodl',
    },
}

export const AltFactor: StoryObj<ButtonProps> = {
    args: {
        variant: 'altFactor',
    },
}

export const Altseason: StoryObj<ButtonProps> = {
    args: {
        variant: 'altseason',
    },
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    }
}