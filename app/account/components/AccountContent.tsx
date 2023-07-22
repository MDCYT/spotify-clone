"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent = () => {
    const router = useRouter();
    const { isLoading, user } = useUser();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/')
        }
    }, [isLoading, user, router])

    return (
        <div className="mb-7 px-6">
            <div className="flex flex-col gap-y-4">
                {/* Email and username of account */}
                <div className="mb-2">Email: {user?.email}</div>
                <div className="mb-2">Name: {user?.user_metadata?.name || user?.user_metadata?.full_name}</div>

            </div>
        </div>
    );
}

export default AccountContent;