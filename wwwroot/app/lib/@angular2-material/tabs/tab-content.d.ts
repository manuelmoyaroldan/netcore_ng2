import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular2-material/core/portal/portal-directives';
/** Used to flag tab contents for use with the portal directive */
export declare class MdTabContent extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
