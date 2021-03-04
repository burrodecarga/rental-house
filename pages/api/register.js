// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [
      { id: 500, page:'logout',   slug:'/logout',   logedd:true  },
      { id: 600, page:'register', slug:'/register', logedd:true  }
    ]
    )
}
