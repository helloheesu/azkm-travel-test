import { Locale } from 'data/languages';
import Image from 'next/image';
import ProductImage from '../../public/images/main/product.jpeg';
import SocialButton from './SocialButton';

const Product = ({ locale }: { locale: Locale }) => {
  return (
    <section className="product-container">
      <header className="heading">
        <h1>
          {{ ko: '아찌끄미 캐릭터 더 보기', en: 'See more about AZKM' }[locale]}
        </h1>
      </header>
      <div className="profile-links">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/azkm_friends"
              rel="noreferrer"
            >
              <div className="profile-container">
                <SocialButton
                  service="instagram"
                  altText="인스타페이지로 이동"
                />
                <span>azkm_friends</span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://smartstore.naver.com/jasminegarden/products/6326234032"
              rel="noreferrer"
            >
              <div className="profile-container">
                <SocialButton
                  service="smartstore"
                  altText="스마트스토어로 이동"
                />
                <span>
                  {{ ko: '아찌끄미 공식 스토어', en: 'Smartstore' }[locale]}
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://smartstore.naver.com/jasminegarden/products/6326234032"
              rel="noreferrer"
            >
              <div className="profile-container">
                <SocialButton service="idus" altText="아이디어스로 이동" />
                <span>
                  {{ ko: '아찌끄미 작가 페이지', en: 'Idus' }[locale]}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="product-detail">
        <Image src={ProductImage} alt="상품 소개 이미지" />
      </div>
    </section>
  );
};

export default Product;
