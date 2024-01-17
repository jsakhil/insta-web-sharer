import React from 'react';

interface InstagramShareButtonProps {
    imageUrl: string;
    caption: string;
}

const InstagramShareButton: React.FC<InstagramShareButtonProps> = ({ imageUrl, caption }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                if (imageUrl != '' && caption != '') {
                    const shareData = {
                        title: caption,
                        text: caption,
                        url: window.location.href,
                        image: imageUrl,
                        mimeType: 'image/jpg'
                    };
                    await navigator.share(shareData);
                }
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.warn('Web Share API not supported');
        }
    };

    return (
        <button onClick={handleShare}>Share on Instagram</button>
    );
};

export default InstagramShareButton;