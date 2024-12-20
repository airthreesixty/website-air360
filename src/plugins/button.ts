import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
  addUtilities({
    '.button-gradient': {
      // fontWeight: theme('fontWeight.semibold'),
      // '@screen md': {
      //   lineHeight: '32px'
      // }
      background:
        'linear-gradient(161.87deg, rgba(253, 112, 67, 0.88) 4.15%, rgba(240, 77, 102, 0.88) 22.36%, rgba(231, 33, 146, 0.88) 41.56%, rgba(193, 65, 172, 0.88) 61.75%, rgba(100, 74, 213, 0.88) 78.49%, rgba(45, 146, 233, 0.88) 98.68%)',
      color: 'white',
      '&:hover': {
        'transition-property': 'all',
        'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'transition-duration': '150ms',
        opacity: '0.9'
      }
    },
    '.button-gradient-outline': {
      position: 'relative',
      display: 'inline-block',
      background:
        'linear-gradient(161.87deg,rgba(253, 112, 67, 0.88) 4.15%,rgba(240, 77, 102, 0.88) 22.36%,rgba(231, 33, 146, 0.88) 41.56%,rgba(193, 65, 172, 0.88) 61.75%,rgba(100, 74, 213, 0.88) 78.49%,rgba(45, 146, 233, 0.88) 98.68% )',
      color: 'transparent',
      'background-clip': 'text',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        margin: 'auto',
        'border-radius': '8px',
        border: '1px solid transparent',
        background:
          'linear-gradient(161.87deg, rgba(253, 112, 67, 0.88) 4.15%, rgba(240, 77, 102, 0.88) 22.36%, rgba(231, 33, 146, 0.88) 41.56%, rgba(193, 65, 172, 0.88) 61.75%, rgba(100, 74, 213, 0.88) 78.49%, rgba(45, 146, 233, 0.88) 98.68%) border-box border-box',
        '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box',
        '-webkit-mask-composite': 'destination-out',
        mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box',
        'mask-composite': 'exclude'
      }
    }
  });
});
