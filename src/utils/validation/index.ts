import { trim } from 'stylis'

// Validate trường bắt buộc nhập
export function validateRequire(message: any) {
  return {
    required: true,
    message: message || 'Vui lòng không bỏ trống mục này'
  }
}

// Validate truong chi nhap khoang trang
export function validateRequireInput(message?: any, required = true) {
  return {
    required,
    validator: (_: any, value: string) => {
      if (!required) return Promise.resolve()
      if (!!value && trim(value) !== '') {
        return Promise.resolve()
      }

      return Promise.reject(message || 'Vui lòng không bỏ trống mục này')
    }
  }
}

// Validate truong nhap toi da bao nhieu ky tu
export function validateMaxLengthStr(maxLength: any, message: any) {
  return {
    max: maxLength,
    message: message || 'Vui lòng nhập tối đa ký tự cho phép'
  }
}

// Validate truong string
export function validateStrLength(max1: any, max2: any, message: any) {
  return {
    validator: (_: any, value: string | any[]) => {
      value = value || ''
      if ((value && (value.length === max1 || value.length === max2)) || value.length === 0) {
        return Promise.resolve()
      }

      return Promise.reject(message || 'Vui lòng chỉ nhập tối đa số ký tự cho phép')
    }
  }
}

export function validateCode(message: any, regex: RegExp) {
  const rg = regex || /^[a-zA-Z0-9#\-_/:|]+$/

  return {
    validator: (_: any, value: string) => {
      const valueTrim = trim(value)
      if (value === null || !value) {
        return Promise.resolve()
      }
      if (valueTrim && !rg.test(valueTrim)) {
        return Promise.reject(message || 'Vui lòng nhập đúng định dạng')
      }

      return Promise.resolve()
    }
  }
}

export function formatNormalizeNumberZero(value: string) {
  if (trim(value)) {
    return value.toString().replaceAll(/\D/g, '')
  }

  return null
}

// Validate trường password
export function validatePassword(message: any) {
  return {
    validator: (_: any, value: string) => {
      if (value && value.length) {
        const regex = []
        regex.push('[A-Z]') // Uppercase
        regex.push('[a-z]') // Lowercase
        regex.push('[0-9]') // Digit ~<>
        regex.push('[!@#$%^&+=]')

        // regex.push(
        // 	"[\\s\\`\\~\\@\\#\\%\\&\\(\\)\\[\\]\\{\\}\\\\^\\$\\:\\;\\'\\/\\,\\|\\?\\*\\+\\.\\<\\>\\-\\=\\!\\_]",
        // );

        let passed = 0
        for (let i = 0; i < regex.length; i++) {
          if (new RegExp(regex[i]).test(value)) {
            passed++
          }
        }
        if (passed > 3 && value.length >= 8 && value.length <= 16) {
          return Promise.resolve()
        }

        return Promise.reject(message || 'Giá trị nhập vào không hợp lệ')
      }

      return Promise.resolve()
    }
  }
}

// Validate truong email
export function validateEmail(message: string) {
  return {
    validator: (_: any, value: string) => {
      if (value && value.length) {
        const re =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]{2,}(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
        if (re.test(value)) {
          return Promise.resolve()
        }

        return Promise.reject(message || 'Vui lòng nhập đúng định dạng')
      }

      return Promise.resolve()
    }
  }
}

// validate phoneNumber 2
export function validatePhoneNumber2(message: any) {
  return {
    validator: (_: any, number1: string | null | undefined) => {
      if (number1 === null || number1 === undefined) return Promise.resolve()
      const number = trim(number1)
      const DOT = '.'
      const SPACE = ' '
      const HYPHEN = '-'
      const isExitsCharacterPhone = (numberSplit: string | string[]) => {
        let count = 0
        if (numberSplit.includes(DOT)) {
          count++
        }
        if (numberSplit.includes(SPACE)) {
          count++
        }
        if (numberSplit.includes(HYPHEN)) {
          count++
        }

        return count > 1
      }

      if (number && trim(number)) {
        let isRegex = false
        let hasAreaCode = false
        let phoneNumberIgnoreAreaCode: string[] = []
        const AREA_CODE = '84'
        const AREA_CODE_HAS_PLUS = '+84'
        const AREA_CODE_HAS_BRACKET = '(84)'
        const AREA_CODE_HAS_ALL = '(+84)'
        const REGEX_IS_NUMERIC = /^[0-9]*$/g
        const REGEX_FORMAT_PHONE =
          /(^([-.\s]{0,1})([0-9]{3})([-.\s]{1})([0-9]{3})([-.\s]{1})([0-9]{4}))|(^([-.\s]{0,1})([0-9]{4})([-.\s]{1})([0-9]{3})([-.\s]{1})([0-9]{3}))|(^([-.\s]{0,1})([0-9]{4})([-.\s]{1})([0-9]{6}))|(^([-.\s]{0,1})([0-9]{2})([-.\s]{1})([0-9]{2})([-.\s]{1})([0-9]{2})([-.\s]{1})([0-9]{2})([-.\s]{1})([0-9]{2}))|(^[0-9]{4,12})/g
        const REGEX_FORMAT_PHONE_IGNORE_BEGIN_ZERO =
          /(^([-.\s]{0,1})([1-9]{3})([-.\s]{1})([0-9]{6}))|(^([-.\s]{0,1})([1-9]{3})([-.\s]{1})([0-9]{3})([-.\s]{1})([0-9]{3}))|(^[0-9]{4,12})/g

        const isNumber = REGEX_IS_NUMERIC.test(number)
        const phoneReplaceCharacter = number.replaceAll(/[^0-9]/g, '')

        // Check hasCode
        if (number.startsWith(AREA_CODE)) {
          hasAreaCode = true
          phoneNumberIgnoreAreaCode = number.split(AREA_CODE)
        } else if (number.startsWith(AREA_CODE_HAS_PLUS)) {
          hasAreaCode = true
          phoneNumberIgnoreAreaCode = number.split(AREA_CODE_HAS_PLUS)
        } else if (number.startsWith(AREA_CODE_HAS_BRACKET)) {
          hasAreaCode = true
          phoneNumberIgnoreAreaCode = number.split(AREA_CODE_HAS_BRACKET)
        } else if (number.startsWith(AREA_CODE_HAS_ALL)) {
          hasAreaCode = true
          phoneNumberIgnoreAreaCode = number.split(AREA_CODE_HAS_ALL)
        }

        // có mã vùng
        if (hasAreaCode) {
          // có nhiều ký tự đặc biệt
          if (isExitsCharacterPhone(phoneNumberIgnoreAreaCode[1])) {
            isRegex = true
          } else if (
            phoneReplaceCharacter.substring(2).length < 10 &&
            !REGEX_FORMAT_PHONE_IGNORE_BEGIN_ZERO.test(phoneNumberIgnoreAreaCode[1])
          ) {
            // < 10, !== 0
            isRegex = true
          } else if (
            phoneReplaceCharacter.substring(2).length >= 10 &&
            !REGEX_FORMAT_PHONE.test(phoneNumberIgnoreAreaCode[1])
          ) {
            // full sđt
            isRegex = true
          } else if (
            !REGEX_IS_NUMERIC.test(
              phoneNumberIgnoreAreaCode[1].replaceAll('-', '').replaceAll('.', '').replaceAll(' ', '')
            )
          ) {
            isRegex = true
          }
        } else if (isExitsCharacterPhone(number)) {
          // Có nhiều ký tự đặc biệt > 1
          isRegex = true
        } else if (!REGEX_FORMAT_PHONE.test(number)) {
          isRegex = true
        } else if (
          !isNumber &&
          !REGEX_IS_NUMERIC.test(number.replaceAll('-', '').replaceAll('.', '').replaceAll(' ', ''))
        ) {
          isRegex = true
        }

        if (isNumber && number.length > 12) {
          return Promise.reject('Vui lòng nhập tối đa 12 ký tự')
        }
        if (!isNumber && number.length > 18) {
          return Promise.reject('Vui lòng nhập tối đa 18 ký tự')
        }

        if (
          (phoneReplaceCharacter.startsWith('1800') || phoneReplaceCharacter.startsWith('1900')) &&
          phoneReplaceCharacter.length !== 8 &&
          phoneReplaceCharacter.length < 10
        ) {
          return Promise.reject('Sai định dạng số điện thoại')
        }
        if (
          !phoneReplaceCharacter.startsWith('1800') &&
          !phoneReplaceCharacter.startsWith('1900') &&
          ((!phoneReplaceCharacter.startsWith('0') && phoneReplaceCharacter.length < 3) ||
            (phoneReplaceCharacter.startsWith('0') && phoneReplaceCharacter.length < 10))
        ) {
          return Promise.reject('Sai định dạng số điện thoại')
        }

        if (isRegex) return Promise.reject(message || 'Giá trị nhập vào không hợp lệ')

        return Promise.resolve()
      }

      return Promise.resolve()
    }
  }
}

export function validateCustomPattern(regex: string | RegExp, message: any) {
  return {
    validator: (_: any, value: string) => {
      if (value && trim(value) !== '') {
        if (new RegExp(regex).test(value)) {
          Promise.resolve()
        } else return Promise.reject(message || 'Vui lòng nhập đúng định dạng')

        return Promise.resolve()
      }

      return Promise.resolve()
    }
  }
}
