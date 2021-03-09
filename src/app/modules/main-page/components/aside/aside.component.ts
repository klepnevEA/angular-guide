import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubscriptionHelper, Subscriptions } from 'src/app/shared/helpers/subscription.helper';
import { IGuide } from 'src/app/shared/interfaces';
import { GuideService } from 'src/app/shared/services/guide.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent implements OnInit, OnDestroy {
  public guideList$ = new BehaviorSubject<IGuide[]>([]);
  private subs: Subscriptions = {};

  constructor(private guideService: GuideService) {}

  ngOnInit(): void {
    this.subs.petSubscription = this.guideService.getGuideList().subscribe((res) => {
      this.guideList$.next(res);
      console.log(res)
    });
  }

  ngOnDestroy(): void {
    SubscriptionHelper.unsubscribe(this.subs);
  }

}
