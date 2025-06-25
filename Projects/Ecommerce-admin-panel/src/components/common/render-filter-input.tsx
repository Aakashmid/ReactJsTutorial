import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

  const renderFilterInput = (getColumnConfig:any,filter: any,updateFilter:any) => {
    const columnConfig = getColumnConfig(filter.column)
    if (!columnConfig || !filter.operator) return null

    switch (columnConfig.type) {
      case 'select':
        return (
          <Select
            value={filter.value}
            onValueChange={(value) => updateFilter(filter.id, 'value', value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select value" />
            </SelectTrigger>
            <SelectContent>
              {columnConfig.options?.map((option: string) => (
                <SelectItem key={option} value={option.toString()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'number':
        return (
          <Input
            type="number"
            placeholder="Enter number"
            value={filter.value}
            onChange={(e) => updateFilter(filter.id, 'value', e.target.value)}
            className="w-40"
          />
        )
      case 'date':
        return (
          <Input
            type="date"
            value={filter.value}
            onChange={(e) => updateFilter(filter.id, 'value', e.target.value)}
            className="w-40"
          />
        )
      case 'boolean':
        return (
          <Select
            value={filter.value}
            onValueChange={(value) => updateFilter(filter.id, 'value', value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectContent>
          </Select>
        )
      default:
        return (
          <Input
            type="text"
            placeholder="Enter value"
            value={filter.value}
            onChange={(e) => updateFilter(filter.id, 'value', e.target.value)}
            className="w-40"
          />
        )
    }
  }


  export default renderFilterInput