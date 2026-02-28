
// Icons & Logos
import logo from './assets/sleepy-owl/Images/1.jpeg';
import searchIcon from './assets/sleepy-owl/Icons & Logos/37.svg';
import cartIcon from './assets/sleepy-owl/Icons & Logos/38.svg';
import downArrow from './assets/sleepy-owl/Icons & Logos/35.svg';
import faqChevronDown from './assets/sleepy-owl/Icons & Logos/22.svg';
import reviewTickBlue from './assets/sleepy-owl/Icons & Logos/24.svg';
import likeIcon from './assets/sleepy-owl/Icons & Logos/25.svg';
import dislikeIcon from './assets/sleepy-owl/Icons & Logos/26.svg';
import rightChevron from './assets/sleepy-owl/Icons & Logos/4.svg';
import leftArrowWhite from './assets/sleepy-owl/Icons & Logos/1.svg';
import rightArrowWhite from './assets/sleepy-owl/Icons & Logos/2.svg';
import starFilled from './assets/sleepy-owl/Icons & Logos/6.svg';
import faqIcon from './assets/sleepy-owl/Icons & Logos/11.svg';
import externalLinkIcon from './assets/sleepy-owl/Icons & Logos/12.svg';

// Feature-specific icons
import proteinIcon from './assets/sleepy-owl/Icons & Logos/7.svg';
import espressoIcon from './assets/sleepy-owl/Icons & Logos/8.svg';
import sugarIcon from './assets/sleepy-owl/Icons & Logos/9.svg';
import calIcon from './assets/sleepy-owl/Icons & Logos/10.svg';
import checkIcon from './assets/sleepy-owl/Icons & Logos/3.svg';
import footerOwls from './assets/sleepy-owl/Icons & Logos/28.svg';

// Social icons
import instagramIcon from './assets/sleepy-owl/Icons & Logos/30.svg';
import twitterIcon from './assets/sleepy-owl/Icons & Logos/31.svg';
import youtubeIcon from './assets/sleepy-owl/Icons & Logos/34.svg';
import mailIcon from './assets/sleepy-owl/Icons & Logos/32.svg';
import facebookIcon from './assets/sleepy-owl/Icons & Logos/33.svg';

// Product images (Carousel)
import product1 from './assets/sleepy-owl/Images/10.jpeg';
import product2 from './assets/sleepy-owl/Images/11.jpeg';
import product3 from './assets/sleepy-owl/Images/12.jpeg';
import product4 from './assets/sleepy-owl/Images/13.jpeg';

// Variant images
import variantClassic from './assets/sleepy-owl/Images/10.jpeg';
import variantVanilla from './assets/sleepy-owl/Images/11.jpeg';
import variantHazelnut from './assets/sleepy-owl/Images/12.jpeg';
import variantAssorted from './assets/sleepy-owl/Images/13.jpeg';

// More product images for sections
import lifestyleImg from './assets/sleepy-owl/Images/4.jpeg';
import coffeeGlassImg from './assets/sleepy-owl/Images/7.jpeg';
import matchaImg from './assets/sleepy-owl/Images/10.jpeg';
import bannerImage14 from './assets/sleepy-owl/Images/14.jpeg';

// Flavor pack images (3 flavors row)
import flavourBlue from './assets/sleepy-owl/Images/12.jpeg';
import flavourRed from './assets/sleepy-owl/Images/11.jpeg';
import flavourBrown from './assets/sleepy-owl/Images/13.jpeg';

// "As Seen On" logos
import forbesLogo from './assets/sleepy-owl/Icons & Logos/15.svg';
import toiLogo from './assets/sleepy-owl/Icons & Logos/16.svg';
import ndtvLogo from './assets/sleepy-owl/Use these logos on (As seen on) section/Container-4.png';

// Related product images
import related1 from './assets/sleepy-owl/Images/5.jpeg';
import related2 from './assets/sleepy-owl/Images/7.jpeg';
import related3 from './assets/sleepy-owl/Images/1.jpeg';

export const assets = {
  logo,
  searchIcon,
  cartIcon,
  downArrow,
  faqChevronDown,
  reviewTickBlue,
  likeIcon,
  dislikeIcon,
  rightChevron,
  leftArrowWhite,
  rightArrowWhite,
  starFilled,
  faqIcon,
  externalLinkIcon,
  checkIcon,
  footerOwls,

  products: [product1, product2, product3, product4],

  variants: [
    { name: 'CLASSIC', img: variantClassic, label: 'Classic' },
    { name: 'VANILLA', img: variantVanilla, label: 'Vanilla' },
    { name: 'HAZELNUT', img: variantHazelnut, label: 'Hazelnut' },
    { name: 'ASSORTED', img: variantAssorted, label: 'Assorted', bestseller: true },
  ],

  features: {
    protein: proteinIcon,
    espresso: espressoIcon,
    sugar: sugarIcon,
    cal: calIcon,
  },

  brands: [forbesLogo, toiLogo],

  socials: {
    instagram: instagramIcon,
    twitter: twitterIcon,
    youtube: youtubeIcon,
    mail: mailIcon,
    facebook: facebookIcon,
  },

  lifestyleImg,
  coffeeGlassImg,
  matchaImg,
  bannerImage14,

  flavours: [flavourBlue, flavourRed, flavourBrown],

  relatedProducts: [
    { name: 'Pitcher', tag: 'MERCHANDISE', price: '\u20B91,900', desc: 'Make & store your cold brew. Pop in a few packs, add water & store it in the fridge for up to a week.', img: related1 },
    { name: 'Green Mug', tag: 'MERCHANDISE', price: '\u20B9499', desc: 'Beautiful ceramic mug for your everyday brew moments.', img: related2 },
    { name: 'Protein Shaker', tag: 'MERCHANDISE', price: '\u20B9799', desc: 'Easy shake-and-go bottle for smooth protein coffee on the move.', img: related3 },
    { name: 'Travel Tumbler', tag: 'MERCHANDISE', price: '\u20B91,299', desc: 'Insulated tumbler to keep your coffee cool and fresh for hours.', img: variantHazelnut },
  ],
};


