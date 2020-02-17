import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService, private router: Router) {}

  ngOnInit() {
    /*if (!localStorage.noFirstVisit) {
      this.router.navigate(['welcome']);
      localStorage.noFirstVisit = '1';

    }*/

    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
