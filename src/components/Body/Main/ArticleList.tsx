// src/components/Body/Main/ArticleList.tsx
import type { Blog } from '@/types/blog'
import ArticleCard from '@/components/Body/Main/ArticleCard'

interface Props {
  blogs: Blog[]
}

const ArticleList = (props: Props) => {
  const { blogs } = props
  return (
    <main className="max-w-4xl mx-auto px-4 py-9 w-full">
      <div className="flex-1">
        <h2 className="text-gray-500 text-md font-bold mb-8">記事一覧</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          {blogs.map((post) => (
            <ArticleCard
              key={post.id}
              blog={{
                category: post.category,
                id: post.id,
                thumbnail: { url: post.thumbnail.url },
                title: post.title,
                publishedAt: post.publishedAt ?? '',
              }}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}
export default ArticleList
