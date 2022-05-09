import { useContext } from 'react'
import AlertContext from '../../Context/Alerts/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext)
  return (
    alert !== null && (
      <div className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && (
          <svg
            fill='none'
            viewBox='0 0 24 24'
            className='w-6 h-6 flex-none mt-0.5'
          >
            <circle cx={12} cy={12} r={12} fill='#FECDD3'></circle>
            <path
              stroke='#B91C1C'
              strokeWidth='2'
              d='M8 8l8 8M16 8l-8 8'
            ></path>
          </svg>
        )}
        <p className='flex-1 text-base text-white font-semibold leading-7'>
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  )
}

export default Alert
