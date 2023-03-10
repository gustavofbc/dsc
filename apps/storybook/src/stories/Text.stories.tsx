import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from "ui";

export default {
    title: "Typography/Text",
    component: Text,

    args: {
        size: 'md',
        children: 'Isso é um texto...',
    },
    argTypes: {
        font: {
            options: ['Sora', 'IBM'],
            control: {
                type: 'inline-radio'
            }
        },
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }

} as Meta<TextProps>

export const Base: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Isso é um texto com Strong',
        as: 'strong',
    },
}

