import PageWrapper from '@/components/layout/PageWrapper'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SearchIcon, X } from 'lucide-react'
import ordersData from '@/data/OrdersData'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import useFilter , { type ColumnConfig } from '@/hooks/use-filter'


// Define column configurations for orders
const orderColumnConfigs: ColumnConfig[] = [
  { key: 'product', label: 'Product', type: 'text' },
  { key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] },
  { key: 'customer', label: 'Customer', type: 'text' },
  { key: 'date', label: 'Order Date', type: 'date' },
  { key: 'totalPrice', label: 'Total Price', type: 'number' },
  { key: 'address', label: 'Address', type: 'text' }
]

const Orders = () => {
  const {
    searchTerm,
    setSearchTerm,
    filters,
    filteredData: filteredOrders,
    addFilter,
    updateFilter,
    removeFilter,
    clearAllFilters,
    getOperatorsForColumn,
    getFilterStats,
    // renderFilterInput
  } = useFilter({
    data: ordersData,
    columnConfigs: orderColumnConfigs
  })

  const { total, filtered } = getFilterStats()

  return (
    <PageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Orders</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Dynamic Filters */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Filters</h3>
            <div className="space-x-2">
              <Button variant="outline" onClick={addFilter}>
                Add Filter
              </Button>
              {filters.length > 0 && (
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear All
                </Button>
              )}
            </div>
          </div>

          {filters.map(filter => (
            <div key={filter.id} className="flex items-center space-x-2 p-3 border rounded-lg bg-gray-50">
              {/* Column Selection */}
              <Select
                value={filter.column}
                onValueChange={(value) => updateFilter(filter.id, 'column', value)}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select column" />
                </SelectTrigger>
                <SelectContent>
                  {orderColumnConfigs.map(config => (
                    <SelectItem key={config.key} value={config.key}>
                      {config.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Operator Selection */}
              {filter.column && (
                <Select
                  value={filter.operator}
                  onValueChange={(value) => updateFilter(filter.id, 'operator', value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select operator" />
                  </SelectTrigger>
                  <SelectContent>
                    {getOperatorsForColumn(filter.column).map(op => (
                      <SelectItem key={op.value} value={op.value}>
                        {op.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {/* Value Input */}
              {filter.column && filter.operator && renderFilterInput(filter)}

              {/* Remove Filter */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeFilter(filter.id)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-sm text-gray-600">
          Showing {filtered} of {total} orders
        </div>

        {/* Orders Table */}
        <div className="border rounded-lg">
          <Table className='overflow-hidden w-full'>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.product}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>${order.totalPrice}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'Cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{order.address}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Orders