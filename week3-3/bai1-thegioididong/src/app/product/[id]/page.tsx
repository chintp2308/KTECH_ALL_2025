/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "@/types/product";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;
export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  ).then((res) => res.json());

  if (!products || !Array.isArray(products)) {
    return [];
  }

  return products.slice(0, 20).map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      {
        next: {
          revalidate: 60,
          tags: [`product-${id}`],
        },
      }
    );

    if (!response.ok) {
      throw new Error("Product not found");
    }

    const product = await response.json();

    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-blue-500 hover:text-blue-700">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Chi tiết sản phẩm</span>
          </nav>

          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.png"}
                  alt={product.title}
                  className="object-cover"
                  fill
                  priority
                />
              </div>

              {/* Thumbnail images if multiple images exist */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images
                    .slice(1, 5)
                    .map((image: string, index: number) => (
                      <div
                        key={index}
                        className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${product.title} ${index + 2}`}
                          className="object-cover"
                          fill
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>

                {product.category && (
                  <p className="text-gray-600 mb-2">
                    Danh mục:{" "}
                    <span className="font-medium">{product.category.name}</span>
                  </p>
                )}

                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-red-600">
                    ${product.price}
                  </span>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 rounded-lg transition-colors">
                  Thêm vào giỏ hàng
                </button>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-colors">
                  Mua ngay
                </button>

                <Link
                  href="/"
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors block text-center"
                >
                  Quay lại trang chủ
                </Link>
              </div>

              {/* Product Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Thông tin chi tiết
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ID sản phẩm:</span>
                    <span className="font-medium">{product.id}</span>
                  </div>

                  {product.category && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Danh mục:</span>
                      <span className="font-medium">
                        {product.category.name}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-600">Giá:</span>
                    <span className="font-medium text-red-600">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Không tìm thấy sản phẩm
            </h1>
            <p className="text-gray-600 mb-4">
              Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <Link
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
