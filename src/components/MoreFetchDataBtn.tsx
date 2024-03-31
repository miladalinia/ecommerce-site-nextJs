'use client'

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const MoreFetchDataBtn = ({ limit }: { limit: number }) => {
    const router = useRouter();
   
    const triggerRef = useCallback(
        (node: any) => {
            if (!node) return

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if(limit <= 90)
                            router.push(`/products?limit=${limit + 10}`, { scroll: false })
                        observer.disconnect()
                    }
                })
            }, {
                threshold:1,
                rootMargin:"100px",
            });
            observer.observe(node)
        },
        [limit]
    )

    return (
        <div ref={triggerRef} className="p-4 mt-4 rounded text-white text-center bg-red-400">
           Loading...
        </div>
    );
};

export default MoreFetchDataBtn;