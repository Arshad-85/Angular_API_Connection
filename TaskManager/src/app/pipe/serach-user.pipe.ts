import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Service/user.service';

@Pipe({
  name: 'serachUser',
  standalone: true
})
export class SerachUserPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {
    const searchtext = args[0];
    return value.filter(a => a.name.toLowerCase().includes(searchtext.toLowerCase()) || 
    a.phoneNumber.toString().includes(searchtext.toString()));
  }

}
