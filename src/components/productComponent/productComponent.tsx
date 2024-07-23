"use client";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductComponent() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.products.map((item: any) => {
          return (
            <TableRow>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
