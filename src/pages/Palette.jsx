import React from 'react';

const Palette = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Left Section: Players */}
            <div className="w-1/4 p-4 bg-gray-800 border-r border-gray-700">
                <h2 className="text-xl font-bold mb-4">Players</h2>
                {/* Players content goes here */}
                <div>
                    {/* Example player */}
                    <div className="bg-gray-700 p-2 mb-2 rounded">Player 1</div>
                    <div className="bg-gray-700 p-2 mb-2 rounded">Player 2</div>
                </div>
            </div>

            {/* Middle Section: Place & Story Narration */}
            <div className="flex-1 p-4 bg-gray-700">
                <h2 className="text-xl font-bold mb-4">Place & Story</h2>
                {/* Place & Story narration content goes here */}
                <div>
                    {/* Example story narration */}
                    <div className="bg-gray-600 p-4 rounded">
                        <p>The ancient forest is silent, save for the rustling of leaves and distant cries of mythical creatures...</p>
                    </div>
                </div>
            </div>

            {/* Right Section: Enemies */}
            <div className="w-1/4 p-4 bg-gray-800 border-l border-gray-700">
                <h2 className="text-xl font-bold mb-4">Enemies</h2>
                {/* Enemies content goes here */}
                <div>
                    {/* Example enemy */}
                    <div className="bg-gray-700 p-2 mb-2 rounded">Enemy 1</div>
                    <div className="bg-gray-700 p-2 mb-2 rounded">Enemy 2</div>
                </div>
            </div>
        </div>
    );
};

export default Palette;
