import type { IMeta } from '@/shared/models/generalinterfaces';
import type { IRootIdea } from '@/shared/models/ideasinterfaces';
import IdeaCard from '../idea-card';

interface IIdeaList {
  ideas: IRootIdea[];
  meta: IMeta;
  filterComponent?: React.ReactNode;
  paginationComponent?: React.ReactNode;
}

const IIdeaList = ({ ideas, meta, filterComponent, paginationComponent }: IIdeaList) => {
  return (
    <div>
      <div className="mb-10 flex flex-col items-start justify-between md:mb-6 md:flex-row md:items-center">
        <p className="text-[14px] md:text-base">
          Showing {meta.from} - {meta.to} of {meta.total}
        </p>
        {filterComponent}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            image={
              idea.small_image?.[0] ?? {
                id: idea.id * 101,
                mime: 'image',
                url: '/img/fallback.png',
                file_name: 'fallback',
              }
            }
            createdAt={idea.created_at}
            title={idea.title}
          />
        ))}
      </div>
      {paginationComponent}
    </div>
  );
};

export default IIdeaList;
