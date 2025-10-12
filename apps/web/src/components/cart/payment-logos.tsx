'use client'

import Image from 'next/image'

interface PaymentLogosProps {
  size?: 'sm' | 'md'
}

export function PaymentLogos({ size = 'md' }: PaymentLogosProps) {
  const dims = size === 'sm' ? { w: 36, h: 20 } : { w: 48, h: 24 }
  const gap = size === 'sm' ? 'gap-2' : 'gap-3'
  return (
    <div className={`flex items-center ${gap}`}>
      <Image src="/images/payment/ideal.svg" alt="iDEAL" width={dims.w} height={dims.h} />
      <Image src="/images/payment/visa.svg" alt="Visa" width={dims.w} height={dims.h} />
      <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={dims.w} height={dims.h} />
      <Image src="/images/payment/paypal.svg" alt="PayPal" width={dims.w + 6} height={dims.h} />
    </div>
  )
}

export default PaymentLogos
