export const Button = ({ children, onClick }: any) => (
  <button onClick={onClick} className="bg-blue-500 px-4 py-2 rounded text-white">
    {children}
  </button>
);
