import hotel3 from './pics/hotel-3.jpg'
import hotel4 from './pics/hotel-4.jpg'
import hotel5 from './pics/hotel-5.jpg'
import hotel6 from './pics/hotel-6.jpg'
import hotel7 from './pics/hotel-7.jpg'
import hotel8 from './pics/hotel-8.jpg'
import hotel9 from './pics/hotel-9.jpg'
import hotel10 from './pics/hotel-10.jpg'
import hotel11 from './pics/hotel-11.jpg'
import hotel12 from './pics/hotel-12.jpg'
import hotel13 from './pics/hotel-13.jpg'
import hotel14 from './pics/hotel-14.jpg'

interface gridDataType  {
imgSrc: string
headingText: string
head: string
}

const gridData :gridDataType[]= [
    
    {
      imgSrc: hotel3,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Nature Friendly'
    },
    {
      imgSrc: hotel4,
      headingText: 'Lorem, ipsum dolor.',
      head:'Cool Indoor Relaxation'
    },
    {
      imgSrc: hotel5,
      headingText: 'Lorem ipsum dolor sit.',
      head:'Pools and nature'
    },
    {
      imgSrc: hotel6,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Nature and architecture'
    },
    {
      imgSrc: hotel7,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Great Views'
    },
    {
      imgSrc: hotel8,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Relaxation spots'
    },
    {
      imgSrc: hotel9,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Nature and architecture'
    },
    {
      imgSrc: hotel10,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Massage and Pools'
    },
    {
      imgSrc: hotel11,
      headingText: 'Lorem ipsum dolor sit amet consectetur.',
      head:'Sun bath images'
    },
    {
      imgSrc: hotel12,
      headingText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      head:'Bedroom views'
    },
    {
      imgSrc: hotel13,
      headingText: 'Lorem ipsum dolor sit amet consectetur.',
      head:'Master Bedrooms'
    },
    {
      imgSrc: hotel14,
      headingText: 'Lorem ipsum dolor sit amet.',
      head:'Architecture'
    }
  ];
  
  export default gridData;
  