import Image from 'next/image';
import { Service } from './Share';

const getButtonImgUrl = (service: Service) => `/images/social/${service}.png`;

interface Props {
  service: Service;
  altText?: string;
}
const SocialButton = ({ service, altText }: Props) => {
  return (
    <button>
      {altText && <span className="hidden">{altText}</span>}
      <div className="image-container">
        <Image
          src={getButtonImgUrl(service)}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </button>
  );
};

export default SocialButton;
