import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { cn } from '@/shared/util/cn';

interface ILoadingWrapper {
  isLoading: boolean;
  children: React.ReactNode;
  loadingComponent?: React.ReactNode;
  className?: string;
  spinSize?: 'small' | 'default' | 'large';
  spinIconSize?: number;
}

const LoadingWrapper = ({
  isLoading,
  children,
  loadingComponent,
  className,
  spinSize = 'large',
  spinIconSize = 48,
}: ILoadingWrapper) => {
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: spinIconSize }}
      spin
    />
  );

  if (isLoading) {
    return (
      <div className={cn('flex min-h-[200px] items-center justify-center', className)}>
        {loadingComponent ?? (
          <Spin
            indicator={antIcon}
            size={spinSize}
          />
        )}
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
