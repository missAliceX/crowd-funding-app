import { rest } from 'msw'

export const handlers = [
  rest.post('/projects/propose', (req, res, ctx) => {
    const { project_name, tagline, problems, solutions } = req.body
    if (!project_name) return res(ctx.text("missing project name"), ctx.status(400))
    if (!tagline) return res(ctx.text("missing tagline"), ctx.status(400))
    if (!problems || problems.length < 1) return res(ctx.text("missing problems"), ctx.status(400))
    if (!solutions || solutions.length < 1) return res(ctx.text("missing solutions"), ctx.status(400))
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    )
  })
]
