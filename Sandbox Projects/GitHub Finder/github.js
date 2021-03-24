class GitHub {
    constructor() {
      this.config = {
        headers: {
          Authorization: '96dee4c6269297caf68866ab9dddda971f91bb46'
        }
      }
      this.repos_count = 5
      this.repos_sort = 'created: asc'
    }
    async getUser(user) {
        let cachedUser = {}

      const profileResponse = await fetch(
        `https://api.github.com/users/${user}`,
        this.config
      )
   
      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
        this.config
      )
   
      const profile = await profileResponse.json()
   
      const repos = await repoResponse.json()
   
      return {
        profile,
        repos
      }
    }
  }