import { Search } from "lucide-react";

interface WireframePlaceholderProps {
  title?: string;
}

export default function WireframePlaceholder({ title = "Feature" }: WireframePlaceholderProps) {
  return (
    <div className="p-6 flex items-center justify-center h-full bg-gray-50">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6">
          <Search className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">Not part of main wireframe</h2>
        <p className="text-gray-600 mb-4">{title} is not included in this wireframe prototype</p>
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}