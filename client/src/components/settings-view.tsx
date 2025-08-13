import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsView() {
  return (
    <div className="flex h-full" data-testid="settings-view">
      <div className="flex-1 p-6">
        <Card className="border-2 border-dashed border-gray-300" data-testid="settings-empty-state">
          <CardContent className="p-12 text-center">
            <div className="mb-6">
              <Settings className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Settings
              </h3>
              <p className="text-gray-500">Settings will be available here.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
