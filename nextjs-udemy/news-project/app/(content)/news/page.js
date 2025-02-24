import NewsList from '@/components/news-list';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <div>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
