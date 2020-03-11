import express from 'express'
import log4js from 'log4js'
import codeStatus from '../../../../config/codeStatus'
import { WithdrawAll, BankdWithdrawOne, CreateWithdraw } from './withdraw.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Index = async (req, res, next) => {
  try {
    const { id } = req.decodedToken
    const userWithdraws = await WithdrawAll(id)
    return res.json({ status: codeStatus.OK, userWithdraws })
  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

const ConfirmWithdraw = async (req, res, next) => {
  try {
    const { amount, bank_order } = req.body
    const { id } = req.decodedToken
    const bankdWithdraw = await BankdWithdrawOne(bank_order)
    if (parseFloat(bankdWithdraw.minimum_amount) <= parseFloat(amount)) {
      const createWithdraw = await CreateWithdraw({
        ...req.body,
        users_id: id
      })
      return res.json({ status: codeStatus.OK, createWithdraw })
    }

  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.get('/', Index)
  .post('/confirm-withdraw', ConfirmWithdraw)
module.exports = router
