import * as validators from '@vuelidate/validators'
import { createI18n } from 'vue-i18n'

const messages = {
  ja: {
    validations: {
      required: 'この項目は必須です。',
      email: '正しいメールアドレスの形式で入力してください。',
      // numeric: '数字で入力してください。',
      // jpPhone: '正しい電話番号を入力してください。',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages,
})

const { createI18nMessage } = validators

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })

// const phoneRegex = /^(0\d{1,4}-\d{1,4}-\d{4}|0\d{9,10})$/

// const phoneNumberValidation = value => phoneRegex.test(value)

export const required = withI18nMessage(validators.required)
export const email = withI18nMessage(validators.email)
// export const numeric = withI18nMessage(validators.numeric)
// export const jpPhone = withI18nMessage(phoneNumberValidation)
