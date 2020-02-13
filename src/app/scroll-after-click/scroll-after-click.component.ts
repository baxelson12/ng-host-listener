import { Component, HostListener } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { delay, tap, first, switchMap, throttleTime, switchMapTo } from 'rxjs/operators';

const DELAY = 3000;

@Component({
  selector: 'app-scroll-after-click',
  templateUrl: './scroll-after-click.component.html',
  styleUrls: ['./scroll-after-click.component.scss']
})
export class ScrollAfterClickComponent {
    // Listen to clicks and emit
    @HostListener('window:scroll', ['$event']) scroll(event: Event) {
      this.eventStream.next(event);
    }
    
    // Setup
    private readonly eventStream = new Subject<Event>();
  
    // After the delay, REMAP to the original stream (concatMap)
    // Use first() to complete outer observable
    get eventStream$(): Observable<Event> {
      return this.eventStream.pipe(
        throttleTime(300)
      );
    }

    // Basically the same as previous example, except we made a new stream
    // watching for clicks.  Delay on the first click, then bring in the event stream.
    private readonly clickStream = new Subject<void>();
    get clickStream$(): Observable<Event> {
      return this.clickStream.pipe(
        delay(DELAY),
        first(),
        switchMap(() => this.eventStream$)
      )
    }
  
    constructor() {
      this.clickStream$.subscribe(this.isScroll);
    }

    click() {
      this.clickStream.next();
    }
    
    isScroll(event: Event) {
      // Do math here.
      console.log(event);
    }
  
    ngOnDestroy() {
      // Cleanup.
      this.eventStream.unsubscribe();
      this.clickStream.unsubscribe();
    }
}
