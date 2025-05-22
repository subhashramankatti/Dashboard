import type React from "react"
import {
  ChevronDown,
  Settings,
  BarChart,
  Link,
  BookOpen,
  Layers,
  Users,
  HelpCircle,
  MessageSquare,
  User,
} from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-white">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold">abun</h2>
        </div>

        <div className="mb-4 flex items-center rounded-full border p-1 pl-2">
          <div className="mr-2 h-4 w-4 rounded-full bg-purple-500"></div>
          <span className="text-sm">amazon.com</span>
          <ChevronDown className="ml-auto h-4 w-4" />
        </div>

        <nav className="space-y-1">
          <SidebarItem icon={Layers} text="Articles" active dropdown>
            <SidebarSubItem text="Create Article" />
            <SidebarSubItem text="Generated Articles" active />
            <SidebarSubItem text="Flagged Projects" />
            <SidebarSubItem text="AI Keyword to Article" />
            <SidebarSubItem text="Seed Generated Keyword" />
            <SidebarSubItem text="Import Keyword from CSV" />
            <SidebarSubItem text="Manual Keyword to Article" />
            <SidebarSubItem text="Bulk Keyword to Article" />
            <SidebarSubItem text="Longform Keyword to Article" />
            <SidebarSubItem text="Article Settings" />
          </SidebarItem>
          <SidebarItem icon={BarChart} text="Auto Blog" />
          <SidebarItem icon={Link} text="Internal Links" />
          <SidebarItem icon={BookOpen} text="Free Booklets" />
          <SidebarItem icon={Layers} text="Integrations" />
          <SidebarItem icon={Settings} text="Subscription" />
          <SidebarItem icon={Users} text="Affiliate Program" />
          <SidebarItem icon={HelpCircle} text="Help Center" />
          <SidebarItem icon={Settings} text="Updates" />
          <SidebarItem icon={MessageSquare} text="Live Chat Support" />
          <SidebarItem icon={User} text="Profile" />
        </nav>
      </div>
    </div>
  )
}

function SidebarItem({
  icon: Icon,
  text,
  active = false,
  dropdown = false,
  children,
}: {
  icon: any
  text: string
  active?: boolean
  dropdown?: boolean
  children?: React.ReactNode
}) {
  return (
    <div>
      <div
        className={`flex items-center rounded-md px-3 py-2 text-sm ${active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
      >
        <Icon className="mr-2 h-4 w-4" />
        <span>{text}</span>
        {dropdown && <ChevronDown className="ml-auto h-4 w-4" />}
      </div>
      {children && <div className="ml-6 mt-1 space-y-1">{children}</div>}
    </div>
  )
}

function SidebarSubItem({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <div className={`rounded-md px-3 py-1 text-sm ${active ? "text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}>
      {text}
    </div>
  )
}
