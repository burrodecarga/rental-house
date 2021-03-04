// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [
      { id: 400, page:'login',    slug:'/login',    logedd:false },
    ]
    )
}
