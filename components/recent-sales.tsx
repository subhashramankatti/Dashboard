import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>HT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">How to Improve Your Skills in League of Legends</p>
          <p className="text-sm text-muted-foreground">Published 20 hours ago</p>
        </div>
        <div className="ml-auto font-medium">4575 words</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">How to Master Last Hitting in League of Legends</p>
          <p className="text-sm text-muted-foreground">Published 21 hours ago</p>
        </div>
        <div className="ml-auto font-medium">3480 words</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>BT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">7 Tips for Better Teamplay in League of Legends</p>
          <p className="text-sm text-muted-foreground">Published a day ago</p>
        </div>
        <div className="ml-auto font-medium">2676 words</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>VE</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Top Virtual Executive Assistant Services (2024)</p>
          <p className="text-sm text-muted-foreground">Published 1 Oct, 24</p>
        </div>
        <div className="ml-auto font-medium">2408 words</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>UG</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Unlimited Graphics Design Solutions</p>
          <p className="text-sm text-muted-foreground">Draft</p>
        </div>
        <div className="ml-auto font-medium">1793 words</div>
      </div>
    </div>
  )
}
