export const Heading: React.FC = ({ children }) => {
  return (
    <h1
      className="text-6xl mt-4 mb-8 tracking-tighter text-gray-700 "
      style={{
        textShadow: "0px 2px 2px rgba(0,0,0,0.2), 0px 3px 4px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </h1>
  );
};
