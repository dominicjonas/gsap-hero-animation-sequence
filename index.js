let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } })
// adjust the global gsap defaults
// GSAP easing visualizer : https://greensock.com/ease-visualizer/

const flagPoles = CSSRulePlugin.getRule('.card:before')
// in order to let gsap target the pseudo element dots in UI (flagpoles), need to import this plugin and pass in class name with pseudo class

// When using '.to' , gsap takes whatever are the current default values specified in the written CSS and animates to the given values in this '.to' method

// remember to include '%' on 0 values for clip-path
// 3rd param "-=2" = start this animation only .2 seconds after first animation, due to first's 2.2 second duration.

tl.to('h1', {
  'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
  opacity: 1,
  y: 0,
  duration: 2.2
})
  .to(
    '.form',
    {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      y: 0
    },
    '-=2'
  )
  .from('.card', { scaleY: 0, stagger: 0.2 }, '-=2')
  .from(
    flagPoles,
    { stagger: 1, opacity: 0, transform: 'translateY(100px)' },
    '-=2'
  )
  .to(
    '.title, .desc',
    { stagger: 0.1, duration: 1.2, opacity: 1, y: 0 },
    '-=2'
  )
  .to('footer', { opacity: 1 }, '-=2')
