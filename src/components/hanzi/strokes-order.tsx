import { useCallback, useState } from 'react'
export default function StrokesOrder({ hanzi }: { hanzi: string }) {
  const [timestamp, setTimestamp] = useState(Date.now())
  const onReplay = useCallback(() => {
    setTimestamp(Date.now())
  }, [])
  const code = hanzi.charCodeAt(0)
  return (
    <div className='w-24 h-24 cursor-pointer relative' onClick={onReplay}>
      <img
        src={`/graphics-bishun/${code}.svg?timestamp=${timestamp}`}
        alt={`${hanzi} bin shun`}
        className='w-full h-full'
      />
      <svg
        viewBox='0 0 1024 1024'
        className='absolute top-0 left-0 w-full h-full'
      >
        <g stroke='red' stroke-dasharray='102' stroke-width='4'>
          <line x1='0' y1='0' x2='0' y2='1024'></line>
          <line x1='0' y1='0' x2='1024' y2='0'></line>
          <line x1='1024' y1='0' x2='1024' y2='1024'></line>
          <line x1='0' y1='1024' x2='1024' y2='1024'></line>

          <line x1='0' y1='0' x2='1024' y2='1024'></line>
          <line x1='1024' y1='0' x2='0' y2='1024'></line>
          <line x1='512' y1='0' x2='512' y2='1024'></line>
          <line x1='0' y1='512' x2='1024' y2='512'></line>
        </g>
      </svg>
    </div>
  )
}
