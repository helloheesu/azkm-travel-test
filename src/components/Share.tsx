type Service = 'share' | 'kakao' | 'url';
const Share = () => {
  const onClick = (service: Service) => {
    switch (service) {
      case 'share':
        alert(`can: ${navigator.canShare}, share: ${navigator.share}`);
        break;

      default:
        break;
    }
  };

  return (
    <ul>
      <li onClick={() => onClick('share')}>공유하기</li>
      <li onClick={() => onClick('kakao')}>카카오</li>
      <li onClick={() => onClick('url')}>URL</li>
    </ul>
  );
};

export default Share;
