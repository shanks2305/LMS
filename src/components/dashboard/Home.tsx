"use client"

import React from 'react'
import InstructorLayout from '../InstructorLayout'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]

const data: Payment[] = [
    {
        id: 'PAY_4305',
        amount: 252,
        status: 'pending',
        email: 'john@example.com'
    },
    {
        id: 'PAY_5961',
        amount: 236,
        status: 'pending',
        email: 'sophia@example.com'
    },
    {
        id: 'PAY_4096',
        amount: 452,
        status: 'success',
        email: 'emma@example.com'
    },
    {
        id: 'PAY_5741',
        amount: 473,
        status: 'failed',
        email: 'john@example.com'
    },
    {
        id: 'PAY_1880',
        amount: 150,
        status: 'pending',
        email: 'david@example.com'
    }
]




const Home = () => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })


    return (
        <>
            <InstructorLayout>
                <h2 className='text-4xl font-bold' >Cources</h2>
                <div className='my-6 grid grid-cols-12' >
                    <div className='col-span-4 flex gap-4 ' >
                        <div className='w-2/3'  >
                            <Input className='' placeholder='Search your cource' />
                        </div>
                        <Select defaultValue='Newest' >
                            <SelectTrigger className="w-1/3">
                                <SelectValue placeholder="Order" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Newest">Newest</SelectItem>
                                <SelectItem value="Lowest">Lowest</SelectItem>
                                <SelectItem value="A-Z">A-Z</SelectItem>
                                <SelectItem value="Z-A">Z-A</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='col-span-8 flex items-center flex-row-reverse px-8' >
                        <Link href="/dashboard/new-cource" className='px-4 py-3 font-bold bg-purple-600 text-white' >New Cource</Link>
                    </div>
                </div>
                <div className='p-8' >
                    <Table className='border shadow rounded' >
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </InstructorLayout>
        </>
    )
}

export default Home