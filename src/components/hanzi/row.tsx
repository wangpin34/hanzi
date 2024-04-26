import { isChineseChar } from '../../utils/char'
import GraphicSteps from './graphic-steps'
import StrokesOrder from './strokes-order'

export default function Row({ hanzi }: { hanzi: string }) {
  if (!isChineseChar(hanzi)) {
    return <div></div>
  }
  return (
    <div data-hanzi={hanzi}>
      <StrokesOrder hanzi={hanzi} />
      <GraphicSteps hanzi={hanzi} />
    </div>
  )
}
