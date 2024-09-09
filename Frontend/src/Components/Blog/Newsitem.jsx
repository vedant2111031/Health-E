import React from 'react';

const Newsitem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    return (
        <div className='my-3 mx-4'>
            <div 
                className="relative rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
                style={{ marginTop: '30px', width: '100%' }}
            >
                {/* Source Badge */}
                <div className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-bold">
                    {source || "Unknown"}
                </div>

                {/* Image Section */}
                <img 
                    src={imageUrl || "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1642515924.png?resize=980:*"} 
                    className="w-full h-48 object-cover" 
                    alt="News" 
                />

                {/* Card Body */}
                <div className="p-4">
                    <h5 className="text-lg font-semibold text-gray-800 truncate" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {title || "No Title Available"}
                    </h5>
                    <p 
                        className="text-gray-600 text-sm mt-2 transition-transform duration-300 transform hover:scale-105 hover:text-lg overflow-hidden hover:overflow-visible"
                        style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
                    >
                        {description || "No Description Available"}
                    </p>
                    <p className="text-gray-500 text-xs mt-2 truncate">
                        By {author || "Unknown"} on {new Date(date).toLocaleString()}
                    </p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Newsitem;
