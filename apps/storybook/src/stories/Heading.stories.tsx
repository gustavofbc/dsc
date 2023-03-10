import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from "ui";

export default {
    title: "Typography/Heading",
    component: Heading,

    args: {
        size: 'md',
        children: 'Títulos',
    }

} as Meta<HeadingProps>

export const Base: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'Títulos com tag H1',
        as: 'h1',
    },
}

