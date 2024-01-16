import React from 'react';

interface InstagramShareButtonProps {
    imageUrl: string;
    caption: string;
}

const InstagramShareButton: React.FC<InstagramShareButtonProps> = ({ imageUrl, caption }) => {
    const handleShare = () => {
        console.log("🚀 ~ TEST")
    };

    return (
        <button onClick={handleShare}>Share on Instagram</button>
    );
};

export default InstagramShareButton;