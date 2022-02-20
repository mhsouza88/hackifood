import { Input, InputProps } from 'antd';
import { FiSearch } from 'react-icons/fi';

export function SearchInput(props: InputProps) {
  return (
    <Input {...props} addonBefore={<FiSearch />} />
  )
}
