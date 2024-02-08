import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@radix-ui/react-dropdown-menu'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Pizza shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col p-2 pb-4">
          <span>Yuri Maciel</span>
          <span className="text-xs font-normal text-muted-foreground">
            yurimaciel.dev@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-r mb-2 flex items-center">
          <Building className="mr-2 h-4 w-4" />
          <span>Store Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex-r flex items-center text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
