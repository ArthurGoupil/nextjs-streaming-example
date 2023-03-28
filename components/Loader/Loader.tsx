import './loader.css';

type LoaderProps = {
  text: string;
};

export const Loader = ({ text }: LoaderProps) => (
  <span
    style={{
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }}
    className="loader"
  >
    {text}
  </span>
);
