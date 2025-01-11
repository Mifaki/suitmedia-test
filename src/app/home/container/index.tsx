'use client';

import { useForm } from 'antd/es/form/Form';
import CustomPagination from '@/shared/components/custom-pagination';
import Header from '@/shared/components/header';
import LoadingWrapper from '@/shared/components/loading-wrapper';
import FilterForm from '../components/filter-form';
import IIdeaList from '../components/idea-list';
import ParallaxBanner from '../components/parallax-banner';
import { useIdeaQuery } from '../hooks/useIdeaQuery';

const HomeContainer = () => {
  const [form] = useForm();

  const { data, isLoading, queryIdea, handleFilter } = useIdeaQuery();

  return (
    <>
      <Header />
      <ParallaxBanner />
      <section className="h-fit px-10 pb-20 pt-8 md:px-20 xl:px-40">
        <LoadingWrapper isLoading={isLoading}>
          {data && (
            <IIdeaList
              ideas={data.data}
              meta={data.meta}
              filterComponent={
                <FilterForm
                  form={form}
                  query={queryIdea}
                  onValuesChange={handleFilter}
                />
              }
              paginationComponent={
                <CustomPagination
                  meta={data.meta}
                  onPageChange={handleFilter}
                  className="mt-8"
                />
              }
            />
          )}
        </LoadingWrapper>
      </section>
    </>
  );
};

export default HomeContainer;
