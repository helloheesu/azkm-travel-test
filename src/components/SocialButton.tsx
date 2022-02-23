import Image from 'next/image';
import { Service } from './Share';

const getButtonImgUrl = (service: Service) => `/images/social/${service}.png`;

interface Props {
  service: Service;
  altText?: string;
  onLoadingComplete?: React.ComponentProps<typeof Image>['onLoadingComplete'];
}
const SocialButton = ({ service, altText, onLoadingComplete }: Props) => {
  return (
    <button>
      {altText && <span className="hidden">{altText}</span>}
      <div
        className="image-container"
        style={{
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={getButtonImgUrl(service)}
          alt=""
          layout="fill"
          objectFit="contain"
          onLoadingComplete={onLoadingComplete}
        />
      </div>
    </button>
  );
};

export default SocialButton;
