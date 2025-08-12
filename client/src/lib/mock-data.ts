export interface Contact {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  avatar: string;
  status: 'active' | 'replied' | 'cold' | 'completed';
  engagement: {
    type: 'post' | 'company' | 'review' | 'comment';
    description: string;
    color: string;
  };
  lastActivity: string;
}

export interface SequenceMetrics {
  active: number;
  completed: number;
  totalAdded: number;
  open: number;
}

export interface AnalyticsData {
  responseRate: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  openRate: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  meetingsBooked: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
}

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Ozoo',
    title: 'Jack Quille · Head of Sales',
    company: 'Ozoo',
    email: 'jack@ozoo.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    status: 'active',
    engagement: {
      type: 'post',
      description: 'Engaged with a post about aisales',
      color: 'blue'
    },
    lastActivity: '2 hours ago'
  },
  {
    id: '2',
    name: 'Greenbay',
    title: 'Tobias Matthew · VP of Sales',
    company: 'Greenbay',
    email: 'tobias@greenbay.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    status: 'active',
    engagement: {
      type: 'post',
      description: 'Engaged with a post from Madeela Ruge...',
      color: 'blue'
    },
    lastActivity: '4 hours ago'
  },
  {
    id: '3',
    name: 'Tesla',
    title: 'Rui Pereira · Head of Marketing',
    company: 'Tesla',
    email: 'rui@tesla.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    status: 'active',
    engagement: {
      type: 'post',
      description: 'Engaged with a post mentioning SalesAI',
      color: 'orange'
    },
    lastActivity: '6 hours ago'
  },
  {
    id: '4',
    name: 'General Electric',
    title: 'Omar Unt · Staff Product Designer',
    company: 'General Electric',
    email: 'omar@ge.com',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face',
    status: 'active',
    engagement: {
      type: 'post',
      description: 'Engaged with a post from Nooks',
      color: 'yellow'
    },
    lastActivity: '1 day ago'
  },
  {
    id: '5',
    name: 'YellowJacket',
    title: 'Jack Young · CEO',
    company: 'YellowJacket',
    email: 'jack@yellowjacket.com',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&crop=face',
    status: 'replied',
    engagement: {
      type: 'review',
      description: 'G2 review from a competitor',
      color: 'purple'
    },
    lastActivity: '2 days ago'
  },
  {
    id: '6',
    name: 'OrangeTech',
    title: 'Brandon Ferreyra · CTO',
    company: 'OrangeTech',
    email: 'brandon@orangetech.com',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
    status: 'active',
    engagement: {
      type: 'company',
      description: 'Followed your company',
      color: 'orange'
    },
    lastActivity: '3 days ago'
  },
  {
    id: '7',
    name: 'Camoran',
    title: 'Noah Patrick · Senior Product Manager',
    company: 'Camoran',
    email: 'noah@camoran.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    status: 'active',
    engagement: {
      type: 'comment',
      description: 'Commented a competitor post',
      color: 'green'
    },
    lastActivity: '1 week ago'
  }
];

export const mockSequenceMetrics: SequenceMetrics = {
  active: 6184,
  completed: 303,
  totalAdded: 19560,
  open: 4301
};

export const mockAnalyticsData: AnalyticsData = {
  responseRate: {
    value: 23.4,
    change: 2.1,
    trend: 'up'
  },
  openRate: {
    value: 67.8,
    change: 5.2,
    trend: 'up'
  },
  meetingsBooked: {
    value: 47,
    change: -1.3,
    trend: 'down'
  }
};
