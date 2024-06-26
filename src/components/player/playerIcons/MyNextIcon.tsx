import React from 'react'

const MyNextIcon = ({
  onNextTrackHandler,
}: {
  onNextTrackHandler: () => void
}) => {
  return (
    <svg
      width='88'
      height='88'
      viewBox='0 0 64 102'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onNextTrackHandler}
    >
      <g filter='url(#filter0_ddiii_1370_1178)'>
        <rect x='4' y='8' width='56' height='88' rx='16' fill='#292929' />
        <rect
          x='5'
          y='9'
          width='54'
          height='86'
          rx='15'
          // stroke='#0000006a'
          stroke-opacity='0.7'
          stroke-width='2'
        />
        <path
          d='M23 45.9944C23 44.6242 23 43.9391 23.2809 43.5873C23.5251 43.2813 23.8955 43.1032 24.2871 43.1037C24.7373 43.1041 25.2723 43.5321 26.3422 44.3881L33.8492 50.3936C34.5356 50.9427 34.8788 51.2173 35.003 51.549C35.1119 51.8398 35.1119 52.1602 35.003 52.451C34.8788 52.7827 34.5356 53.0573 33.8492 53.6064L26.3422 59.6119C25.2723 60.4679 24.7373 60.8959 24.2871 60.8963C23.8955 60.8968 23.5251 60.7187 23.2809 60.4127C23 60.0609 23 59.3758 23 58.0056V45.9944Z'
          fill='white'
        />
        <path
          d='M41 43V61M26.3422 59.6119L33.8492 53.6064C34.5356 53.0573 34.8788 52.7827 35.003 52.451C35.1119 52.1602 35.1119 51.8398 35.003 51.549C34.8788 51.2173 34.5356 50.9427 33.8492 50.3936L26.3422 44.3881C25.2723 43.5321 24.7373 43.1041 24.2871 43.1037C23.8955 43.1032 23.5251 43.2813 23.2809 43.5873C23 43.9391 23 44.6242 23 45.9944V58.0056C23 59.3758 23 60.0608 23.2809 60.4127C23.5251 60.7187 23.8955 60.8968 24.2871 60.8963C24.7373 60.8959 25.2723 60.4679 26.3422 59.6119Z'
          stroke='white'
          stroke-width='2.57143'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>

      <feFlood flood-opacity='0' result='BackgroundImageFix' />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        result='hardAlpha'
      />
      <feOffset dy='2' />
      <feGaussianBlur stdDeviation='2' />
      <feComposite in2='hardAlpha' operator='out' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
      />
      <feBlend
        mode='normal'
        in2='BackgroundImageFix'
        result='effect1_dropShadow_1370_1178'
      />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        result='hardAlpha'
      />
      <feOffset dy='-4' />
      <feGaussianBlur stdDeviation='2' />
      <feComposite in2='hardAlpha' operator='out' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
      />
      <feBlend
        mode='normal'
        in2='effect1_dropShadow_1370_1178'
        result='effect2_dropShadow_1370_1178'
      />
      <feBlend
        mode='normal'
        in='SourceGraphic'
        in2='effect2_dropShadow_1370_1178'
        result='shape'
      />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        result='hardAlpha'
      />
      <feOffset dy='4' />
      <feGaussianBlur stdDeviation='2' />
      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'
      />
      <feBlend
        mode='normal'
        in2='shape'
        result='effect3_innerShadow_1370_1178'
      />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        result='hardAlpha'
      />
      <feOffset dy='3' />
      <feGaussianBlur stdDeviation='0.5' />
      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
      />
      <feBlend
        mode='normal'
        in2='effect3_innerShadow_1370_1178'
        result='effect4_innerShadow_1370_1178'
      />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        result='hardAlpha'
      />
      <feOffset dy='-4' />
      <feGaussianBlur stdDeviation='2' />
      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
      />
      <feBlend
        mode='normal'
        in2='effect4_innerShadow_1370_1178'
        result='effect5_innerShadow_1370_1178'
      />
    </svg>
  )
}

export default MyNextIcon
