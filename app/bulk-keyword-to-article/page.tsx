import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { ChatWidget } from "@/components/chat-widget"

const queuedKeywords = [
  { keyword: "best gaming laptops 2024", traffic: "12,500", status: "Queued" },
  { keyword: "how to improve SEO", traffic: "8,200", status: "Queued" },
  { keyword: "content marketing strategies", traffic: "5,800", status: "Queued" },
  { keyword: "affiliate marketing for beginners", traffic: "4,300", status: "Processing" },
  { keyword: "social media marketing tips", traffic: "7,600", status: "Queued" },
]

export default function BulkKeywordToArticlePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Bulk Keyword to Article</h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                Keywords (one per line)
              </label>
              <textarea
                id="keywords"
                placeholder="best gaming laptops 2024&#10;how to improve SEO&#10;content marketing strategies"
                className="w-full min-h-[150px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              ></textarea>
              <p className="text-sm text-gray-500">Enter each keyword on a new line</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
                  Tone of Voice
                </label>
                <select id="tone" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="">Select tone</option>
                  <option value="professional">Professional</option>
                  <option value="conversational">Conversational</option>
                  <option value="friendly">Friendly</option>
                  <option value="authoritative">Authoritative</option>
                  <option value="technical">Technical</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="wordCount" className="block text-sm font-medium text-gray-700">
                  Word Count Per Article
                </label>
                <select id="wordCount" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="500">500 words</option>
                  <option value="1000">1000 words</option>
                  <option value="1500">1500 words</option>
                  <option value="2000">2000 words</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Keyword Queue</label>
              <div className="border rounded-md">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="p-3 font-medium text-gray-700">Keyword</th>
                      <th className="p-3 font-medium text-gray-700">Estimated Traffic</th>
                      <th className="p-3 font-medium text-gray-700">Status</th>
                      <th className="p-3 font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {queuedKeywords.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3">{item.keyword}</td>
                        <td className="p-3">{item.traffic}</td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              item.status === "Processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Clear Queue</Button>
              <Button className="bg-blue-500 hover:bg-blue-600">Generate Articles</Button>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
