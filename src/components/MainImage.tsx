import Image from 'next/image';

interface Props {
  src: React.ComponentProps<typeof Image>['src'];
  alt?: string;
  containerClassName?: string;
}
const MainImage = ({ src, alt, containerClassName }: Props) => {
  return (
    <div
      className={
        'main-image image-background content-container' +
        (containerClassName || '')
      }
    >
      <div className="size-container">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          priority={true}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default MainImage;
