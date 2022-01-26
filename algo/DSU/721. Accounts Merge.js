var accountsMerge = function (accounts) {
  const emailToIndex = new Map()
  const emailToName = new Map()
  let emailsCount = 0

  for (const account of accounts) {
    const name = account[0] // email name
    const size = account.length // name + email address length
    for (let i = 1; i < size; i++) {
      // iterate each email addr
      const email = account[i] // email addr
      if (!emailToIndex.has(email)) {
        // map do not has this email recorded
        emailToIndex.set(email, emailsCount++) // unique email address index++
        emailToName.set(email, name) // assign an name to this email, each email has an unique name
      }
    }
  }

  const uf = new UnionFind(emailsCount)
  for (const account of accounts) {
    const firstEmail = account[1] // first email address in this account
    const firstIndex = emailToIndex.get(firstEmail) // the name assigned to this email above
    const size = account.length // items length of this account
    for (let i = 2; i < size; i++) {
      // iterate each email next to the first one in this account
      const nextEmail = account[i]
      const nextIndex = emailToIndex.get(nextEmail)
      uf.union(firstIndex, nextIndex) // merge them all in union set
    }
  }

  // how many accounts are there after merge
  const indexToEmails = new Map()
  for (const email of emailToIndex.keys()) {
    // iterate each email address
    const index = uf.find(emailToIndex.get(email)) // index of this email in DSU
    const account = indexToEmails.get(index) ? indexToEmails.get(index) : [] // if has already record the index, if so, then extract this account
    account.push(email)
    indexToEmails.set(index, account)
  }
  const merged = []
  for (const emails of indexToEmails.values()) {
    emails.sort() // according to ASCII
    const name = emailToName.get(emails[0])
    const account = [] // make account
    account.push(name)
    account.push(...emails)
    merged.push(account)
  }

  return merged
}

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((element, index) => index)
  }

  union(index1, index2) {
    this.parent[this.find(index2)] = this.find(index1)
  }

  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index])
    }
    return this.parent[index]
  }
}
