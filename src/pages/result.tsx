import { logEvent, logPageview } from 'components/GA';
import BorderBox from 'components/BorderBox';
import ScoreMapContext from 'components/ScoreMapContext';
import { Locale } from 'data/languages';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import MainImage from 'components/MainImage';
import ImagePreLoader from 'components/ImagePreLoader';
import { result } from 'data/sentences';
import Link from 'components/Link';
import SocialButton from 'components/SocialButton';

interface Props {
  locale: Locale;
}
export const getStaticProps: GetStaticProps<Props> = ({ locale }) => {
  return {
    props: {
      locale: (locale as Locale) || 'ko',
    },
  };
};
const Result: NextPage<Props> = ({ locale }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { getHighestCharacter } = useContext(ScoreMapContext);
  const highestCharacter = getHighestCharacter();

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [highestCharacter, router]);

  useEffect(() => {
    logPageview('/loading');
  }, []);

  if (isLoading) {
    return (
      <div className="content-wrapper content-aligner">
        <ImagePreLoader
          src={'/images/product/product.png'}
          size={{
            width: 1000,
            height: 1000,
          }}
        />
        <BorderBox>
          <MainImage src={'/images/ui/loading.gif'} alt="로딩 이미지 설명" />
        </BorderBox>
        {result.loading[locale]}
      </div>
    );
  } else {
    return (
      <div className="content-wrapper content-aligner">
        <ImagePreLoader
          src={`/images/characters-with-pattern/${highestCharacter}.png`}
          size={{
            width: 2000,
            height: 2000,
          }}
        />
        <BorderBox>
          <a
            href="https://smartstore.naver.com/jasminegarden/products/6326234032"
            onClick={() =>
              logEvent('product_click', {
                service: 'loading',
              })
            }
          >
            <div
              className="light-background"
              style={{
                padding: '1em',
              }}
            >
              <div
                style={{
                  aspectRatio: '1 / 1',
                  position: 'relative',
                  borderRadius: '7px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={'/images/product/product.png'}
                  alt="케이스 사진"
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="profile-container">
                <SocialButton
                  service="smartstore"
                  altText="스마트스토어로 이동"
                />
                <span>
                  {result.product[locale]} {'>'}
                </span>
              </div>
            </div>
          </a>
        </BorderBox>
        <Link
          href={{
            pathname: '/[character]',
            query: { character: highestCharacter },
          }}
          as={`/${highestCharacter}`}
          text={result.continue[locale]}
        />
      </div>
    );
  }
};

export default Result;
