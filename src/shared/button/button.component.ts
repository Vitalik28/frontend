import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UiService } from 'shared/services/ui/ui-service';
import { SpinnerComponent } from 'shared/spinner/spinner.component';

@Component({
  selector: 'app-button',
  imports: [SpinnerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  uiService = inject(UiService);

  @Input() label = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Input() loading = false;
  @Input() icon = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() iconSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconColor = '';

  onClickHandler(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
