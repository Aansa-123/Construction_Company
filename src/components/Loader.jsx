// Loader.jsx
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* rotating orange border */}
            <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>

            {/* center image */}
            <img
              src={"/loder-logo.png"}
              alt="Loading"
              className="w-20 h-20 rounded-full object-contain"
            />
          </div>
        </div>
  );
}
