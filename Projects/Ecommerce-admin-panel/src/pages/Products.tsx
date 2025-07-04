import PageWrapper from '@/components/layout/PageWrapper'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, SearchIcon, X } from 'lucide-react'
import productsData from '@/data/ProductsData'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import useFilter , { type ColumnConfig } from '@/hooks/use-filter'
import renderFilterInput from '@/components/common/render-filter-input'

// Define column configurations for products
const productColumnConfigs: ColumnConfig[] = [
  { key: 'name', label: 'Product Name', type: 'text' },
  { key: 'category', label: 'Category', type: 'select', options: [...new Set(productsData.map(p => p.category))] },
  { key: 'price', label: 'Price', type: 'number' },
  { key: 'stock', label: 'Stock', type: 'number' },
  { key: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive', 'Out of Stock'] },
]

const Products = () => {
  const {
    searchTerm,
    setSearchTerm,
    filters,
    filteredData: filteredProducts,
    addFilter,
    updateFilter,
    removeFilter,
    clearAllFilters,
    getOperatorsForColumn,
    getColumnConfig,
    getFilterStats
  } = useFilter({
    data: productsData,
    columnConfigs: productColumnConfigs
  })

  const { total, filtered } = getFilterStats()

 

  return (
    <PageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button className='text-black hover:bg-gray-200 cursor-pointer rounded-2xl'>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search products..."
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
                  {productColumnConfigs.map(config => (
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
              {filter.column && filter.operator && renderFilterInput(getColumnConfig,filter,updateFilter)}

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
          Showing {filtered} of {total} products
        </div>

        {/* Products Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
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

export default Products