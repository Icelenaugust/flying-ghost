import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScroll();
  }

  mouseHover(block: HTMLElement) {
    gsap.to(block, {
      yoyo: true,
      scale: '1.05',
      backgroundColor: '#e03d6e',
    })
  }

  mouseLeave(block: HTMLElement) {
    gsap.to(block, {
      scale: '1',
      backgroundColor: '#fff'
    })
  }

  initScroll():void {
    var animation;

    gsap.set("#app-ghost", {transformOrigin: "50% 50%"});

    animation = gsap.to("#app-ghost", {
      rotation: 0,
      scrollTrigger: {
        trigger: "#motionPath",
        start: "top 80px",
        end: "bottom 400px",
        scrub: 1,
        //markers: true,
        
        onUpdate: self => {
          gsap.to("#app-ghost", {rotation: 360, transformOrigin: "center", overwrite: 'auto'});
        },

        onLeave: () => {
          gsap.to("#app-ghost", {opacity: '0'})
        },

        onEnterBack: () => {
          gsap.to("#app-ghost", {opacity: '1'})
        }

      },
      duration: 10,
      ease: "none",
      immediateRender: true,
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
      }
    });
    gsap.from("#animated-text", {
      opacity: '0',
    });
    gsap.to("#animated-text", {
      scrollTrigger: {
        trigger: "#block",
        start: "top 80px",
        end: "50vh 90px",
        scrub: 1,
        
        //markers: true,
      },
      opacity: '1',
      translateX: "68%",
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#rocket",
        start: "140% bottom",
        end: "150% 30%",
        toggleActions: 'restart none none none',
        //markers: true,
      },
    });
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#rocket",
        start: "140% bottom",
        end: "150% 30%",
        toggleActions: 'restart none none none',
        //markers: true,
      },
    });

    tl.to("#rocket-big", { 
      yoyo: true,
      x:"+=7",
      repeat: 20,
      duration: '0.08',
    }).to("#rocket-big", {
      translateY: "-1500%",
      duration: '5',
    })

    tl2.to("#rocket-small", {
      yoyo: true,
      x:"+=5",
      repeat: 30,
      duration: '0.05',
      delay: '0.3'
    }).to("#rocket-small", {
      translateY: "-1500%",
      duration: '3',
    })

    gsap.to("#block-one", {
      scrollTrigger: {
        trigger: "#block-one",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        //markers: true,
      },
      translateY: "-4vw",
    });

    gsap.to("#block-two", {
      scrollTrigger: {
        trigger: "#block-two",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        //markers: true,
      },
      translateY: "-4vw",
    });

    gsap.to("#block-three", {
      scrollTrigger: {
        trigger: "#block-three",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        //markers: true,
      },
      translateY: "-4vw",
    });

    gsap.to("#block-four", {
      scrollTrigger: {
        trigger: "#block-four",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        //markers: true,
      },
      translateY: "-4vw",
    });
  }
}

