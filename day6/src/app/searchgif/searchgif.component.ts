import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search } from '../models'
import { Subscription } from 'rxjs';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-searchgif',
  templateUrl: './searchgif.component.html',
  styleUrls: ['./searchgif.component.css']
})
export class SearchgifComponent implements AfterViewInit {
  @ViewChild('q')
  qCtrl!: ElementRef

  urls: string[] = []

  constructor(private service: SearchService) { }

  ngAfterViewInit(): void {
    console.log('>>>qCtrl: ', this.qCtrl.nativeElement)
  }

  search() {
    const q = this.qCtrl.nativeElement.value
    if (!q)
      return
    console.info('>>>q: ', q)

    this.service.search(q)
      .subscribe(result => {
        this.urls = result
      })

      this.qCtrl.nativeElement.value = ""
  }

  // fb = inject(FormBuilder)
  // form!: FormGroup
  // // @Input() searchInput: String;
  // searchSvc = inject(SearchService)
  // sub$!: Subscription

  // ngOnInit(): void {
  //   this.form = this.createForm()
  // }

  // searchGif() {
  //   const value: Search = this.form.value as Search
  //   console.log(value)

  //   this.sub$ = this.searchSvc.registerAsObservable(value)
  //     .subscribe({
  //       next: result => {
  //         this.regStatus = result
  //         this.regForm.reset()
  //       },
  //       error: error => { this.regStatus = "failed: " + JSON.stringify(error) },
  //       complete: () => { console.info('completed ')}
  //     })


  // }

  // private createForm(): FormGroup {
  //   return this.fb.group({
  //     value: this.fb.control<string>('', [ Validators.required, Validators.minLength(3) ])
  //   })
  // }
}
