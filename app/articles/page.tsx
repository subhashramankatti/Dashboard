import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { ArticlesTable } from "@/components/articles-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Articles",
  description: "Manage your articles and content.",
}

export default function ArticlesPage() {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
        </div>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Articles</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Articles</CardTitle>
                <CardDescription>View and manage all your articles.</CardDescription>
              </CardHeader>
              <CardContent>
                <ArticlesTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="published" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Published Articles</CardTitle>
                <CardDescription>View and manage your published articles.</CardDescription>
              </CardHeader>
              <CardContent>
                <ArticlesTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Articles</CardTitle>
                <CardDescription>View and manage your scheduled articles.</CardDescription>
              </CardHeader>
              <CardContent>
                <ArticlesTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="drafts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Draft Articles</CardTitle>
                <CardDescription>View and manage your draft articles.</CardDescription>
              </CardHeader>
              <CardContent>
                <ArticlesTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
