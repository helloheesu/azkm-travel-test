import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

interface Props {
  title?: string;
  url?: string;
  description?: string;
  img?: string;
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
  img: givenImg = '',
}: Props) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsRendered(true);

    if (window.Kakao) {
      // onLoad executes only on initial load
      setIsKakaoLoaded(true);
    }
  }, []);
  useEffect(() => {
    if (isKakaoLoaded && window.Kakao) {
      window.Kakao.init('462c5c22392a021d6cb372f4140a34a1');
      return () => window.Kakao.cleanup();
    }
  }, [isKakaoLoaded]);

  if (!isRendered) {
    return null;
  }

  const title = givenTitle || document.title;
  const url = givenUrl || document.location.href;
  const urlObj = new URL(url);
  const description = givenDescription;
  const shareable = !!navigator.share;
  const ogImage = document.querySelector<HTMLMetaElement>(
    'meta[property="og:image"]'
  );
  const img = givenImg || ogImage?.content;

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
        if (window.Kakao?.isInitialized()) {
          window.Kakao.Link.sendScrap({
            requestUrl: url,
            templateId: 70961,
            templateArgs: {
              path: urlObj.pathname,
            },
          });
        }
        // log 'kakao'
        // log when succeed
        break;
      case 'url':
        if (!!navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
        } else if (inputRef.current) {
          inputRef.current.select();
          await document.execCommand('copy');
        } else {
          break;
        }
        alert('클립보드에 주소가 복사되었어요');
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
      {isRendered && (
        <ul>
          <input
            className="hidden"
            ref={inputRef}
            type="text"
            defaultValue={url}
          />
          {shareable && <li onClick={() => onClick('share')}>공유하기</li>}
          {isKakaoLoaded && <li onClick={() => onClick('kakao')}>카카오</li>}
          <li onClick={() => onClick('url')}>URL</li>
        </ul>
      )}
    </div>
  );
};

export default Share;
