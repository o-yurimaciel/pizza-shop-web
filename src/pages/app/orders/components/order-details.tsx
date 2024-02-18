import { OrderStatus } from '@/components/order-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: WJIUR9847</DialogTitle>
        <DialogDescription>Details of order</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <OrderStatus status="processing" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex justify-end">Yuri Maciel</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">+5551928384944</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">y@y.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Carried out
              </TableCell>
              <TableCell className="flex justify-end">15 mins ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Qt.</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">$20</TableCell>
              <TableCell className="text-right">$25</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-medium">$120</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
