import Link from '@/components/Link'
import MainCanvas from '@/components/models/MainCanvas'
import { Chevron } from '@/components/social-icons/icons'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div>
        <MainCanvas />

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="my-6 space-y-6 pt-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary } = post
            return (
              <li
                key={slug}
                className="group relative w-full transform py-4 transition-all duration-500  hover:duration-500"
              >
                <div className="absolute -inset-x-4 inset-y-0 z-0 scale-95 bg-zinc-50 px-6 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-5 sm:rounded-2xl"></div>
                <article className="relative z-10">
                  <div className="flex flex-col space-y-2">
                    <time
                      className="relative z-10 order-first mb-2 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                      dateTime={date}
                    >
                      <span className="pr-2 text-base">☕️ </span>
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more
                          <Chevron />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts
            <Chevron />
          </Link>
        </div>
      )}
    </>
  )
}
