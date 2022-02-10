/* eslint-disable @next/next/no-img-element */
interface Props {
  max: number;
  value: number;
}

const Progress = ({ max, value }: Props) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-wrapper">
      <div className="numbers">
        {value} / {max}
      </div>
      <div
        className={`progress-container image-background ${
          value === max ? 'end' : ''
        }`}
      >
        <div className="border-container">
          <div className="full-bar">
            <div className="bar" style={{ width: `${percentage}%` }} />
          </div>
        </div>
        <img
          className="indicator"
          src="/images/progress/indicator.png"
          alt=""
          style={{ left: `${percentage - 8}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
