import { PostCard } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default-title',
    cover: '/images/typeScript.jpg',
  },
} as ComponentMeta<typeof PostCard>;

export const TypeScript: ComponentStory<typeof PostCard> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);
export const JavaScript: ComponentStory<typeof PostCard> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

JavaScript.args = {
  cover: 'https://c4.wallpaperflare.com/wallpaper/966/672/905/javascript-minimalism-wallpaper-preview.jpg'
}

