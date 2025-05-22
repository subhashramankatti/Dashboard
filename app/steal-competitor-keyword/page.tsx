import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

const competitorKeywords = [
  { keyword: "best gaming laptops", traffic: "12,500", difficulty: "Medium", cpc: "$1.20" },
  { keyword: "mechanical keyboards", traffic: "8,200", difficulty: "Low", cpc: "$0.85" },
  { keyword: "gaming mouse reviews", traffic: "5,800", difficulty: "Medium", cpc: "$0.95" },
  { keyword: "budget gaming pc build", traffic: "9,300", difficulty: "High", cpc: "$1.45" },
  { keyword: "gaming monitors 144hz", traffic: "7,600", difficulty: "Medium", cpc: "$1.10" },
]

export default function StealCompetitorKeywordPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Steal Competitor Keyword</h1>

          <div className="mb-6 space-y-6">
            <div className="space-y-2">
              <label htmlFor="competitor-url" className="block text-sm font-medium text-gray-700">
                Competitor URL
              </label>
              <Input id="competitor-url" placeholder="https://competitor-website.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="keyword-volume" className="block text-sm font-medium text-gray-700">
                  Minimum Search Volume
                </label>
                <select
                  id="keyword-volume"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                >
                  <option value="100">100+ monthly searches</option>
                  <option value="500" selected>
                    500+ monthly searches
                  </option>
                  <option value="1000">1,000+ monthly searches</option>
                  <option value="5000">5,000+ monthly searches</option>
                  <option value="10000">10,000+ monthly searches</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
                  Maximum Difficulty
                </label>
                <select id="difficulty" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="any">Any difficulty</option>
                  <option value="low">Low difficulty</option>
                  <option value="medium" selected>
                    Medium difficulty
                  </option>
                  <option value="high">High difficulty</option>
                </select>
              </div>
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600">Find Keywords</Button>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Discovered Keywords</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 pr-4 font-medium text-gray-700">Keyword</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Monthly Traffic</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Difficulty</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">CPC</th>
                    <th className="pb-3 pr-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorKeywords.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4 font-medium">{item.keyword}</td>
                      <td className="py-3 pr-4">{item.traffic}</td>
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
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
