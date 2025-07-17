import Image from "next/image";
import { Smartphone } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full">
      <div className="relative w-full aspect-[27/1]">
        <Image
          src="/banner1.png"
          alt="Banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={75}
        />
      </div>

      {/* Main nav */}
      <div className="w-full bg-yellow-300 py-2 shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-2xl">PC Shop</div>
          </div>
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              aria-label="Tìm kiếm sản phẩm"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none bg-white sm:px-2 sm:text-sm"
            />
          </div>
          <div className="flex items-center space-x-6">
            <button
              aria-label="Đăng nhập vào tài khoản"
              className="hover:text-blue-700"
            >
              Đăng nhập
            </button>
            <button aria-label="Xem giỏ hàng" className="hover:text-blue-700">
              Giỏ hàng
            </button>
            <button aria-label="Xem bản đồ" className="hover:text-blue-700">
              Bản đồ
            </button>
          </div>
        </div>

        {/* Menu sản phẩm */}
        <nav className="container mx-auto mt-2 px-4">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href="/dtdd"
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-yellow-400 transition"
              >
                <Smartphone size={24} />

                <span>Điện thoại</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
