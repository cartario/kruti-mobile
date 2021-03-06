const events = [
  {
    id: Math.random().toString(),
    title: 'All options',
    date: new Date().toJSON(),
    posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612554121/events/allOptions.jpg',   
    price: 'Бесплатно',
    booked: false,  
    address: 'moscow',
    link: 'https://',
    checked: true, //поле должно меняться на false при добавлении и редактировании
    comment: '', //для служебных комментариев, нужен для модерации при изменении флагов в базе, н-р new event/update event/removeEvent
  },
  {
    id: Math.random().toString(),
    title: 'All options2',
    date: new Date().toJSON(),
    posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612554121/events/allOptions.jpg', 
    price: 'Бесплатно'  ,
    booked: false,  
    address: 'moscow',
    link: 'https://',
    checked: true,  
    comment: '',  
  },
  {
    id: Math.random().toString(),
    title: 'All options3',
    date: new Date().toJSON(),
    posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612554121/events/allOptions.jpg',  
    price: 'Бесплатно' ,
    booked: true,       
    address: 'moscow',
    link: 'https://', 
    checked: true, 
    comment: '',   
  },
  {
    id: Math.random().toString(),
    title: 'All options4',
    date:  new Date().toJSON(),
    posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612554121/events/allOptions.jpg',  
    price: 'Бесплатно'  ,
    booked: true,  
    address: 'moscow',
    link: 'https://',
    checked: false, 
    comment: '',   
  }
];

export const DATA = {
  user: {
    level: 1,
    totalScore: 101,
    isLoaded: false
  },
  lessons: [
    {
      id: Math.random().toString(),
      title: 'IndianStep',
      price: '300',
      booked: false,
      level: 1,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'sixstep',
      price: '400',
      booked: false,
      level: 1,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'freeze',
      price: '500',
      booked: false,
      level: 1,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'headspin',
      price: '500',
      booked: false,
      level: 1,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'elbowspin',
      price: '500',
      booked: false,
      level: 2,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'windmill',
      price: '500',
      booked: false,
      level: 1,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'test5',
      price: '500',
      booked: false,
      level: 1,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'test5',
      price: '500',
      booked: false,
      level: 3,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    {
      id: Math.random().toString(),
      title: 'test5',
      price: '500',
      booked: false,
      level: 3,
      tutorialUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612427797/lessons/tutorials/swipes-tut_iz7mlx_p8krey.mp4',
      practiceUrl: 'https://res.cloudinary.com/dwhyb2a2q/video/upload/v1612424134/lessons/practice/swipes-loop_p5cz3j_silxci.mp4'
    },
    
  ],
  events
};
