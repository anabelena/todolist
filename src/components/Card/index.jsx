export default function Card({ children, className }) {
  return (
    <div className={`bg-blue-500/30 bg-white border shadow w-[90%] mx-auto rounded px-4 py-2 mt-2.5 ${className}`}>    
      {children}
    </div>
  );
}

