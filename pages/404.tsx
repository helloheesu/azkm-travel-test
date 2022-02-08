import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Custom404: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
};

export default Custom404;
