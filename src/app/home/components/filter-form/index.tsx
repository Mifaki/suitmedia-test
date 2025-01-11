import { Form, FormInstance, Select } from 'antd';
import type { TGeneralFilter } from '@/shared/models/generalinterfaces';
import '../../style.css';

interface IFilterForm {
  form: FormInstance;
  onValuesChange?: (values: any) => void;
  query: TGeneralFilter;
}

const FilterForm = ({ form, onValuesChange, query }: IFilterForm) => {
  return (
    <Form
      form={form}
      layout="horizontal"
      className="grid w-1/2 grid-cols-2 gap-8"
      onValuesChange={onValuesChange}
      initialValues={{
        pageSize: query.pageSize,
        sort: query.sort,
      }}
    >
      <Form.Item
        className="w-full"
        name={'pageSize'}
        label="Show per page:"
      >
        <Select
          placeholder="page size"
          options={[
            { value: 10, label: '10' },
            { value: 20, label: '20' },
            { value: 50, label: '50' },
          ]}
        />
      </Form.Item>
      <Form.Item
        className="w-full"
        name={'sort'}
        label="Show By:"
      >
        <Select
          placeholder="sort by"
          options={[
            { value: '-published_at', label: 'Newest' },
            { value: 'published_at', label: 'Oldest' },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default FilterForm;
