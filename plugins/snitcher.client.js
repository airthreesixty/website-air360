/* eslint-disable */
export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp.$config.public.platform === 'prod') {
    !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
    (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
    h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8426405.js';
    h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
        
    snid('verify', '8426405');
  }
})
