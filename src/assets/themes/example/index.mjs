export const vars = {
  text: {
    dark: '#c4c4c4',
    light: '#212121',
  },

  background: {
    dark: '#212121',
    light: '#c4c4c4',
  },

  fontSize: '25px',

  fadeDuration: '500ms',

  neutral: '#ea4444',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),

      fontSize: v.fontSize,
      lineHeight: '2',
    },


  '#Magic': {
    backgroundColor: v.background.dark,
    fontFamily: 'ubuntu',
    textAlign: 'center',
    fontSize: '25px',
    height: '100vh',
    width: '100vw',
    color: v.text.dark,
    transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },
    },

    a: {
      color: v.neutral,
    },

    '.Footer': {
      display: 'none',
    },

    h1: {
      color: v.neutral,
      fontSize: '2em',
    },

    '.LightSwitch': {
      position: 'fixed',
      left: '1em',
      top: 'auto',
      bottom: '4em',
      height: '1.5em',
      width: '1.5em',
    },

    '.Gdpr': {
      '.ShowHide': {
        height: '1.5em',
        width: '1.5em',
      },
    },

    '.bottom': {
      position: 'absolute',
      bottom: '0',
      textAlign: 'center',
      width: '100%',
    },
  }
}
