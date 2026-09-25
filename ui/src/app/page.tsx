import axios, { isAxiosError } from "axios";
import Image from "next/image";
import { getReq } from "../helpers/axiosHelpers";

export default async function Home() {
    const data = await getReq("/restaurants");

    return (
        <div>
            {!data || !data.length ? (
                <div>Nothing</div>
            ) : (
                <div>
                    {data.map((restaurant: any) => (
                        <div key={restaurant.id}>{restaurant.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
}
