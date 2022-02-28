import { Character } from 'data/character';
import Script from 'next/script';
import { RefObject, useEffect, useRef, useState } from 'react';
import { logEvent } from './GA';
import SocialButton from './SocialButton';

interface Props {
  title?: string;
  url?: string;
  description?: string;
  img?: string;
  character: Character;
  canvasRef: RefObject<HTMLCanvasElement>;
}

export type Service =
  | 'share'
  | 'kakao'
  | 'url'
  | 'download'
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
  canvasRef,
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
  const img = givenImg || ogImage?.content || '';

  const onClick = async (service: Service) => {
    logEvent('share', {
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
        break;
      case 'url':
        try {
          await navigator.clipboard.writeText(url);
        } catch (e) {
          try {
            inputRef.current!.select();
            await document.execCommand('copy');
          } catch (e) {
            alert('클립보드 복사에 실패했어요 ㅠㅠ 다른 방법을 이용해주세요');
          }
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
      case 'download':
        {
          console.log(canvasRef);
          const link = document.createElement('a');
          link.download = `${character}.png`;
          link.href = canvasRef.current ? canvasRef.current.toDataURL() : img;
          link.click();
        }
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
            <li onClick={() => onClick('download')}>
              <SocialButton service="download" altText="이미지 다운로드" />
            </li>
            <li onClick={() => onClick('facebook')}>
              <SocialButton service="facebook" altText="페이스북" />
            </li>
            <li onClick={() => onClick('twitter')}>
              <SocialButton service="twitter" altText="트위터" />
            </li>
            <li onClick={() => onClick('url')}>
              <input
                ref={inputRef}
                type="text"
                defaultValue={url}
                style={{
                  position: 'absolute',
                  left: '-999px',
                  top: '-999px',
                }}
              />
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
              <a
                href="https://www.flaticon.com/free-icons/download"
                title="download icons"
              >
                Download icons created by kosonicon - Flaticon
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Share;
