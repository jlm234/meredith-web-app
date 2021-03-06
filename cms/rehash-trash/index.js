import OurStory from './our-story';
import RecyclingRubbish from './recycling-rubbish';
import RenewingLives from './renewing-lives';
import Workshops from './workshops';
import Donate from './donate';
import Shop from './shop';
import Contact from './contact';

export const business = {
  id: 'rehash-trash',
  name: 'Rehash Trash',
  logo: 'images/rehash-trash/logo.jpeg',
  title: 'Rehash Trash',
};

export const stories = [
  {
    name: 'home',
    image: 'images/rehash-trash/1.jpeg',
    blur: '5px',
  },
  OurStory,
  RecyclingRubbish,
  RenewingLives,
  Workshops,
  Donate,
  Shop,
  Contact,
];

export default {
  business,
  stories,
};
