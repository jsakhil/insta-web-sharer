declare module 'insta-web-sharer' {
    export interface InstagramShareButtonProps {
        imageUrl: string;
        caption: string;
        currentColor?: string;
    }

    export const InstagramShareButton: React.FC<InstagramShareButtonProps>;
}