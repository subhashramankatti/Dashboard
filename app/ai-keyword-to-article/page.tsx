import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

export default function AIKeywordToArticlePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">AI Keyword to Article</h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                Primary Keyword
              </label>
              <Input id="keyword" placeholder="e.g. best gaming laptops 2024" />
            </div>

            <div className="space-y-2">
              <label htmlFor="secondary-keywords" className="block text-sm font-medium text-gray-700">
                Secondary Keywords (optional)
              </label>
              <Input id="secondary-keywords" placeholder="e.g. gaming performance, budget gaming laptops" />
              <p className="text-sm text-gray-500">Separate multiple keywords with commas</p>
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
                  Word Count
                </label>
                <select id="wordCount" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="500">500 words</option>
                  <option value="1000">1000 words</option>
                  <option value="1500">1500 words</option>
                  <option value="2000">2000 words</option>
                  <option value="3000">3000 words</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                Additional Instructions (optional)
              </label>
              <textarea
                id="instructions"
                placeholder="Any specific requirements or points to include in the article..."
                className="w-full min-h-[100px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Save Settings</Button>
              <Button className="bg-blue-500 hover:bg-blue-600">Generate Article</Button>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
