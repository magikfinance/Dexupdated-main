import { Currency, ETHER, Token } from 'dogenswapsdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'DOGE'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
