type Props = {
  title: string;
  year: string;
  content: string;
  bookIframe: JSX.Element;
};

const Flipbook = ({ bookIframe, content, title, year }: Props) => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
        {title}
      </h2>
      <h3 className="text-base md:text-xl text-gray-500 text-center">{year}</h3>
      <p className="text-base md:text-xl text-gray-500 text-center">
        {content}
      </p>
      <div className="mt-3">{bookIframe}</div>
    </div>
  );
};

export default Flipbook;
