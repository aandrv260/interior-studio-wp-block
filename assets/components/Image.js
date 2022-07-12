const PortfolioImage = ({ image }) =>
  image.id && <img className="portfolio-project__img" src={image.url} alt={image.alt} />;

export default PortfolioImage;
