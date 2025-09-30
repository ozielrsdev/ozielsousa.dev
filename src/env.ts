import z from "zod"

const envSchema = z.object({
  VITE_GITHUB_URL: z.string().url(),
  VITE_GITHUB_TOKEN: z.string()
})

export const env = envSchema.parse(import.meta.env)
