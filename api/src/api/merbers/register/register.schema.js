export const userSchema = {
  properties: {
    user_name: {
      minLength: 4
    },
    password: {
      minLength: 6
    }
  },
  required: ['user_name', 'password']
}