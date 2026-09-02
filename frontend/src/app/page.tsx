import Image from "next/image";
import { productSeed } from "../utils/product-seed";



export default function Home() {
  return (
    <main className="py-14">
      <div className="max-w-5xl m-auto">
        <h1 className="font-bold text-2xl">Explore our products</h1>
        <div className="mt-5 flex flex-col border-t border-gray-200">
          {
            productSeed.map((product) => (
              <div key={product.name} className="py-4 px-6 border-b border-gray-200 flex gap-6 hover:bg-black/1">
                <div>
                  <div className="mt-2 bg-gray-300 w-13 aspect-square"></div>
                </div>
                <div>
                  <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p>{product.desc}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <button className="inline-block px-4 py-1 bg-cyan-500 rounded-full text-sm text-white cursor-pointer">View</button>
                    <p className="font-bold">${product.price}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
