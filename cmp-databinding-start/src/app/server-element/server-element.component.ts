import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // // none, ShadowDom   = emulated já é o padrao
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("Constructor called!");
    console.log('Text Content: ' + this.header);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("NgOnChanges");
  }

  ngOnInit(): void {
    console.log("NgOnInit called!");
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content Paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("Do Check Called!");
  }

  ngAfterContentInit() {
    console.log("AfterInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content Paragraph: ' + this.paragraph.nativeElement.textContent); 
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroyed");
  }
}
