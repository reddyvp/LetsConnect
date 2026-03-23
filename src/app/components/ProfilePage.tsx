import { Settings, MapPin, Edit } from 'lucide-react';

export function ProfilePage() {
  const currentUser = {
    name: 'You',
    age: 25,
    bio: 'Living life to the fullest ✨ | Adventure seeker | Dog lover 🐕',
    photos: [
      'https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGNhc3VhbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTg2NzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    interests: ['Travel', 'Photography', 'Hiking', 'Food', 'Music'],
    distance: 0,
    occupation: 'Product Designer'
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white">
          <h1 className="text-2xl">Profile</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Profile photo */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-gray-200">
            <img
              src={currentUser.photos[0]}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50">
            <Edit className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="bg-white p-6 space-y-6">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <h2 className="text-3xl">{currentUser.name}</h2>
              <span className="text-2xl text-gray-600">{currentUser.age}</span>
            </div>
            {currentUser.occupation && (
              <p className="text-gray-600">{currentUser.occupation}</p>
            )}
          </div>

          <div>
            <h3 className="text-sm text-gray-500 mb-2">About Me</h3>
            <p className="text-gray-900">{currentUser.bio}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500 mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {currentUser.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-br from-pink-100 to-orange-100 text-gray-900 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t space-y-3">
            <button className="w-full py-3 text-left px-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span>Edit Profile</span>
                <Edit className="w-5 h-5 text-gray-400" />
              </div>
            </button>
            <button className="w-full py-3 text-left px-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span>Settings</span>
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
