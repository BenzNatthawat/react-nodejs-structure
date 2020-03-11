import db from '../../../../model'
const My_account_sites = db.my_account_sites
const Myfunds = db.myfunds

export const DepositAll = async (id) => {
  return await Myfunds.findAll({
    where: { users_id: id }
  }).then(res => res).catch(err => err)
}

export const CreateDeposit = async (data) => {
  return await Myfunds.create({
    ...data,
  }).then(res => res).catch(err => err)
}

export const BankdDepositAll = async () => {
  return await My_account_sites.findAll().then(res => res).catch(err => err)
}
export const BankdDepositOne = async (id) => {
  return await My_account_sites.findByPk(id).then(res => res).catch(err => err)
}