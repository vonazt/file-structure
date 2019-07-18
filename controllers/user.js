import * as userRepository from "../repositories/users"

const indexRoute = async () => {
  const userResponse = await userRepository.get()
  return userResponse
}

module.exports = {
  index: indexRoute
}
