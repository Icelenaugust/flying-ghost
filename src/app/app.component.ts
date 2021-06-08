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
        end: "50vh 400px",
        scrub: 1,
        //markers: true,
      },
      opacity: '1',
      translateX: "68%",
    })

  }
}

