import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_LARAVEL_SERVER;

// Include "/" when passing route
export async function getReq(route: string) {
    try {
        const res = await axios.get(`${SERVER_URL}${route}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                // 2. Server responded with a status code outside the 2xx range
                console.error("Status:", error.response.status); // e.g., 404, 500
                console.error("Data:", error.response.data); // Backend error message
                console.error("Headers:", error.response.headers);
            } else if (error.request) {
                // 3. Request was made but no response was received (e.g., Network down)
                console.error("No response received:", error.request);
            } else {
                // 4. Something went wrong while setting up the request
                console.error("Request setup error:", error.message);
            }

            // Bonus: Check for specific codes (like timeouts)
            if (error.code === "ECONNABORTED") {
                console.error("The request timed out.");
            }
        } else {
            // 5. Non-Axios / Generic JavaScript error
            console.error("Unexpected error:", error);
        }
    }
}
