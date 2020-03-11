export const myfunds = {
  properties: {
    amount: {
      minLength: 4
    },
    bank_order: {
      minLength: 6
    }
  },
  required: ['user_name', 'password']
}