import useSWR from 'swr'
import fetcher from '../../utils/fetcher'
import Graphic from './graphic'

export default function GraphicSteps({ hanzi }: { hanzi: string }) {
  const { data, error, isLoading } = useSWR(
    `/graphics/${hanzi.charCodeAt(0)}.json`,
    fetcher
  )

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className='mt-4 flex gap-2 flex-wrap'>
      {new Array(data.strokes.length).fill(0).map((_, index) => (
        <div className='w-16 h-16' key={index}>
          <Graphic strokes={data.strokes} step={index + 1} />
        </div>
      ))}
    </div>
  )
}
