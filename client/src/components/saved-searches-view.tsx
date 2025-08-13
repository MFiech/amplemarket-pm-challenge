import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Send, MoreHorizontal } from "lucide-react";

type Mode = "empty" | "prefilled-v1" | "prefilled-v2";

interface SavedSearchesViewProps {
  mode?: Mode;
  onNavigateToSearcher?: () => void;
}

export default function SavedSearchesView({ mode = "empty", onNavigateToSearcher }: SavedSearchesViewProps) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Saved Searches</h1>
          <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded border border-gray-300 cursor-default">
            New Search
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {/* Selection bar */}
          <div className="border-b border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-600">0 Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-200 h-8 w-20 rounded"></div>
                  <div className="bg-gray-200 h-8 w-16 rounded"></div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                1 of 1
              </div>
            </div>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-12">
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableHead>
                <TableHead className="text-gray-600 font-medium">NAME</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">REMAINING</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">EXCLUDED</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">CONTACTED</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">CREATED ON</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">UPDATED ON</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">OWNER</TableHead>
                <TableHead className="text-gray-600 font-medium text-center">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell>
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-medium">
                      Prospects engaging with your competitors within last 7 days
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-gray-900 font-medium">43</TableCell>
                <TableCell className="text-center text-gray-500">0</TableCell>
                <TableCell className="text-center text-gray-900">0</TableCell>
                <TableCell className="text-center">
                  <div className="bg-gray-200 h-4 w-16 mx-auto rounded"></div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="bg-gray-200 h-4 w-16 mx-auto rounded"></div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="bg-gray-200 h-6 w-8 mx-auto rounded"></div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="bg-gray-200 h-6 w-6 rounded"></div>
                    <div className="bg-gray-200 h-6 w-6 rounded"></div>
                    <div className="bg-gray-200 h-6 w-6 rounded"></div>
                  </div>
                </TableCell>
              </TableRow>
              
              {(mode === "prefilled-v1" || mode === "prefilled-v2") && Array.from({ length: 10 }, (_, index) => (
                <TableRow key={`placeholder-${index}`} className="hover:bg-gray-50">
                  <TableCell>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </TableCell>
                  <TableCell>
                    <div className="bg-gray-200 h-4 w-64 rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-gray-200 h-4 w-12 mx-auto rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-gray-200 h-4 w-8 mx-auto rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-gray-200 h-4 w-8 mx-auto rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-gray-200 h-4 w-16 mx-auto rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-gray-200 h-4 w-16 mx-auto rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-gray-200 h-6 w-8 mx-auto rounded"></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <div className="bg-gray-200 h-6 w-6 rounded"></div>
                      <div className="bg-gray-200 h-6 w-6 rounded"></div>
                      <div className="bg-gray-200 h-6 w-6 rounded"></div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Educational row - only for empty state */}
        {mode === "empty" && (
          <div className="mt-6 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💡</span>
              <div className="flex-1 text-sm text-gray-600 leading-relaxed">
                Above is a sample saved search with the high-intent prospects that interacted with your competitors recently. 
                Any time you save any search configuration in Amplemarket{" "}
                <button 
                  className="text-gray-700 underline hover:text-gray-900 font-medium"
                  onClick={() => onNavigateToSearcher?.()}
                >
                  "Searcher"
                </button>
                , it'll appear here. Check our{" "}
                <a 
                  href="https://university.amplemarket.com/courses/saved-searches" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 underline hover:text-gray-900 font-medium"
                >
                  docs on how to use "Saved Searches"
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
