import { useState } from 'react';
import Image from 'next/image';
import type { IGeneralImage } from '@/shared/models/generalinterfaces';
import { formatDate } from '@/shared/util/formatDate';

interface IIdeaCard {
  image: IGeneralImage;
  createdAt: string;
  title: string;
}

const IdeaCard = ({ image, createdAt, title }: IIdeaCard) => {
  const [imgSrc, setImgSrc] = useState(image.url);
  const FALLBACK_IMAGE = '/img/fallback.png';

  return (
    <div className="h-h-full w-full rounded-md shadow-sm">
      <div className="relative aspect-[15/10] h-[200px] w-full min-w-[200px]">
        <Image
          src={imgSrc}
          alt={image.file_name}
          className="rounded-t-md object-cover"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          loading="lazy"
          fill
        />
      </div>
      <div className="space-y-2 p-4">
        <p className="text-[14px] text-gray-500">{formatDate(createdAt)}</p>
        <p className="line-clamp-3 font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default IdeaCard;
