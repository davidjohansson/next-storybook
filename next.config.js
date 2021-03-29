module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      // Do not rewrite API routes
      {
        source: '/api/:any*',
        destination: '/api/:any*',
      },
      {
        source: "/returns/:any*",
        destination: "/returns",
      },
      {
        source: "/settings/:any*",
        destination: "/settings",
      },
      {
        source: '/:any*',
        destination: '/',
      },
    ]
  },
}