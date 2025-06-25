import { useState, useEffect, useMemo } from 'react'

export interface ColumnConfig {
  key: string
  label: string
  type: 'text' | 'number' | 'select' | 'date' | 'boolean'
  options?: string[] | number[] // For select type
  searchable?: boolean // Whether this column should be included in global search
}

export interface FilterOption {
  id: string
  column: string
  operator: string
  value: string
}

export interface UseFilterProps<T> {
  data: T[]
  columnConfigs: ColumnConfig[]
  initialSearchTerm?: string
  initialFilters?: FilterOption[]
}




export interface UseFilterReturn<T> {
  // State
  searchTerm: string
  filters: FilterOption[]
  filteredData: T[]
  
  // Actions
  setSearchTerm: (term: string) => void
  addFilter: () => void
  updateFilter: (id: string, field: keyof FilterOption, value: string) => void
  removeFilter: (id: string) => void
  clearAllFilters: () => void
  
  // Utilities
  operators: Record<string, Array<{ value: string; label: string }>>
  getColumnConfig: (key: string) => ColumnConfig | undefined
  getOperatorsForColumn: (columnKey: string) => Array<{ value: string; label: string }>
  getFilterStats: () => { total: number; filtered: number }
}

const useFilter = <T extends Record<string, any>>({
  data,
  columnConfigs,
  initialSearchTerm = '',
  initialFilters = []
}: UseFilterProps<T>): UseFilterReturn<T> => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [filters, setFilters] = useState<FilterOption[]>(initialFilters)

  // Define operators for each data type
  const operators = useMemo(() => ({
    text: [
      { value: 'contains', label: 'Contains' },
      { value: 'equals', label: 'Equals' },
      { value: 'startsWith', label: 'Starts with' },
      { value: 'endsWith', label: 'Ends with' },
      { value: 'notContains', label: 'Does not contain' },
      { value: 'isEmpty', label: 'Is empty' },
      { value: 'isNotEmpty', label: 'Is not empty' }
    ],
    number: [
      { value: 'equals', label: 'Equals' },
      { value: 'notEquals', label: 'Not equals' },
      { value: 'greaterThan', label: 'Greater than' },
      { value: 'lessThan', label: 'Less than' },
      { value: 'greaterThanOrEqual', label: 'Greater than or equal' },
      { value: 'lessThanOrEqual', label: 'Less than or equal' },
      { value: 'between', label: 'Between' }
    ],
    select: [
      { value: 'equals', label: 'Equals' },
      { value: 'notEquals', label: 'Not equals' },
      { value: 'in', label: 'In list' },
      { value: 'notIn', label: 'Not in list' }
    ],
    date: [
      { value: 'equals', label: 'Equals' },
      { value: 'notEquals', label: 'Not equals' },
      { value: 'before', label: 'Before' },
      { value: 'after', label: 'After' },
      { value: 'between', label: 'Between' },
      { value: 'today', label: 'Today' },
      { value: 'yesterday', label: 'Yesterday' },
      { value: 'thisWeek', label: 'This week' },
      { value: 'thisMonth', label: 'This month' },
      { value: 'thisYear', label: 'This year' }
    ],
    boolean: [
      { value: 'equals', label: 'Equals' },
      { value: 'isTrue', label: 'Is true' },
      { value: 'isFalse', label: 'Is false' }
    ]
  }), [])

  // Utility functions
  const getColumnConfig = (key: string): ColumnConfig | undefined => {
    return columnConfigs.find(config => config.key === key)
  }

  const getOperatorsForColumn = (columnKey: string) => {
    const config = getColumnConfig(columnKey)
    return config ? operators[config.type] || [] : []
  }

  const getFilterStats = () => ({
    total: data.length,
    filtered: filteredData.length
  })

  // Filter actions
  const addFilter = () => {
    const newFilter: FilterOption = {
      id: Date.now().toString(),
      column: '',
      operator: '',
      value: ''
    }
    setFilters(prev => [...prev, newFilter])
  }

  const updateFilter = (id: string, field: keyof FilterOption, value: string) => {
    setFilters(prev => prev.map(filter => {
      if (filter.id === id) {
        const updatedFilter = { ...filter, [field]: value }
        
        // Reset dependent fields when column changes
        if (field === 'column') {
          updatedFilter.operator = ''
          updatedFilter.value = ''
        }
        
        // Reset value when operator changes
        if (field === 'operator') {
          updatedFilter.value = ''
        }
        
        return updatedFilter
      }
      return filter
    }))
  }

  const removeFilter = (id: string) => {
    setFilters(prev => prev.filter(filter => filter.id !== id))
  }

  const clearAllFilters = () => {
    setFilters([])
    setSearchTerm('')
  }


  
  // Helper function to check if a value matches the filter
  const matchesFilter = (itemValue: any, filter: FilterOption): boolean => {
    const { operator, value: filterValue } = filter
    const columnConfig = getColumnConfig(filter.column)
    
    if (!columnConfig || !filterValue) return true

    const stringValue = itemValue?.toString().toLowerCase() || ''
    const filterStringValue = filterValue.toLowerCase()

    switch (operator) {
      // Text operators
      case 'contains':
        return stringValue.includes(filterStringValue)
      case 'notContains':
        return !stringValue.includes(filterStringValue)
      case 'equals':
        return stringValue === filterStringValue
      case 'startsWith':
        return stringValue.startsWith(filterStringValue)
      case 'endsWith':
        return stringValue.endsWith(filterStringValue)
      case 'isEmpty':
        return !itemValue || stringValue === ''
      case 'isNotEmpty':
        return itemValue && stringValue !== ''

      // Number operators
      case 'notEquals':
        return Number(itemValue) !== Number(filterValue)
      case 'greaterThan':
        return Number(itemValue) > Number(filterValue)
      case 'lessThan':
        return Number(itemValue) < Number(filterValue)
      case 'greaterThanOrEqual':
        return Number(itemValue) >= Number(filterValue)
      case 'lessThanOrEqual':
        return Number(itemValue) <= Number(filterValue)

      // Date operators
      case 'before':
        return new Date(itemValue) < new Date(filterValue)
      case 'after':
        return new Date(itemValue) > new Date(filterValue)
      case 'today':
        const today = new Date()
        const itemDate = new Date(itemValue)
        return itemDate.toDateString() === today.toDateString()
      case 'yesterday':
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const itemDateYesterday = new Date(itemValue)
        return itemDateYesterday.toDateString() === yesterday.toDateString()

      // Boolean operators
      case 'isTrue':
        return Boolean(itemValue) === true
      case 'isFalse':
        return Boolean(itemValue) === false

      // Select operators
      case 'in':
        const inValues = filterValue.split(',').map(v => v.trim().toLowerCase())
        return inValues.includes(stringValue)
      case 'notIn':
        const notInValues = filterValue.split(',').map(v => v.trim().toLowerCase())
        return !notInValues.includes(stringValue)

      default:
        return true
    }
  }

  // Apply filters and search
  const filteredData = useMemo(() => {
    let result = [...data]

    // Apply global search
    if (searchTerm) {
      result = result.filter(item => {
        return columnConfigs
          .filter(config => config.searchable !== false) // Include all columns unless explicitly excluded
          .some(config => {
            const value = item[config.key]
            return value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
          })
      })
    }

    // Apply column filters
    filters.forEach(filter => {
      if (filter.column && filter.operator) {
        result = result.filter(item => {
          const itemValue = item[filter.column]
          return matchesFilter(itemValue, filter)
        })
      }
    })

    return result
  }, [data, searchTerm, filters, columnConfigs])

  return {
    // State
    searchTerm,
    filters,
    filteredData,
    
    // Actions
    setSearchTerm,
    addFilter,
    updateFilter,
    removeFilter,
    clearAllFilters,
    
    // Utilities
    operators,
    getColumnConfig,
    getOperatorsForColumn,
    getFilterStats
  }
}




export default useFilter

