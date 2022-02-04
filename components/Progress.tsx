interface Props {
  max: number;
  value: number;
}

const Progress = ({ max, value }: Props) => {
  return <progress max={max} value={value}></progress>;
};

export default Progress;
