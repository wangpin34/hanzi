export default function Graphic({
  strokes,
  step,
}: {
  strokes: string[]
  step: number
}) {
  return (
    <svg viewBox='0 0 1024 1024'>
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
      <g transform='scale(1, -1) translate(0, -900)'>
        {strokes.slice(0, step).map((stroke, index) => (
          <path
            key={index}
            d={stroke}
            fill={index === step - 1 ? 'blue' : 'black'}
          ></path>
        ))}
      </g>
    </svg>
  )
}
