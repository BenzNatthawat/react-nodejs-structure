import db from '../../../../model'
const My_account_sites = db.my_account_sites
const Myfunds = db.myfunds

export const financeAll = async (id) => {
  return await Myfunds.findAll({
    where: { users_id: id }
  }).then(res => res).catch(err => err)
}