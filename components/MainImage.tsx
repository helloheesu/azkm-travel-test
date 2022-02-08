import Image from 'next/image';

interface Props {
  src: StaticImageData | string;
  alt?: string;
}
const MainImage = ({ src, alt }: Props) => {
  return (
    <div className="main-image">
      <div className="size-container">
        <div className="relative-container">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default MainImage;