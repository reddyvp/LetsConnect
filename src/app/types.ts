export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  interests: string[];
  distance: number;
  occupation?: string;
}

export interface Match {
  id: string;
  profile: Profile;
  matchedAt: Date;
  lastMessage?: string;
  unread?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export interface Chat {
  matchId: string;
  messages: Message[];
}
