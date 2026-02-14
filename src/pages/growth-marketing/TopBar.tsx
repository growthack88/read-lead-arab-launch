const CHECKOUT_URL = "https://si51ve-s6.myshopify.com/cart/42908397895785:1?channel=buy_button";

const TopBar = () => (
  <div className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600/90 to-emerald-500/90 backdrop-blur py-2.5 text-center text-sm text-white font-medium">
    <a href={CHECKOUT_URL} className="hover:underline">
      🔥 عرض لفترة محدودة — 3 كتب + 9 أدوات تسويق مطبوعة + بونص رقمي = 1,499 ج.م بدل <span className="line-through">5,497 ج.م</span>
    </a>
  </div>
);

export default TopBar;
