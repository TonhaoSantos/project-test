import MagicConsole from '@vlalg-nimbus/magic-consolelog'

export default defineNuxtPlugin(() => {
  const { getEnvValue } = useEnvs()

  const rainbowConfig = {
    title: 'STOP!',
    titleConfig: {
    color: '#ffffff',
      size: '50px',
      background: 'transparent',
      shadow: [
        'rgb(217,31,38)',
        'rgb(226,91,14)',
        'rgb(245,221,8)',
        'rgb(5,148,68)',
        'rgb(2,135,206)',
        'rgb(4,77,145)',
        'rgb(42,21,113)',
      ],
    },
    text: `This is a browser feature intended for developers. If someone told you to copy/paste something here you have an 11/10 chance you're being scammed. Pasting anything in here could give attackers access to your ${getEnvValue('appName')} account.`,
    hasLink: true,
    link: {
      text: 'You are in doubt',
      url: `${getEnvValue('baseUrl')}/contact`,
    },
  }
  
  new MagicConsole('rainbow', rainbowConfig)
})
