import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

const longtailKeywords = [
  { keyword: "how to fix a leaking faucet without calling a plumber", volume: 320, difficulty: "Low", cpc: "$1.20" },
  { keyword: "best budget gaming laptop under $800 for students", volume: 580, difficulty: "Medium", cpc: "$1.85" },
  {
    keyword: "easy vegan dinner recipes for beginners with limited time",
    volume: 430,
    difficulty: "Low",
    cpc: "$0.95",
  },
  { keyword: "how to start investing in stocks with little money", volume: 890, difficulty: "Medium", cpc: "$3.45" },
  {
    keyword: "natural remedies for anxiety and stress that actually work",
    volume: 760,
    difficulty: "Medium",
    cpc: "$2.10",
  },
]

export default function LongtailKeywordToArticlePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Longtail Keyword to Article</h1>

          <div className="mb-6 space-y-6">
            <div className="space-y-2">
              <label htmlFor="seed-keyword" className="block text-sm font-medium text-gray-700">
                Seed Keyword
              </label>
              <Input id="seed-keyword" placeholder="Enter a broad keyword (e.g., 'digital marketing')" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="keyword-intent" className="block text-sm font-medium text-gray-700">
                  Search Intent
                </label>
                <select
                  id="keyword-intent"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                >
                  <option value="all">All intents</option>
                  <option value="informational">Informational</option>
                  <option value="commercial">Commercial</option>
                  <option value="transactional">Transactional</option>
                  <option value="navigational">Navigational</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="keyword-count" className="block text-sm font-medium text-gray-700">
                  Number of Keywords
                </label>
                <select
                  id="keyword-count"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                >
                  <option value="10">10 keywords</option>
                  <option value="20" selected>
                    20 keywords
                  </option>
                  <option value="50">50 keywords</option>
                  <option value="100">100 keywords</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="excluded-terms" className="block text-sm font-medium text-gray-700">
                Excluded Terms (optional)
              </label>
              <Input id="excluded-terms" placeholder="Terms to exclude, separated by commas" />
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600">Generate Longtail Keywords</Button>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Generated Longtail Keywords</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 pr-4 font-medium text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Longtail Keyword</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Search Volume</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Difficulty</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">CPC</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {longtailKeywords.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="py-3 pr-4 font-medium">{item.keyword}</td>
                      <td className="py-3 pr-4">{item.volume}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            item.difficulty === "Low"
                              ? "bg-green-100 text-green-800"
                              : item.difficulty === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.difficulty}
                        </span>
                      </td>
                      <td className="py-3 pr-4">{item.cpc}</td>
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
