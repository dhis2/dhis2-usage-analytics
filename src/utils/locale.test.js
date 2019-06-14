import i18n from '../locales'
import { setLocale } from './locale'

describe('setLocale', () => {
    const locale = 'de'
    const mockSetDocDir = jest.fn()
    const mockChangeLanguage = jest.fn()

    i18n.changeLanguage = mockChangeLanguage

    setLocale(locale)

    it('calls i18n.changeLanguage once', () => {
        expect(mockChangeLanguage).toBeCalledTimes(1)
    })
    it('calls i18n.changeLanguage with the correct locale argument', () => {
        expect(mockChangeLanguage).toBeCalledWith(locale)
    })
})
