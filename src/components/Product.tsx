import { Locale } from 'data/languages';
import { Service, serviceNames } from 'data/share';
import { product } from 'data/sentences';
import Image from 'next/image';
import CartoonImage from '../../public/images/product/cartoon.png';
import CharactersImage from '../../public/images/product/outro-characters.png';
import ProductImage from '../../public/images/product/product.png';
import { logEvent } from './GA';
import SocialButton from './SocialButton';

const Product = ({ locale }: { locale: Locale }) => {
  const onImageRendered = () => {
    logEvent('product_shown', {});
  };
  const onClickLink = (service: Service) => {
    logEvent('product_click', {
      service,
    });
  };

  return (
    <section className="product-container">
      <header
        className="heading"
        style={{
          fontSize: '1.4rem',
        }}
      >
        {product.see_more[locale]}
      </header>
      <main>
        <div className="product-page">
          <Image
            src={CartoonImage}
            alt="상품 소개 이미지"
            onLoadingComplete={onImageRendered}
          />
        </div>
        <div className="outro product-page image-background">
          <div className="outro-flex-column">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '2px 1em',
              }}
            >
              <div
                style={{
                  width: '35%',
                }}
              >
                <Image src={CharactersImage} alt="" />
              </div>
              <div className="outro-title">
                <p
                  dangerouslySetInnerHTML={{ __html: product.outro[locale] }}
                />
              </div>
            </div>
            <div
              style={{
                aspectRatio: '1 / 1',
                position: 'relative',
                marginTop: '5px',
                borderRadius: '7px',
                overflow: 'hidden',
              }}
            >
              <Image src={ProductImage} alt="케이스 사진" layout="fill" />
            </div>
            <div className="profile-links">
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <li
                  style={{
                    backgroundColor: '#bbe3be',
                  }}
                  className="emphasize"
                  onClick={() => onClickLink('smartstore')}
                >
                  <a href="https://smartstore.naver.com/jasminegarden/products/6326234032">
                    <div className="profile-container">
                      <SocialButton
                        service="smartstore"
                        altText="스마트스토어로 이동"
                      />
                      <span>{serviceNames.smartstore[locale]}</span>
                    </div>
                  </a>
                </li>
                <li
                  style={{
                    backgroundColor: '#fcb78e',
                  }}
                  onClick={() => onClickLink('idus')}
                >
                  <a href="https://idus.kr/iwh52">
                    <div className="profile-container">
                      <SocialButton
                        service="idus"
                        altText="아이디어스로 이동"
                      />
                      <span>{serviceNames.idus[locale]}</span>
                    </div>
                  </a>
                </li>
                <li
                  style={{
                    backgroundColor: '#edd1f4',
                  }}
                  onClick={() => onClickLink('instagram')}
                >
                  <a href="https://instagram.com/azkm_friends">
                    <div className="profile-container enlarge-icon">
                      <SocialButton
                        service="instagram"
                        altText="인스타페이지로 이동"
                      />
                      <span>{serviceNames.instagram[locale]}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Product;
