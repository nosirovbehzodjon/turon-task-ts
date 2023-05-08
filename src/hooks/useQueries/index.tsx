import { useQuery } from "@tanstack/react-query";

type Arguments = {
    main_key?: string;
    url?: string;
};
const useQueries = (config: Arguments) => {
    return useQuery(
        [config.main_key],
        async () =>
            await fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}${config.url}`, {
                method: "GET",
                headers: {
                    "secret-token": "32ddd0a5-a2b0-4cb0-b5bd-952e5bc3f8db",
                    "Content-Type": "application/json",
                },
            }).then((result) => result.json())
    );
};

export default useQueries;
