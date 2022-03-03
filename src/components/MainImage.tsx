import Image from 'next/image';

interface Props {
  src: React.ComponentProps<typeof Image>['src'];
  alt?: string;
}
const MainImage = ({ src, alt }: Props) => {
  return (
    <div className="main-image">
      <Image
        src={src}
        alt={alt}
        width={2050}
        height={1450}
        priority={true}
        loading="eager"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
};

export default MainImage;
