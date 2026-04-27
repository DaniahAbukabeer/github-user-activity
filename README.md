# github-user-activity

### following the challenge on https://roadmap.sh/projects/github-user-activity 

# Requirements
The application should run from the command line, accept the GitHub username as an argument, fetch the user's recent activity using the GitHub API, and display it in the terminal. The user should be able to:

1. Provide the GitHub username as an argument when running the CLI.
`
bash
github-activity <username>
`
2. Fetch the recent activity of the specified GitHub user using the GitHub API. You can use the following endpoint to fetch the user's activity:

`in javascript

# https://api.github.com/users/<username>/events
# Example: https://api.github.com/users/kamranahmedse/events
`
3. Display the fetched activity in the terminal.
`
javascript

Output:
- Pushed 3 commits to kamranahmedse/developer-roadmap
- Opened a new issue in kamranahmedse/developer-roadmap
- Starred kamranahmedse/developer-roadmap
- ...
`

You can learn more about the [GitHub API](https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28) .

4. Handle errors gracefully, such as invalid usernames or API failures.
5. Use a programming language of your choice to build this project.
6. Do not use any external libraries or frameworks to fetch the GitHub activity.