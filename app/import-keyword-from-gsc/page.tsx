import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

const gscKeywords = [
  { keyword: "content marketing strategy", clicks: 1245, impressions: 15600, position: 3.2 },
  { keyword: "seo best practices", clicks: 987, impressions: 12400, position: 4.1 },
  { keyword: "keyword research tools", clicks: 876, impressions: 9800, position: 2.8 },
  { keyword: "backlink analysis", clicks: 654, impressions: 7200, position: 5.3 },
  { keyword: "google search console tips", clicks: 543, impressions: 6500, position: 3.7 },
]

export default function ImportKeywordFromGSCPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Import Keyword from GSC</h1>

          <div className="mb-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Google Search Console</h3>
                <p className="text-sm text-gray-500">Connect your GSC account to import keywords</p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Connect GSC</Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="property" className="block text-sm font-medium text-gray-700">
                  Select Property
                </label>
                <select id="property" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="">Select property</option>
                  <option value="example.com">example.com</option>
                  <option value="blog.example.com">blog.example.com</option>
                  <option value="store.example.com">store.example.com</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                  Date Range
                </label>
                <select id="date-range" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="7">Last 7 days</option>
                  <option value="28">Last 28 days</option>
                  <option value="90">Last 3 months</option>
                  <option value="180">Last 6 months</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="min-clicks" className="block text-sm font-medium text-gray-700">
                  Minimum Clicks
                </label>
                <Input id="min-clicks" type="number" placeholder="e.g. 10" />
              </div>

              <div className="space-y-2">
                <label htmlFor="min-impressions" className="block text-sm font-medium text-gray-700">
                  Minimum Impressions
                </label>
                <Input id="min-impressions" type="number" placeholder="e.g. 100" />
              </div>
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600">Import Keywords</Button>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Imported Keywords</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 pr-4 font-medium text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Keyword</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Clicks</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Impressions</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Position</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gscKeywords.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="py-3 pr-4 font-medium">{item.keyword}</td>
                      <td className="py-3 pr-4">{item.clicks.toLocaleString()}</td>
                      <td className="py-3 pr-4">{item.impressions.toLocaleString()}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            item.position < 3.5
                              ? "bg-green-100 text-green-800"
                              : item.position < 5.5
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.position.toFixed(1)}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                          Generate Article
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <Button className="bg-blue-500 hover:bg-blue-600">Generate Articles for Selected</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
