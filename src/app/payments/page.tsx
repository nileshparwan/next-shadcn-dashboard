import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

export default async function PaymentsPage() {
    const payment = await fetch(`${process.env.payment_api}/api/payments`);
    const data = await payment.json() as Payment[];

    return (
        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Payments</h1>
            </div>


            <DataTable columns={columns} data={data} />
        </div>
    )
}  