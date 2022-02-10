/* eslint-disable @next/next/no-img-element */
interface Props {
  max: number;
  value: number;
}

const Progress = ({ max, value }: Props) => {
  const percentage = (value / max) * 100;

  return (
    <div
      className={`progress-container image-background ${
        value === max ? 'end' : ''
      }`}
    >
      <div className="border-container">
        <div className="bar" style={{ width: `${percentage}%` }} />
      </div>
      <img
        className="indicator"
        src="/images/progress/indicator.png"
        alt=""
        style={{ left: `${percentage - 15}%` }}
      />
    </div>
  );
};

export default Progress;
