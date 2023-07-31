import { CloudOff } from "lucide-react";

export default function OfflinePage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800">You are offline</h1>
        <p className="text-center text-gray-600">Please check your internet connection</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <CloudOff size={128} />
      </div>
    </div>
  )
}
