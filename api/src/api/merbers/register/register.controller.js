import express from 'express'
import bcrypt from 'bcryptjs'
import conf from '../../../config'
import log4js from 'log4js'
import codeStatus from '../../../config/codeStatus'
import { createUser } from './register.service'
import { userSchema } from './register.schema'
import Ajv from 'ajv'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Register = async (req, res, next) => {
  try {
    var ajv = new Ajv();
    var valid = await ajv.validate(userSchema, req.body);
    if (!valid)
      return res.json({ status: codeStatus.Validated, message: ajv.errors[0].message })

    const { password } = req.body
    const hash = await bcrypt.hash(password, conf.saltBcrypt).then(hash => hash)
    const create = await createUser({
      ...req.body,
      password: hash,
    })
    if (create.errors)
      return res.json({ status: codeStatus.Validated, message: create.errors[0].message })
    return res.json({ status: codeStatus.OK, create })

  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.post('/', Register)
module.exports = router
