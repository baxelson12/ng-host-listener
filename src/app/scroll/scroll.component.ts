import { Component, HostListener } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { delay, tap, first, concatMap, switchMap, throttleTime } from 'rxjs/operators';

const DELAY = 3000;

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {
    // Listen to clicks and emit
    @HostListener('window:scroll', ['$event']) scroll(event: Event) {
      this.eventStream.next(event);
    }
    
    // Setup
    private readonly eventStream = new Subject<Event>();
  
    // On the first emission, delay.
    // After the delay, REMAP to the original stream (concatMap)
    // USE first() to complete outer observable.
    get eventStream$(): Observable<Event> {
      return this.eventStream.pipe(
        delay(DELAY),
        first(),
        concatMap(() => this.eventStream)
      );
    }
  
    constructor() {
      this.eventStream$.pipe(
        throttleTime(400)
      ).subscribe(this.isScroll);
    }
    
    isScroll(e) {
      // Do math here.
      console.log(e);
    }
  
    ngOnDestroy() {
      // Cleanup.
      this.eventStream.unsubscribe();
    }
}
