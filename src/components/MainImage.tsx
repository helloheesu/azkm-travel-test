import Image from 'next/image';

interface Props {
  src: string;
  alt?: string;
}
const MainImage = ({ src, alt }: Props) => {
  return (
    <div className="main-image image-background content-container">
      <div className="size-container">
        <Image src={src} alt={alt} layout="fill" priority={true} />
      </div>
    </div>
  );
};

export default MainImage;
