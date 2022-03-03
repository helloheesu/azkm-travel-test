import NextLink from 'next/link';

interface Props extends React.ComponentProps<typeof NextLink> {
  text: string;
  onClick?: () => void;
}
const Link = ({ text, onClick, ...linkProps }: Props) => {
  return (
    <NextLink prefetch={true} {...linkProps}>
      <a
        className="button image-background content-container"
        onClick={onClick}
      >
        <div>{text}</div>
      </a>
    </NextLink>
  );
};

export default Link;
