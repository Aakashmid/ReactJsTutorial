import PageWrapper from '@/components/layout/PageWrapper'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import orders from '@/data/Orders'

const Overview = () => {
  return (
    <PageWrapper>
      <div className="overview-page-wrapper">
        <h1 className="font-bold text-3xl">
          Overview
        </h1>
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid py-5">
          <Card className='gap-1 '>
            <CardHeader className='px-5'>
              <CardTitle className='font-medium text-sm'>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent className='px-5'>
              <p className='font-bold text-xl'>$45,231.89</p>
            </CardContent>
            <CardFooter className='px-5 text-green font-medium'>
              <p>+20.1% from last month</p>
            </CardFooter>
          </Card>
          <Card className='gap-1 '>
            <CardHeader className='px-5'>
              <CardTitle className='font-medium text-sm'>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent className='px-5'>
              <p className='font-bold text-xl'>$45,231.89</p>
            </CardContent>
            <CardFooter className='px-5 text-green font-medium'>
              <p>+20.1% from last month</p>
            </CardFooter>
          </Card>
          <Card className='gap-1 '>
            <CardHeader className='px-5'>
              <CardTitle className='font-medium text-sm'>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent className='px-5'>
              <p className='font-bold text-xl'>$45,231.89</p>
            </CardContent>
            <CardFooter className='px-5 text-green font-medium'>
              <p>+20.1% from last month</p>
            </CardFooter>
          </Card>

        </div>

        <div className="chart-container bg-white rounded-xl border p-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className='flex flex-col gap-1 '>
              <p className="font-medium">Sales </p>
              <p className="text-2xl font-bold">$12,345.67</p>
              <p className="text-sm  text-green"><span className="text-muted-foreground ">Last 7 days</span> +20.1%</p>
            </div>
          </div>
          {/* Chart.js or Recharts can be used, here is an example with Recharts */}
          <div className="w-full h-64 mt-6">
            {/* Install recharts: npm install recharts */}
            {/* Place this import at the top of your file:
            */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { date: 'Jun 1', sales: 1200 },
                  { date: 'Jun 2', sales: 2100 },
                  { date: 'Jun 3', sales: 800 },
                  { date: 'Jun 4', sales: 1600 },
                  { date: 'Jun 5', sales: 900 },
                  { date: 'Jun 6', sales: 1700 },
                  { date: 'Jun 7', sales: 3050 },
                ]}
                margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
              >
                <XAxis dataKey="date" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" dot={false} stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="recent-orders container mt-10 ">
        <h2 className="font-bold text-xl ">
          Recent Orders
        </h2>
        <div className="orders-table border rounded-xl mt-4 w-full">
          <Table className=''>
            <TableHeader>
              <TableRow className='h-12'>
                <TableHead className="">Product</TableHead>
                <TableHead className="">Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order,index) => (
                index < 10 && 
                <TableRow key={order.product} className='h-12'>
                  <TableCell className="font-medium">{order.product}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className=''><span className="bg-primary py-1 rounded-lg px-3">{order.status}
                  </span></TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="">{order.totalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Overview