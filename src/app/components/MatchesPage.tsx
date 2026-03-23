import { useNavigate } from 'react-router';
import { matches } from '../data/mockData';
import { Heart } from 'lucide-react';

export function MatchesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        <h1 className="text-3xl mb-6">Matches</h1>
        
        {matches.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Heart className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl mb-2 text-gray-600">No matches yet</h2>
            <p className="text-gray-500">Start swiping to find your perfect match!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {matches.map((match) => (
              <button
                key={match.id}
                onClick={() => navigate(`/chat/${match.id}`)}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={match.profile.photos[0]}
                      alt={match.profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {match.unread && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-lg">{match.profile.name}</h3>
                    <span className="text-sm text-gray-500">{match.profile.age}</span>
                  </div>
                  {match.lastMessage && (
                    <p className={`text-sm truncate ${match.unread ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                      {match.lastMessage}
                    </p>
                  )}
                </div>
                
                <div className="text-xs text-gray-400">
                  {formatTimestamp(match.matchedAt)}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function formatTimestamp(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  return `${days}d`;
}
