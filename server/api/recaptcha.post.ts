import axios from 'axios'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  let res
  try {
    res = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: body.event.token,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  } catch (error) {
    console.log(error)
  }

  if (res && res.data.success && res.data?.score > 0.5) {
    console.log('score:', res.data.score)

    return res.data.score
  } else {
    console.log('Fail')
    throw createError({
      statusCode: 500, message: 'Internal Error',
    })
  }
})
