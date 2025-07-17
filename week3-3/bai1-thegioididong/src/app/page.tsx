import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}
async function getProducts() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  );
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center font-bold text-3xl pb-5">
          Sản phẩm nổi bật
        </h1>

        <div className="grid grid-cols-5 gap-6">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col   p-4 hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.images[0] || "/placeholder.png"}
                  alt={product.title}
                  className="object-cover rounded-lg"
                  fill
                  priority
                />
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-lg  text-gray-800 h-15 overflow-hidden">
                  {product.title}
                </h3>
                <p className="text-primary font-bold text-red-500">
                  ${product.price}
                </p>
              </div>
              <div className="mt-4 space-y-2 w-full">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-1.5 rounded-lg transition">
                  Thêm vào giỏ hàng
                </button>
                <Link
                  href={`/product/${product.id}`}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 rounded-lg transition block text-center"
                >
                  Xem chi tiết
                </Link>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-1.5 rounded-lg transition">
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
