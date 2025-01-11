import { useCallback } from 'react';
import { Pagination } from 'antd';
import type { IMeta, TGeneralFilter } from '@/shared/models/generalinterfaces';
import { cn } from '@/shared/util/cn';

interface ICustomPagination {
  meta: IMeta;
  onPageChange: (value: Partial<TGeneralFilter>) => void;
  className?: string;
}

const CustomPagination = ({ meta, onPageChange, className }: ICustomPagination) => {
  const itemRender = useCallback(
    (
      page: number,
      type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
      element: React.ReactNode
    ) => {
      const link = meta.links.find((link) => {
        if (type === 'prev') return link.label.includes('Previous');
        if (type === 'next') return link.label.includes('Next');
        return link.label === String(page);
      });

      if (!link?.url) {
        return <span className="text-gray-300">{element}</span>;
      }

      return element;
    },
    [meta.links]
  );

  return (
    <div className={cn('flex justify-center', className)}>
      <Pagination
        current={meta.current_page}
        pageSize={meta.per_page}
        total={meta.total}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={(page, pageSize) => {
          const targetLink = meta.links.find((link) => link.label === String(page));
          if (targetLink?.url ?? page === 1) {
            onPageChange({
              page: page,
              pageSize: pageSize,
            });
          }
        }}
      />
    </div>
  );
};

export default CustomPagination;
