import { Profile, Match, Chat, Message } from '../types';

export const currentUserId = 'current-user';

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Emma',
    age: 26,
    bio: 'Coffee enthusiast ☕ | Book lover 📚 | Looking for someone to explore the city with',
    photos: [
      'https://images.unsplash.com/photo-1748344386932-f0b9c7b925e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTgxMDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1582079767681-eaa6975406c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvZmZlZSUyMHNob3AlMjByZWFkaW5nfGVufDF8fHx8MTc3MTkwMTIwOXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    interests: ['Coffee', 'Reading', 'Hiking', 'Photography'],
    distance: 2,
    occupation: 'Graphic Designer'
  },
  {
    id: '2',
    name: 'Alex',
    age: 28,
    bio: '🎸 Musician | Adventure seeker | Let\'s grab drinks and see where it goes',
    photos: [
      'https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGNhc3VhbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTg2NzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567125530845-d850db85aab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBtdXNpY2lhbiUyMGd1aXRhciUyMHBsYXlpbmd8ZW58MXx8fHwxNzcxOTAxMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    interests: ['Music', 'Travel', 'Food', 'Concerts'],
    distance: 5,
    occupation: 'Software Engineer'
  },
  {
    id: '3',
    name: 'Sophie',
    age: 24,
    bio: 'Yoga instructor 🧘‍♀️ | Plant mom 🌱 | Living mindfully and loving deeply',
    photos: [
      'https://images.unsplash.com/photo-1671580704901-98cedb46e06b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBmaXRuZXNzJTIwc3R1ZGlvfGVufDF8fHx8MTc3MTkwMTIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1602304648968-dd05bad729e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG91dGRvb3IlMjBhZHZlbnR1cmUlMjBoaWtpbmd8ZW58MXx8fHwxNzcxODkyMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    interests: ['Yoga', 'Meditation', 'Nature', 'Wellness'],
    distance: 3,
    occupation: 'Yoga Instructor'
  },
  {
    id: '4',
    name: 'Jake',
    age: 27,
    bio: '🏄‍♂️ Surfer | Beach bum | Looking for someone who loves the ocean as much as I do',
    photos: [
      'https://images.unsplash.com/photo-1579117346500-cf3fbc75dc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiZWFjaCUyMHN1cmZpbmclMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzE5MDEyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNhc3VhbHxlbnwxfHx8fDE3NzE5MDEyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    interests: ['Surfing', 'Beach', 'Fitness', 'Travel'],
    distance: 7,
    occupation: 'Marine Biologist'
  }
];

export const matches: Match[] = [
  {
    id: 'match-1',
    profile: profiles[0],
    matchedAt: new Date('2026-02-23T10:30:00'),
    lastMessage: 'That sounds like a great plan!',
    unread: true
  },
  {
    id: 'match-2',
    profile: profiles[1],
    matchedAt: new Date('2026-02-22T15:20:00'),
    lastMessage: 'See you then! 😊',
    unread: false
  },
  {
    id: 'match-3',
    profile: profiles[2],
    matchedAt: new Date('2026-02-21T09:15:00'),
    lastMessage: 'Hey! How are you?',
    unread: false
  }
];

export const chats: { [matchId: string]: Chat } = {
  'match-1': {
    matchId: 'match-1',
    messages: [
      {
        id: 'm1',
        senderId: '1',
        text: 'Hey! I saw you like coffee ☕',
        timestamp: new Date('2026-02-23T10:35:00')
      },
      {
        id: 'm2',
        senderId: currentUserId,
        text: 'Yes! I\'m obsessed. Do you have a favorite spot?',
        timestamp: new Date('2026-02-23T10:37:00')
      },
      {
        id: 'm3',
        senderId: '1',
        text: 'There\'s this amazing place downtown called Brew & Books',
        timestamp: new Date('2026-02-23T10:40:00')
      },
      {
        id: 'm4',
        senderId: currentUserId,
        text: 'I love that place! Want to meet there this weekend?',
        timestamp: new Date('2026-02-23T10:42:00')
      },
      {
        id: 'm5',
        senderId: '1',
        text: 'That sounds like a great plan!',
        timestamp: new Date('2026-02-23T10:45:00')
      }
    ]
  },
  'match-2': {
    matchId: 'match-2',
    messages: [
      {
        id: 'm6',
        senderId: currentUserId,
        text: 'Hey Alex! Love your music taste 🎸',
        timestamp: new Date('2026-02-22T15:25:00')
      },
      {
        id: 'm7',
        senderId: '2',
        text: 'Thanks! Are you into live music?',
        timestamp: new Date('2026-02-22T15:30:00')
      },
      {
        id: 'm8',
        senderId: currentUserId,
        text: 'Absolutely! Going to any concerts soon?',
        timestamp: new Date('2026-02-22T15:35:00')
      },
      {
        id: 'm9',
        senderId: '2',
        text: 'There\'s a great indie show on Friday. Want to come?',
        timestamp: new Date('2026-02-22T15:40:00')
      },
      {
        id: 'm10',
        senderId: currentUserId,
        text: 'I\'d love to! Send me the details',
        timestamp: new Date('2026-02-22T15:42:00')
      },
      {
        id: 'm11',
        senderId: '2',
        text: 'See you then! 😊',
        timestamp: new Date('2026-02-22T15:45:00')
      }
    ]
  },
  'match-3': {
    matchId: 'match-3',
    messages: [
      {
        id: 'm12',
        senderId: '3',
        text: 'Hey! How are you?',
        timestamp: new Date('2026-02-21T09:20:00')
      },
      {
        id: 'm13',
        senderId: currentUserId,
        text: 'Good! I see you\'re into yoga. I\'ve been wanting to try it',
        timestamp: new Date('2026-02-21T09:25:00')
      },
      {
        id: 'm14',
        senderId: '3',
        text: 'You should! I teach beginner classes on weekends',
        timestamp: new Date('2026-02-21T09:30:00')
      }
    ]
  }
};
