import { Character } from 'data/character';
import ga from 'lib/ga';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import SocialButton from './SocialButton';

interface Props {
  title?: string;
  url?: string;
  description?: string;
  img?: string;
  character: Character;
}

export type Service =
  | 'share'
  | 'kakao'
  | 'url'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'smartstore'
  | 'idus'
  | 'github';
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
  character,
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
    ga.event('share', {
      method: service,
      item_id: character,
    });
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
        break;
      case 'facebook':
        window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
        break;
      case 'twitter':
        window.open(
          'https://twitter.com/intent/tweet?text=' + title + '&url=' + url
        );
        break;
      default:
        alert('아직 개발 중');
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
        <div className="image-background content-container">
          <ul>
            <input
              className="hidden"
              ref={inputRef}
              type="text"
              defaultValue={url}
            />
            {shareable && (
              <li onClick={() => onClick('share')}>
                <SocialButton service="share" altText="공유하기" />
              </li>
            )}
            {isKakaoLoaded && (
              <li onClick={() => onClick('kakao')}>
                <SocialButton service="kakao" altText="카카오" />
              </li>
            )}
            <li onClick={() => onClick('facebook')}>
              <SocialButton service="facebook" altText="페이스북" />
            </li>
            <li onClick={() => onClick('twitter')}>
              <SocialButton service="twitter" altText="트위터" />
            </li>
            <li onClick={() => onClick('url')}>
              <SocialButton service="url" altText="URL" />
            </li>
            <div className="hidden">
              <p>
                Icons made by{' '}
                <a
                  href="https://www.flaticon.com/authors/aficons-studio"
                  title="Aficons studio"
                >
                  Aficons studio
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </p>
              <p>
                Icons made by{' '}
                <a
                  href="https://www.flaticon.com/authors/riajulislam"
                  title="riajulislam"
                >
                  riajulislam
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </p>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Share;
