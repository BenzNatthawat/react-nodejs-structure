import express from 'express'
import log4js from 'log4js'
import codeStatus from '../../../../config/codeStatus'
import { financeAll } from './finance.service'
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

router.get('/', Index)
module.exports = router
