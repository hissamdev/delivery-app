import axios from "axios";
import Image from "next/image";

export default async function Home() {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_LARAVEL_SERVER);

    return <div></div>;
}
