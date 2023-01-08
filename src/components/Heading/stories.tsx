import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Uma coisa qualquer',
  },
} as  ComponentMeta<typeof Heading>;

export const Template: ComponentStory<typeof Heading> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <Heading {...args} />
  </div>
);
