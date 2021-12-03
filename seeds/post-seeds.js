const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Duis vulputate nibh sit amet leo consequat porta. In luctus ex a sapien condimentum volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Mauris posuere leo in sapien porttitor varius. Praesent dictum consectetur nisi, eget placerat mauris pulvinar a. Vivamus vitae volutpat velit.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Aenean tincidunt neque sapien, ac tristique eros euismod ac. Mauris non diam in tellus posuere vehicula eget ut mi.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Ut blandit orci ac libero porta tincidunt. Nam erat arcu, commodo non faucibus nec, accumsan fringilla dui.',
    user_id: 7
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
