export const Footer = () => {
  return (
    <footer className="bg-green-600 flex justify-center text-yellow-300 py-3">
      <a
        href="https://preciousplastic.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:border-yellow-300 border-b-4 border-transparent mt-1"
      >
        <small>Inspired by Precious Plastic</small>
        <img
          src="https://www.thetinyplasticfactory.co.nz/static/media/precious-plastic.bd9a1d55.png"
          alt="Precious Plastic logo"
          className="inline h-7 ml-2"
        />
      </a>
    </footer>
  );
};
