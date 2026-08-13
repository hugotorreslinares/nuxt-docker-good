import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/products";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient Ornaments */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="max-w-3xl text-center">
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/about"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Learn About Us
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
             

              return (
                <div
                  key={product.sys.id}
                  className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm transition-transform hover:-translate-y-1"
                >
                  {product.fields.photo && (
                    <Image
                      src={`https:${product.fields.photo.fields.file.url}`}
                      alt={product.fields.name}
                      width={600}
                      height={600}
                    />
                  )}

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {product.fields.name}
                  </h3>

                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {documentToReactComponents(product.fields.description)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
