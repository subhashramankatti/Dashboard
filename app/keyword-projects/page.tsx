import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

const projects = [
  {
    id: 1,
    name: "Gaming Content",
    keywords: 24,
    articles: 18,
    status: "active",
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    name: "SEO Tutorials",
    keywords: 36,
    articles: 28,
    status: "active",
    lastUpdated: "1 week ago",
  },
  {
    id: 3,
    name: "Marketing Strategies",
    keywords: 15,
    articles: 12,
    status: "paused",
    lastUpdated: "3 weeks ago",
  },
  {
    id: 4,
    name: "Product Reviews",
    keywords: 42,
    articles: 31,
    status: "active",
    lastUpdated: "5 days ago",
  },
  {
    id: 5,
    name: "Tech Guides",
    keywords: 19,
    articles: 14,
    status: "completed",
    lastUpdated: "1 month ago",
  },
]

export default function KeywordProjectsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Keyword Projects</h1>
            <Button className="bg-blue-500 hover:bg-blue-600">Create New Project</Button>
          </div>

          <div className="mb-6">
            <Input placeholder="Search projects..." className="max-w-md" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3 pr-4 font-medium text-gray-700">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="pb-3 pr-4 font-medium text-gray-700">Project Name</th>
                  <th className="pb-3 pr-4 font-medium text-gray-700">Keywords</th>
                  <th className="pb-3 pr-4 font-medium text-gray-700">Articles</th>
                  <th className="pb-3 pr-4 font-medium text-gray-700">Status</th>
                  <th className="pb-3 pr-4 font-medium text-gray-700">Last Updated</th>
                  <th className="pb-3 pr-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 pr-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="py-3 pr-4 font-medium">{project.name}</td>
                    <td className="py-3 pr-4">{project.keywords}</td>
                    <td className="py-3 pr-4">{project.articles}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          project.status === "active"
                            ? "bg-green-100 text-green-800"
                            : project.status === "paused"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4">{project.lastUpdated}</td>
                    <td className="py-3 pr-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
