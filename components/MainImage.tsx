// next/image fill layout flickers
/* eslint-disable @next/next/no-img-element */
interface Props {
  src: string;
  alt?: string;
}
const MainImage = ({ src, alt }: Props) => {
  return (
    <div className="main-image image-background">
      <div className="size-container">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default MainImage;
