interface Props {
  max: number;
  value: number;
}

const Progress = ({ max, value }: Props) => {
  const ratio = value / max;
  return (
    <div
      className={`progress-container image-background ${
        value === max ? 'end' : ''
      }`}
    >
      <div className="border-container">
        <div className="bar" style={{ width: `${ratio * 100}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
