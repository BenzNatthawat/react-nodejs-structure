import express from 'express'
import log4js from 'log4js'
import codeStatus from '../../../../config/codeStatus'
import { DepositAll, BankdDepositAll, BankdDepositOne, CreateDeposit } from './deposite.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Index = async (req, res, next) => {
  try {
    const { id } = req.decodedToken
    const userDeposits = await DepositAll(id)
    return res.json({ status: codeStatus.OK, userDeposits })
  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

const BankDeposit = async (req, res, next) => {
  try {
    const bankdDeposit = await BankdDepositAll()
    return res.json({ status: codeStatus.OK, bankdDeposit })
  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

const ConfirmDeposit = async (req, res, next) => {
  try {
    const { amount, bank_order } = req.body
    const { id } = req.decodedToken
    const bankdDeposit = await BankdDepositOne(bank_order)
    if (parseFloat(bankdDeposit.minimum_amount) <= parseFloat(amount)) {
      const createDeposit = await CreateDeposit({
        ...req.body,
        users_id: id
      })
      return res.json({ status: codeStatus.OK, createDeposit })
    }

  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.get('/', Index)
  .get('/bank-deposit', BankDeposit)
  .post('/confirm-deposit', ConfirmDeposit)
module.exports = router
