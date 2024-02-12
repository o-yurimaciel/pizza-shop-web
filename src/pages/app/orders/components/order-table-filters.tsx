import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filters: </span>
      <Input className="h-8 w-[320px]" type="text" placeholder="Client name" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">In Processing</SelectItem>
          <SelectItem value="delivering">In delivery</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filter
      </Button>
      <Button type="submit" variant="outline" size="xs">
        <X className="mr-2 h-4 w-4" />
        Clear filter
      </Button>
    </form>
  )
}
