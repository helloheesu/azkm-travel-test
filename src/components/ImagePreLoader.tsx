import Image from 'next/image';

interface Props {
  src: React.ComponentProps<typeof Image>['src'];
  size?: { width: number; height: number };
}
const ImagePreLoader = ({ src, size }: Props) => {
  return (
    <div className="preloader">
      <Image
        src={src}
        width={size?.width || 2050}
        height={size?.height || 1450}
        alt=""
      />
    </div>
  );
};

export default ImagePreLoader;
