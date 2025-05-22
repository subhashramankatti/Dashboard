import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

export default function CreateArticlePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Create Article</h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Article Title
              </label>
              <Input id="title" placeholder="Enter article title" />
            </div>

            <div className="space-y-2">
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                Primary Keyword
              </label>
              <Input id="keyword" placeholder="Enter primary keyword" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select id="category" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option value="">Select category</option>
                  <option value="technology">Technology</option>
                  <option value="marketing">Marketing</option>
                  <option value="business">Business</option>
                  <option value="health">Health</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="wordCount" className="block text-sm font-medium text-gray-700">
                  Target Word Count
                </label>
                <Input id="wordCount" type="number" placeholder="e.g. 1500" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Article Content
              </label>
              <textarea
                id="content"
                placeholder="Write your article content here..."
                className="w-full min-h-[300px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-blue-500 hover:bg-blue-600">Create Article</Button>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
