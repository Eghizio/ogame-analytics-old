import React from 'react';

export interface EmojiProps{
    symbol: string
}

const Emoji: React.FC<EmojiProps> = ({symbol}) => <span role="img" aria-label={symbol}>{symbol}</span>

export default Emoji;