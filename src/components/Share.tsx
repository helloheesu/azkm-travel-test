import Script from 'next/script';
import { useEffect, useState } from 'react';

interface Props {
  title?: string;
  url?: string;
  description?: string;
}

type Service = 'share' | 'kakao' | 'url';
declare global {
  interface Window {
    Kakao: any;
  }
}

const Share = ({
  title: givenTitle = '',
  url: givenUrl = '',
  description: givenDescription = '',
}: Props) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  useEffect(() => {
    setIsAllLoaded(isRendered && isKakaoLoaded);
  }, [isKakaoLoaded, isRendered]);
  useEffect(() => {
    if (isKakaoLoaded) {
      window.Kakao.init('462c5c22392a021d6cb372f4140a34a1');
    }
  }, [isKakaoLoaded]);

  if (!isRendered) {
    return null;
  }

  const title = givenTitle || document.title;

  const canonical = document.querySelector<HTMLLinkElement>(
    'link[rel=canonical]'
  );
  const url = givenUrl || (canonical ? canonical.href : document.location.href);
  const description = givenDescription;
  const shareable = !!navigator.share;

  const onClick = async (service: Service) => {
    switch (service) {
      case 'share':
        await navigator.share({
          title,
          url,
          text: description,
        });
        // log 'share'
        break;
      case 'kakao':
        console.log('URL', url);

        window.Kakao.Link.sendScrap({
          requestUrl: url,
        });
        // log 'kakao'
        break;
      default:
        break;
    }
  };

  return (
    <div className="share">
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
        onLoad={() => setIsKakaoLoaded(true)}
      />
      {isAllLoaded && (
        <ul>
          {shareable && <li onClick={() => onClick('share')}>공유하기</li>}
          <li onClick={() => onClick('kakao')}>카카오</li>
          <li onClick={() => onClick('url')}>URL</li>
        </ul>
      )}
    </div>
  );
};

export default Share;
