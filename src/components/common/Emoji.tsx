import React, { memo } from 'react';
import  twemoji from 'twemoji';

type EmojiProps = {
  emoji: string;
}

const Twemoji: React.FC<EmojiProps> = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      })
    }}
  />
)

export default memo(Twemoji);