import {Component, OnInit} from '@angular/core';
import {CartItem, ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {ReportService} from '../../../shared/service/report.service';
import {Router} from '@angular/router';
import {RouteName} from '../../../shared/enum/route-name.enum';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [],
})
export class ShoppingListComponent implements OnInit {

  products: CartItem[] = [];

  total: number;

  readonly columns = ['product', 'priceForOne', 'count', 'priceForAll', 'action'];

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.shoppingCartService.getProductListObservable()
      .subscribe(list => {
        this.products = Array.from(list.values());
        this.getTotal();
      });
  }

  getTotal() {
    this.total = this.products.reduce((prevVal, currVal) => prevVal + currVal.product.price * currVal.count, 0);
  }

  removeItem(id: string) {
    this.shoppingCartService.removeProduct(id);
    this.reportService.showUserInfo('Usunięto produkt z listy');
  }

  goToPaymentPage() {
    this.router.navigate([RouteName.SHOP, RouteName.PAYMENT]);
  }
}
