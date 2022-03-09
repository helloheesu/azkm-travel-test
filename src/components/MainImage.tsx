import Image from 'next/image';

interface Props {
  src: React.ComponentProps<typeof Image>['src'];
  alt?: string;
  width?: number;
  height?: number;
}
const MainImage = ({ src, alt, width, height }: Props) => {
  return (
    <div className="light-background">
      <Image
        src={src}
        alt={alt}
        width={width || 2050}
        height={height || 1450}
        priority={true}
        loading="eager"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
};

export default MainImage;
