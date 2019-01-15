import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'httpLink'
})
export class HttpLinkPipe implements PipeTransform {

  transform(link: string, target?: string, full = false): string {
    if (!link) {
      return null;
    }
    if (full) {
      return `<a class="link" href="${link}"` + (target ?  ` target="${target}"` : '') + `>${link}</a>`;
    } else {
      return `<a class="link" href="${link}" title="${link}"` + (target ?  ` target="${target}"` : '') + `>strona WWW</a>`;
    }
  }
}
