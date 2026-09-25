"use client";

import { postReq } from "@/src/helpers/axiosHelpers";
import axios from "axios";

export default function Page() {
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        await postReq("/restaurants", {
            name: formData.get("name"),
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Enter Restaurant Name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
