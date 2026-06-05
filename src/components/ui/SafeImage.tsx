import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

const fallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="900" height="600" fill="%2310281f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter,ui-sans-serif,sans-serif" font-size="32" fill="%23f8fafc">Hình ảnh không tải được</text></svg>';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function SafeImage({ src, onError, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src?.toString());

  return (
    <img
      {...props}
      src={currentSrc}
      onError={(event) => {
        setCurrentSrc(fallback);
        if (typeof onError === 'function') onError(event);
      }}
    />
  );
}
