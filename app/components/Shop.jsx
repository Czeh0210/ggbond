export default function Shop() {
  return (
    <div className="shop-container relative group">
      <img 
        src="/shop.png" 
        alt="Shop" 
        className="w-[8vw] h-[8vw] min-w-[60px] min-h-[60px] max-w-[120px] max-h-[120px] object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
      />
      <div className="tooltip absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-100 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Open Shop
      </div>
    </div>
  );
}