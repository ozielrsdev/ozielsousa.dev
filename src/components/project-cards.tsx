import { useQuery } from '@tanstack/react-query'
import { getRepos } from '../services/getRepos'
import { Button } from '../components/button'

export const ProjectCards = () => {
  const { data: repos } = useQuery({
    queryKey: ['repos'],
    queryFn: getRepos,
  })

  return (
    <div className="pt-14">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 justify-items-center items-center">
        {repos?.map((repo) => (
          <div
            key={repo.id}
            className="grid space-y-2 p-4 hover:scale-105 duration-150 rounded-lg shadow-sm shadow-emerald-400 w-full h-full"
          >
            <h2 className="text-2xl font-semibold">{repo.name}</h2>
            <p className="text-wrap">{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Button>Repositório</Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
