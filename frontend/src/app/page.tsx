import Image from "next/image";
import { productSeed } from "../utils/product-seed";



export default function Home() {
  return (
    <main>
      <div>
        {
          productSeed.map((product) => (
            <div>

            </div>
          ))
        }
      </div>
    </main>
  );
}
