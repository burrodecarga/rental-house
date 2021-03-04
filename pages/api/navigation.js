// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [
      { id: 100, page:'Home',     slug:'/',          logged: true,   noLogged:true },
      { id: 400, page:'logout',   slug:'/logout',    logged: true,   noLogged:false },
      { id: 500, page:'login',    slug:'/login',     logged:false,   noLogged:true },
      { id: 600, page:'register', slug:'/register',  logged:false,   noLogged:true }
    ]
    )
}
