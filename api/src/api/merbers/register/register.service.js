import db from '../../../model'
const User = db.users

export const createUser = async (data) => {
  return await User.create({
    ...data,
    user_role_id: 3,
    status_user: { status: 'normal' },
    balance: { balance: 0 }
  }, {
    include: ['account', 'status_user', 'balance']
  }).then(res => res).catch(err => err)
}
