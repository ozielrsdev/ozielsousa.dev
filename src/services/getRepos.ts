import { env } from "../env"

interface ReposProps {
  id: string,
  name: string,
  description: string | null,
  html_url: string,
}

export const getRepos = async (): Promise<ReposProps[]> => {
  try {
    const response = await fetch( env.VITE_GITHUB_URL,
      {
        headers: {
          Authorization: env.VITE_GITHUB_TOKEN,
        },
      },
    )
    const data: ReposProps[] = await response.json()
    return data
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
    return []
  }
}
