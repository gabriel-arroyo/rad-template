import { NgModule } from '@angular/core';
import { RadComponent } from './rad.component';
import { RadButton } from './button/button.component'
import { RadChat } from './chat/chat.component'
import { RadDumpster } from './dumpster/dumpster.component'
import { RadLogin } from './login/login.component'
import { RadNavbar } from './navbar/navbar.component'
import { RadQuote } from './quote/quote.component'
import { RadQuotebar } from './quotebar/quotebar.component'
import { RadRegister } from './register/register.component'
import { RadCover } from './cover/cover.component'
import { RadWarning } from './warning/warning.component'
import { RadProcess } from './process/process.component'
import { RadProcessItem } from './process-item/process-item.component';
import { RadContact } from './contact/contact.component';

@NgModule({
  declarations: [
    RadComponent,
    RadButton,
    RadChat,
    RadDumpster,
    RadLogin,
    RadNavbar,
    RadQuote,
    RadQuotebar,
    RadRegister,
    RadCover,
    RadWarning,
    RadProcess,
    RadProcessItem,
    RadContact,
  ],
  imports: [
  ],
  exports: [
    RadComponent,
    RadButton,
    RadChat,
    RadDumpster,
    RadLogin,
    RadNavbar,
    RadQuote,
    RadQuotebar,
    RadRegister,
    RadCover,
    RadWarning,
    RadProcess,
    RadProcessItem,
    RadContact,
  ]
})
export class RadModule { }
