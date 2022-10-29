/*
 * File Created: Thursday, 27th October 2022 2:47:32 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Thursday, 27th October 2022 2:54:27 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import topLaptopImage from '../assets/images/image-top-laptops.jpg';
import retroGameImage from '../assets/images/image-retro-pcs.jpg';
import gameGrowthImage from '../assets/images/image-gaming-growth.jpg';

interface FooterData {
  image: string;
  title: string;
  subTitle: string;
  body: string;
}

interface NewsData {
  title: string;
  body: string;
}

export const newsData: NewsData[] = [
  {
    title: 'Hydrogen VS Electric Cars',
    body: 'Will hydrogen-fueles cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    body: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export const footerData: FooterData[] = [
  {
    image: retroGameImage,
    title: '01',
    subTitle: 'Reviving Retro PCs',
    body: 'What happen when old PCs are given modern upgrades?',
  },
  {
    image: topLaptopImage,
    title: '02',
    subTitle: 'Top 10 Laptops of 2022',
    body: 'Our best picks for various needs and budgets.',
  },
  {
    image: gameGrowthImage,
    title: '03',
    subTitle: 'The Growth of Gaming',
    body: 'How the pandemic has sparked fresh opportunities.',
  },
];
