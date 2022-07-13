export const ImageBox = ({ direction, children }) => (
  <div className="portfolio-project__img-box">{children}</div>
);

export const ImageGroup = ({ children }) => (
  <div className="portfolio-project__img-group">{children}</div>
);

export const TextBox = ({ children }) => (
  <div className="portfolio-project__text-box">{children}</div>
);

export const ImageLabel = ({ text }) => <p className="portfolio-project__label">{text}</p>;
