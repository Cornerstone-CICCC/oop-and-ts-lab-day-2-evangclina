// Create an interface `UserProfile` with properties `username`, `email`, and an optional `lastLogin` date.
// Write a function `getLastLoginMessage` that returns the last login date if available, otherwise a "No login recorded" message using nullish coalescing.
// Return type: string.

interface UserProfile {
  username: string
  email: string
  lastLogin?: object
}

function getLastLoginMessage(user: UserProfile) {
  if(user.lastLogin){
    console.log(`${user.lastLogin}`)
  }else{
    console.log(`No login recorded.`)
  }
}

// Expected output:
getLastLoginMessage({ username: "user1", email: "user1@example.com", lastLogin: new Date() })
// logs the date as a string
getLastLoginMessage({ username: "user2", email: "user2@example.com" })
// "No login recorded"