## How to Restore Deleted Branch

### Find Commit

Open cmd, enter `git reflog`, find that `<sha>`

### Restore

enter `git checkout [sha]`, then `git checkout -b <branch name>`
