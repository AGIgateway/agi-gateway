// lib/whatsapp.ts
export const handleWhatsAppClick = (phoneNumber: string, message?: string) => {
    const defaultMessage = 'Hello! I would like to book a free consultation.';
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank', 'noopener,noreferrer');
};