import { ClassValue } from 'clsx';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import {
  cardBodyVariants,
  cardHeaderVariants,
  cardVariants,
} from './card.variants';
import { mergeClasses } from '@/utils/merge-classes';

@Component({
  selector: 'z-card',
  exportAs: 'zCard',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (zTitle()) {
    <div [class]="headerClasses()">
      <div class="text-2xl font-semibold leading-none tracking-tight">
        {{ zTitle() }}
      </div>

      @if (zDescription()) {
      <div class="text-sm text-muted-foreground">
        {{ zDescription() }}
      </div>
      }
    </div>
    }

    <div [class]="bodyClasses()">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    '[class]': 'classes()',
  },
})
export class ZardCardComponent {
  readonly zTitle = input<string>();
  readonly zDescription = input<string>();

  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() =>
    mergeClasses(cardVariants(), this.class())
  );
  protected readonly headerClasses = computed(() =>
    mergeClasses(cardHeaderVariants())
  );
  protected readonly bodyClasses = computed(() =>
    mergeClasses(cardBodyVariants())
  );
}
