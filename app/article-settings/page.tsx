import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { ChatWidget } from "@/components/chat-widget"

export default function ArticleSettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Article Settings</h1>

          <div className="mb-6 border-b">
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-blue-500 border-b-2 border-blue-500 font-medium">General</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">AI Settings</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">SEO</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Publishing</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="default-category" className="block text-sm font-medium text-gray-700">
                Default Category
              </label>
              <select
                id="default-category"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              >
                <option value="">Select default category</option>
                <option value="technology">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="default-word-count" className="block text-sm font-medium text-gray-700">
                Default Word Count
              </label>
              <select
                id="default-word-count"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              >
                <option value="500">500 words</option>
                <option value="1000">1000 words</option>
                <option value="1500">1500 words</option>
                <option value="2000">2000 words</option>
                <option value="3000">3000 words</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="auto-save" className="block text-sm font-medium text-gray-700">
                  Auto-save drafts
                </label>
                <p className="text-sm text-gray-500">Automatically save article drafts every 5 minutes</p>
              </div>
              <div className="relative inline-flex items-center">
                <input type="checkbox" id="auto-save" className="sr-only" />
                <div className="h-6 w-11 rounded-full bg-gray-200 transition peer-checked:bg-blue-600"></div>
                <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="notifications" className="block text-sm font-medium text-gray-700">
                  Email notifications
                </label>
                <p className="text-sm text-gray-500">Receive email notifications when articles are generated</p>
              </div>
              <div className="relative inline-flex items-center">
                <input type="checkbox" id="notifications" className="sr-only" />
                <div className="h-6 w-11 rounded-full bg-gray-200 transition peer-checked:bg-blue-600"></div>
                <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition"></div>
              </div>
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600">Save Settings</Button>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
