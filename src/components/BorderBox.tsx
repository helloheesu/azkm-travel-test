interface Props {
  children: React.ReactNode;
}
const BorderBox = ({ children }: Props) => {
  return (
    <div className="border-background-container">
      <div className="border-background nonselectable"></div>
      <div className="border-radius-mask">{children}</div>
    </div>
  );
};

export default BorderBox;
