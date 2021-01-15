
import { AnimationController, createAnimation } from '@ionic/angular';

const animationCtrl = new AnimationController();

export const getIonPageElement = (element: HTMLElement) =>{
    if (element.classList.contains('ion-page')) {
        return element;
      }
    
      const ionPage = element.querySelector(
        ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
      );
      if (ionPage) {
        return ionPage;
      }
      // idk, return the original element so at least something animates and we don't have a null pointer
      return element;
    };
/*     export function modalEnterAnimation(rootElement: HTMLElement): Animation {
        return createAnimation()
 */    export const animationButton = () =>{
       return  animationCtrl
         .create()
         /* .addElement(this.button.nativeElement) */
         .addElement(document.getElementsByTagName('ion-button')[0])
         .duration(1000)
         .iterations(Infinity)
   /*       .fromTo("--background", "green","blue"); */
         .keyframes([
   /*         {offset: 0, transform: 'translateY(200px)'},
           {offset: 0.5, transform: 'translateY(100px)'},
           {offset: 1, transform: 'translateY(0)'} */
           { offset: 0, boxShadow: "0 0 0 0 rgba(44, 103, 255, 0.4)" },
           { offset: 0.7, boxShadow: "0 0 0 10px rgba(44, 103, 255, 0)" },
           { offset: 1, boxShadow: "0 0 0 0 rgba(44, 103, 255, 0)" }
         ]);

        }
export const modalEnterAnimation = (baseEl: any) =>{

    const backdropAnimation = animationCtrl
     .create()
     .addElement(baseEl.querySelector('ion-backdrop')!)
     /* .fromTo('opacity', '0.01', '0.9') */
     .fromTo('transform', 'translateY(0)','translateY(1000px)')
     .duration(500)

    const wrapperAnimation = animationCtrl
     .create()
     .addElement(baseEl.querySelector('.modal-wrapper')!)
     .delay(2000)
     .keyframes([
         {offset: 0, transform: 'translateY(1000px)'},
         {offset: 0.2, transform: 'translateY(600px)'},
         {offset: 0.5, transform: 'translateY(400px)'},
         {offset: 1, transform: 'translateY(0)'}
     ])
/*      .keyframes([
        {offset: 0, opacity:'0', transform: 'scale(0)'},
        {offset: 1, opacity:'0.99', transform: 'scale(1)'}
    ])
 */

     return animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .addAnimation([backdropAnimation,wrapperAnimation])

};

export const modalLeaveAnimation = (baseEl:any) =>
        modalEnterAnimation(baseEl).direction('reverse');