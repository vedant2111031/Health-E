import React from 'react';

const chats = [
  {
    name: 'Dr. Ashish Mishra',
    specialty: 'Physician',
    message: 'Hello, how are you feeling? Did you manage',
    time: '9:12',
    unreadCount: 1,
  },
  {
    name: 'Dr. Anurag Agarwal',
    specialty: 'Orthopedic',
    message: 'Described Medicines are these',
    time: '8:01',
    unreadCount: 3,
  },
  // Add more chat objects as needed
];

const ChatList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>
      <div className="space-y-4">
        {chats.map((chat, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="" // Replace with actual image URLs if available
                  alt={chat.name}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-500">{chat.specialty}</p>
                <p className="text-sm text-gray-700">{chat.message}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-500">{chat.time}</span>
              {chat.unreadCount > 0 && (
                <span className="flex items-center justify-center h-6 w-6 bg-red-500 text-white text-xs font-bold rounded-full">
                  {chat.unreadCount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;