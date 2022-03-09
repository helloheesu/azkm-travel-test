import { logEvent, logPageview } from 'components/GA';
import BorderBox from 'components/BorderBox';
import { Locale } from 'data/languages';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import ImagePreLoader from 'components/ImagePreLoader';
import { result } from 'data/sentences';
import Link from 'components/Link';
import SocialButton from 'components/SocialButton';
import { Character, characters } from 'data/character';
import { ParsedUrlQuery } from 'querystring';
import MainImage from 'components/MainImage';

interface StaticProps extends ParsedUrlQuery {
  character: Character;
}
export const getStaticPaths: GetStaticPaths<StaticProps> = ({
  locales = ['ko', 'en'],
}) => {
  const paths = characters.flatMap((character) =>
    locales.map((locale) => ({
      params: {
        character: character,
      },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  character: Character;
  locale: Locale;
}
export const getStaticProps: GetStaticProps<Props> = ({ params, locale }) => {
  const character = params!.character as Character;
  return {
    props: {
      character,
      locale: (locale as Locale) || 'ko',
    },
  };
};

const Result: NextPage<Props> = ({ character, locale }) => {
  useEffect(() => {
    logPageview('/continue');
  }, []);

  return (
    <div className="content-wrapper content-aligner">
      <ImagePreLoader
        src={`/images/characters-with-pattern/${character}.png`}
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
              <MainImage
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
          query: { character },
        }}
        as={`/${character}`}
        text={result.continue[locale]}
        locale={locale}
      />
    </div>
  );
};

export default Result;
