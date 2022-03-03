import Image from 'next/image';

interface Props {
  src: React.ComponentProps<typeof Image>['src'];
}
const ImagePreLoader = ({ src }: Props) => {
  return (
    <div className="preloader">
      {typeof src === 'string' ? (
        <Image src={src} width={2050} height={1450} alt="" />
      ) : (
        <Image src={src} alt="" />
      )}
    </div>
  );
};

export default ImagePreLoader;
