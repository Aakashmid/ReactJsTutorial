import PageWrapper from '@/components/layout/PageWrapper'
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

        <div className="chart-container bg-white rounded-lg shadow p-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Sales (Last 7 days)</p>
              <p className="text-2xl font-bold">$12,345.67</p>
            </div>
          </div>
          {/* Chart.js or Recharts can be used, here is an example with Recharts */}
          <div className="w-full h-64">
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
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
          <XAxis dataKey="date" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Overview