"use client"

import { useEffect, useState } from "react"
import { Stack } from "./ui/stack";

const OfflineBanner = () => {

  const [isOnline, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);


  return (
    <div className={!isOnline ? "border border-red-200 bg-red-50 p-2 mb-4 rounded-md" : ""}>
      {!isOnline && <Stack direction="row" gap={4} className="items-center" >
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        <p>You are offline.</p>
      </Stack>}
    </div>
  )



}

export { OfflineBanner }
