import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

export default function ManualKeywordToArticlePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Manual Keyword to Article</h1>

          <div className="mb-6 border-b">
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-blue-500 border-b-2 border-blue-500 font-medium">Basic Settings</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Advanced Settings</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Article Outline</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="primary-keyword" className="block text-sm font-medium text-gray-700">
                Primary Keyword
              </label>
              <Input id="primary-keyword" placeholder="Enter your main keyword" />
            </div>

            <div className="space-y-2">
              <label htmlFor="secondary-keywords" className="block text-sm font-medium text-gray-700">
                Secondary Keywords (optional)
              </label>
              <Input id="secondary-keywords" placeholder="Enter secondary keywords, separated by commas" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="word-count" className="block text-sm font-medium text-gray-700">
                  Word Count
                </label>
                <select id="word-count" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="500">500 words</option>
                  <option value="1000">1000 words</option>
                  <option value="1500" selected>
                    1500 words
                  </option>
                  <option value="2000">2000 words</option>
                  <option value="3000">3000 words</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
                  Tone of Voice
                </label>
                <select id="tone" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="informative" selected>
                    Informative
                  </option>
                  <option value="conversational">Conversational</option>
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="authoritative">Authoritative</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="target-audience" className="block text-sm font-medium text-gray-700">
                Target Audience
              </label>
              <Input id="target-audience" placeholder="Who is this article for?" />
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Back</Button>
              <Button className="bg-blue-500 hover:bg-blue-600">Next: Advanced Settings</Button>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
