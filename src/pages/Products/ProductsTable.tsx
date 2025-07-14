import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProducts } from "@/queryClient";
import { useQuery } from '@tanstack/react-query'


export function ProductsTable() {
  const { isPending, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  if (isPending) {
    return (<p>Loading</p>)
  }
  if (error) {
    return (<p>{error.message}</p>)
  }
  if (data) {
    console.log(data);
  }

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">SKU</TableHead>
          <TableHead className="text-right">Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(product => (<TableRow>
          <TableCell className="font-medium">{product.product_id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.description}</TableCell>
          <TableCell className="text-right">${product.price}</TableCell>
          <TableCell className="text-right">{product.sku}</TableCell>
          <TableCell className="text-right">{product.updated_at}</TableCell>

        </TableRow>))}

      </TableBody>
    </Table>
  );
}

