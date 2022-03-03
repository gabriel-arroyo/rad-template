import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rad-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.css']
})
export class RadCover implements OnInit {
    @Input() cover: string = "http://via.placeholder.com/1698x1069"
    @Input() logo: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAABQCAYAAAAk26F9AAAACXBIWXMAAAsSAAALEgHS3X78AAAew0lEQVR4nO1dO5PiyJo9fWNdohjveqX2IYqxMFv1C4qJdfBaHezaTf+CVv2Cpu0JYlQezm5T3hobOyoTa2DBv8Lf2IFg/Vkjvw+lUvkSiOrqbp0IApCUD0mZJ79XZr7666+/0KBBgwbPhb997Qo0aNDgx8I/fe0KMFr9aWg6d1iM0uerSYMGDS6JV19DvWr1pz0AIX16AK49ku0BLAGkAOaHxWh5oeo1aNDggng20mn1pwGAiD4+JOPCFsAcwOSwGGU15NegQYNnwMVJh8gmBvDWcMkKQAYhxYC+dwDaEFIQAAT0eWPI4xGCfNLzatugwY+H2aYbARgAiIed9cU1iIuRTqs/bQOYoEw2LKHMTyEJsv2EEA/pRjn9ACBuJJ8GDfww23QTiD76MOyso+co8yKk0+pPBwASAFfS4QcIaaQ2JiXb0BiCgLisPQTxTOoq50cAPcu2x6XLw2K0OzEtY0efQD0hD0SafHfcfmyOB1ueLtBg2ZMO7b5n+yGRTjbsrOPnKrN20mn1pwmK0s3FpQ9qKGP6MPk8AojUDtJAj1Z/ukNxkLDhA5M6Pfs/Kxb3AaJj61Tu19xWWv1phqL97/NhMRpr2pgNq8Ni1HNfdryXJco2x9tGda8PtcXptPrTdqs/XSJvDE8QDSi6tLpzWIx2h8UohmjIj3T4DkBKDamBBSQ1+BIOAHySnuugYnErIixTuoDqFKDc+eet/jSCP+EAYiDyxVxTJiCcH989Zptub7bpXry/1EI61ABTCBvLHmIkDJ/btnJYjLLDYjQA8AvV4wbAksT0BmZUJQ5A2NWqpt0DiOh9mEjOlO8ewuFQRW2+95VQWv3pGGZHRVChzG8SpGb9gfz5XwxnBwcqhLOCUGm+qg58WIzm1LDnVK+01Z8GjaplhNrBnyDeqYyPyn9+vqFy/BG5J1LF/LAYLVv9qY04AvqO1LR0Tk6rOhP20vmdr11P8rCaYCKjbx4k2bDD5wmC2C+Ks206pFIx4YQvqWMrHrQXV7+XACLnP5TDvxwWo7nrGvr+ohx/7ZJwNbYaGU8QhPMPW50M+TwcFqPIVrahPimKxLKHIokdFqNXVfN9ySCyGUCQrfouVgAinfuc0oX0wbCzrqK+AjiTdCSD3rN3aBotMwCJq1ypno+kfjUgtPrTGEUphqUFVbJR8RPKIRErCIlETXtsHwYCU/EOwG9qefJ7JunESUwukFr1Sc0HZe/rd2NMnm26Ywiysdnx9gDGw846oTQhpVGlPiboPYDBsLNOXeWfrF5JBr2vQTgDAO/p76dWf/qIPPanVI/DYhS1+lMAeNvqT2MyOrvKSJCLmhyw+D3OA9ORsItwPhCBhMrxtibtHsBAei9qmpJUgbLx91HzXks2nxMIJ0BZrXok9XyJYgf7nhwSS7gdB1cAfpttugOIezepmFfS93y26YauAMOTSIde1gRfh3ACiFEIEK7XTxCeqjsAv7X603sdqRDx9ACMW/1p4mHk1npIiLwYT/S9Q9GOkUq/s5carEjPUg2wtDXGLYCxZDNTxXL1/x6ifWTSsUi5hu1Cclq1TjoyUfNJdRV2IEHxfvfICS9DsaOxDetFQ4ltkmOO2hA2seiwWKezTfcW4hmGsE9LutMc20KQfkb5c5kcf2XFqZIOG+i+RhxMgmJDeaL6cGMJLWlDkEpmu4464z2KL03ncZEbpfxyCqO9gaiAMlmp/wFNMF6N8FU171GeZBsp12yRDwaMQhoDyaUQncHW8FVbTluTzylqlTp6y/FkmXLuWSQdekaBUq7qfQ2V8+qzsCFt9afhYbFOQUSt2GlCQ357iGecKCrUMR9fVCYdEqnvIPTnZ/VSaRpKQP97yGegh6b0pBIMAPze6k8HJnGcGl5sqYdchum3yS2sNnTdSKKWpx560lx2VAElpA51MFT+s5qq2lPGKHdqlbAylBtfW3pWO5Q7D5B7pUzi+8pDteJ8vGBQq7YQ4RUh/VdJRld3OU8e7WVJQ02vHg9Qz+RnHVbI20OGnERLA9iws96BzBPAkYRSCPKxTo8gW09A+bfpM6c8tThF0olBeu8Jac+F+tKWEB0wgRh5B3CId4fFKG31p58hpKOT7kHpyKnhsiM0ofUBiqOZ+t81euk6qO6YcVCgOqmENz8sRgmRnEw8VwASMUKOdobAvTcAfrfU+R3KZPFI+WWWdInmmJrPU0VpMEF5QLiGvf6BI88J6netq4OLOrDI/2ubrjHsrHezTTeGeE6qfU1FD2VD/GS26faGnXWmS1CJdIjN+VMCsZ4JSxv7nYgBxIsOIF7AHH4qQwwRpBY+h2GYOsRZ5RjmN5lG1ZC+bWXqnlMKAEQ8AYpq4g1y+4uvWsZgr5YqQXH9MktanWpVIkvfijiCAGU8oGjXc0kkqeaYTl0G9FLpJdXoU5BCzDp31UnXFq4ghIBYl6CqpBNBWr+GpsRPqJAtgP8EMDKkfUCFcPJWf9rzYO4EJM5R3mN4BDfR6Dqm61PfOn1NGJ5FekaWamNZyQbfw2IUE/HIHe8NhSqEFcrZw0xUTBam97zVGOF1ZXuRjkcQIOOJHA8FZwIFmKr1ASCel08dvhUQ2Uxs11D/rxzFXZV0BiApR4pkZDH1GoJwFgD6mrRvZ5uuaoTSguwuX1r96R6CWBJDp4shbq6NXNJxiYMAjqN53OpP2y9shHkupDB73AAcPX5LlKWp/4C/dDGXVKh76fiOOzCdv9ek1b3znSkfDwTwm0bB13zA9+UqrwXkRh/D/mwC0wnv4EAiggFHfM423Tn0RtB/A/DPhmzY/tIzRTKS+JxBkNlnCAlmeViMQk0g28+UH0s6benaMcjNabI/UX7ZYTFKDPVt0KCBBBI2MrjjfJ6GnXWoO1FF0glBIwDZbkxel/+DIIv3mnPsabJ5AubIbyijj8mGMEfuMUghCCimc20I1eAtSUxzlNfzmVCaxFKfI6qs4eLAi43dafDtQONePxkVbJsh/FYkqMV71ZY6rElElYOrIugrNzFZtTVGvh5ykTjSJAkhyCSj8zxpjcEGTD73ttWfHgPcSKz3Uq1Y5fO51jO/Yz3qyrPBD4cJPEIufCANzGOHucEmMMg4csRs0w3kPl9laYslZwCzLhcPO+sdGaFizfktDIRFrK263lLYlzNYIrfpJABulfMBcinoFsIWkKH44FIq24XQ45oquIawW9Wdb4MfB2GNeV1BDMyJ4zof0lkNO+t0tum2Z5tuCsX+50U65K5NAWDYWWfDzjqAMLLtpcu2w86a1S82NKmIKQagTZZvGYHm+gGEq1a9Vk7DrPweZeNmRucHEDEYPZTFvrmhbF1dLoH4Qvk2+I5BkneVhdd8cUd5m+BjWM/oewKhudyQsAJAUq/IMBzp/PKsVilxOCxlxBAdPuITw856DoN3Q3azzzbdzOHNmiCXYnT4E0J6Yo9GhiJBBVTPCX2H9DnadXxiaAzzjOrCG/agaYIIZVjtQA79nu/XNUp5xYp4SGfZYTHKTlg7+VL18YG8/nKAGmwlFIhaS15ynvTzUoMg521S+30knbvZppuh2GfG9BGkQxbpOwgCKUkoJLlMUO5498POejzbdI12GimPkPKQI20njpvg6wfQu09/ouM9CEbdohins0M+83mLspvYF5d8wUCuAkYoq5iMW9hjkGz6/U8Q96AG56n4AIdLWeNB1OFdqz+dw72EhROt/tS4Rg7FDEWoZ8T/ADENog3xLs4dZB4pnzmqzY2y4QmnrdhYFaHzCjfU53fUfli94o7/XqP2sOQSazIeq0YiHYi0fkf54d/oylMq+gQzUXC5KYSko+swGZ2L6X9oq6ulHs+ByHB8b/MuGKJ0GTxFwOceAttJErtdhAP4R4b74C05GNS6JBASdh2E8yStMpiiHql2bJjgelaewFHyvoRqxfCefFslT1axWL0KpJO/zTZd8OI9wFESijUZXUF0dGsDG3bW89mmu4X+ZmKY1aeU0thEvRS57Uee5CZf84bOpagYxevZcHSBbYCQsiJ4NBDDzGlG6kgeWs7NPa5hGKVOZUkRG1bSxNq6MIY0oJC0VWVxdhv2ILInyakOkrgn9VJn1zwnTx58I8e1uuVmVfgMHjrEOP3ZBwAyHekAgnjabBiGfc2NO1q4J3UUGEE/oe5aqF7a99OD6DQmvZ47VILcqBwq16T04dE+gGdcDsHVeR5tIfDkkne94MxRjmt0saatYHTUkg4R4twzj4S+Q49rfXHN02Ja+XZDdSEighhAH1tWFU9SewhryA8QRB5L/11tcuyaQtTqT61t0jQNadhZZ7NN1xSHZwMvrG/1Xn2abbpzIp85hE1BnfW6AvAaHsYlIiXdkgw2/OnIO4KQJsbIFyRSwbrkALmOXQWuF3yquMnYk4HYVk7qyMOUduWRt4yrln7LnioSQBWSqwKu17jGvO9pQbI2qu0yYcIK9KwdKm8VbCG1a8MM/8L1HoTj7K+OPE55VgM2w7iCA+8AZLNNl9dKDckgHEGIWGPKyFiJ2aYbS7sHRiiva7sadtbpv6LsgTgsRq9o7o/xRijPnfStPtCEjmXI1TCTOlQANRzXjGQX6QSO8yl9h4bzK4fXKoS5E3LeVVQdVlk5/wjVNrbLSP0x4TPMkmsEc4eSVelT8lah7hYRGa4zLXex1aSRvW2uevoOVqoHz2sQJFXRRC4u0tl61s0XT7ImxKRj69i8VmoMEWeTIPe0WEGGozHIHkSi2T3yDvY/EC9ACylaWNeQPrPISSMrE4sMWRRfIp+V7gvXC9YtMFU1D5dkkJ6Rf3KC0fFIOpTW5fGSkdJ3aDi/PSxGRtWI3rfJe8fP2SRxrWx522AKm3DYpeYVF0iTMbENJA5EjvNzIv1zVMXEcT6omF8s/2HS8RkdrpGTTwKxbGHmUdjVbNM1zSrdA/gXS3q26fA3pxkcFqOUSK13WKx5IW3V/pNBSGEh/R/TfXhJOnATRmI7SVKCa8X9Oezi6qn2nO3BvceUDgFQ2M+sCpjkTNJKSnn3oCf/2JJ35ig7oOdtuu6U+W5WQj8x7ZakwQD2zluqr4dTY095nmokBiyzBiRUkZyfVHuvj6Sj4hripj7ONl2e2zRXV4AnQnCJ5a5FglLk6+Xw/8lhMdqRGz6BILXPh8V6DKCnjE4BxAPkkSyG5kXTKme6ZxA66m8kBE87wcSwqwLD5Sq3dXCuW5UGAuSit6/hmOFDcizVVZ3DtpWeg8kLegWHVNbqT6tuBhkaju9teTgkV17UPrVcw2sQ+daHkeE825S6c4cJkWd+j9AMJH8Djgv2nKLH3UAQ0B+zTTebbboJRy2TFPQThFSx16TdSt4xEwbI7TU4LEbpr9MJb4H6BflLez/bdJezTTdQJlBmyAMLmQQKo4BptUMPY6jV1gL9kpgytgAmDsNgakkPOIzPHkZHHXpEHFWX3kwddWLvRVIxX6DorUpNF3ngBkIac6rYnoRugvW9wE44gNhBQ0dqrgHkxpGvDU+Wco8gYWIC0a9v6fPTsLN+BeFUugXwethZvxp21gPdYC4bkpc4LyjqGjSTm2JyEogZ5TGRRIyi5BN55JlAiJljQEgkdEwnYt4AWEpGbzak/Y48RidCebQYGNb2cb3g1HSCdGqX5yL2iGcxlkEwdnDyythsHOpynIwrmO0BTzCT0dxBcixtVu0Un5WBJMZ5MTo8l8814EWWcy7SCQ3H93BvcvdO1/Fr9IapeIRYJM/LsE3CRGw5l7nykF3mqU+hnmAVLCMb0I5WlP8F4sGX9DwDxqCORbsSprDrtGz0Tn6dTnAQu3n+jNyr9QXlxmQa9Srbc1r9aZsiZV069ZO0cJjNk2AT4QOYnwU3oMiSd2I5p8M7mG0QvNGd7ZldozrhlMRzki6NzgdPRB7XWAndlMghIV3B3n7fWRaUCy3pquAzxLu8PSxGrw6LkXFXlEtBJp1LFHyFnHwGFO/Tg/ul7yF2kWR1ag7h1fBttG8BpLNNt3dYjJaHxSiEaLy3kO6T7EK6UcXl8SnFQhAJpPAbhWUJxEg6Du9IbDk3d5DSY8UF6R9gl4R9SK4K9hBbHGntCyT53uN016415uhMlTeqXh0AImYosZx3DYKfoTdjqAgPi1HyHBsSmHBUr8idvUK9c0UYVwC+zDZd6x46hKOxj9SpOcwNgO0EJnXrj9mm+4FsR0vkMTsxXTOGPrrVVccjcUmLffuK/PcKYRltJy3D3lykkpnK25JqFVnqkNK3z/teIQ++NObnmMah24hPhwwiLsVp6KVwidgxk30Mg0piirgl2Dr4OaqVMV8PEnCRTgzxjFPYB8ybltjhNnLkdzGowYEJzHESdeAtGaIGBq/VA2jlMlLLbGoKW/gz2NWuT7NNN/x1imjYWQ+4I/MmYQavlesFB6RGhahmB5ND5H0wQHkLFvbamcDnfDpOBrcLdkC2p8iRn628iRKIVxscXqQQp9lBIss5m2oVwKLynipdeDo1dsg3C0wd179t9afLS70TF3SkE+OyM1jfUDmFRkovhFYbm6Sod+OyOwgjc3RYrLnRxNAYEz09Pqc05GOIfAW8pUaUQIzmIdwkMXEYHWWv29JyHZDPSwos5fKGeedIB14gw7jT8yTBJlloycohsbk29bM9g8ARqa1DQu8qdF3HPyhsYQx3UOenVn+afY3lcgukQ6v6zVHfDF4T7pTpEQCO7us5/EjvCvlypj4q4TXECJbScho96BtJVWLwwQpCl7Y1WBPYKO+DSUUCyCzX3UsN0uphq0ByJ4M6Ul1SuG0O4DnkGVnOvUG1gXQrScWuNlmo10G/S6sOvGurU52tE7oJn/Ezlf1RXsKQkKCalOXyBsjYQqz/04aQcCYGFS+qUL4PXISzqqkcOZL0XNJRZ86Hjvxs51PLOS+0/DfJ80ViOXcS6TgkpFMQUb42bxig35AQZJR+5yjjCsLpUEV6PBsl0iFf+4Pheh/reBXEyv9LSBkA2SaIZBI6ZlKt6mw494fFqOeQcHSG7KrYohhJanqOBa+bwcZQmMjoKcXY3ltiOeeLBPWp/CuTl+hMia3Otvu5wrKkRiKk+3SFF1zjmXe5NS1tMYaZYOoamYHcsAwAIKPuzxBLR9aJ8bCzXpJx+g7m6RdhDWXtIUj7tY/RmBrXOfe7AnD0xLhC8DXH9spv1U3tQyheJHcKyIBdl33vuGCXAaHlnEu1qot0HpSJq658E9tJysskRDBuyDHyLNCSjmUfY27MdRJP4aES8dSpY74bdtYJ2XE+QgQmmqz2pzScPYSN4DNE8GNwWIyiKnYM8iLcUh6+aw6toJekQksaXceRn7Vu8SdbfqljaY06jJRxDXkAItDQZb84x55TR7TwSnZl+0zw9AwviOAmHu2ysJeAdVvh2aa7hP6mHyAMsXWoIo/DzrrwssmgbFrHxBd7CAmHCec3OtbzmB3foEGDC8G171UEvZrFm3LVIfGENeShYg8gVAgHkFYva9CgwdeBlXRI1TGJXDGdO5d46o4JegQF/ZENhwnnned8rwYNGlwQzh0+aca2btGrK9DexxAd/WSQG/tcbAH8wqoaxRtxfMs7eXeLBg0afD14bStMQXw6QxQTTwz/1fh06J2Rdgvgw7CzDmirmwGKkbYN4TRo8ILgWpj9iGFnHdFWoWp0LEcGh8h3W6iqMp0SqfsIsWJhAhQWF2Ky4dic9IS8v1tYVilkuM4zAtS4Xe4zIYPHei+E1Hbya87S/tZh9V7pIO9FrpziGIgUgni8Yyto1TG5jBBl7xXv9JkCSDnOhmaij1GcurHCN2401syebqMsEeqOAYIMLrX3egM71K2tGUuUB1f12O7cuKZvAZVJB3Cu4Pdh2FlPLORUgoZ0jp1JJ6nwTHUIkpPrsIcI/DPF4TwbKLpVJgSVREIlSZ0TXKvAJy4oPSHfHeqNt/KB+ox9EXpc81LeTyr9Vp+xul3Ni8RJpMMg79AYZWJ5QO71GhuuYfA6IzvdMhNEMAFEg+rBvJzEA0RczkUeukIiXCfd77oljD3KnTdDeTQ1dvJGFbgsLCqr7niAslraQ/1eXFniygy/vwpJnUU6wJEUYpRnpm8hVJwlSS5j2DdTOwV7CGnKZzscbyj7dp/bIFTSyFAkDFXE/iZGqwaXg0ZKVv8HKBJXbW2UVtm8KM4mHQYRS4R8bynGvbyEBdlrBvQ5hYC2EDajlJY/vQha/anpwcgjiEwY8u9T9lhq0OBsKPtp2aRzXd/bHxajOsJXrKiNdGRINpcQ4qZ3ACLN3lj8UEI6pOrkssqQAlheSn1SIa2Ul+EHMfA1+PEgqYYBcJyZflFchHQaNGjQwATvOJ0GXwfkBYwg1NYJhLQ3Jg/iBPli8z0IaTKbbbophIS4pLQJhKSYULYR28Aonxi0GaGsskplALRoOnsGqQwZLAmyOL+DUIEnyrUZRHzVnOtJ9xMjl3gTOaBztulOICbqhvJ9SzFaCcRIzfdfuMb0DKX8S89LTUe2yTHymejzl+Al/RbRkM7LRwDhrm2j6Lbl/ylER38DgBec5+t29HsJ0eFuICK0MymfCXIVeILiEg5ymW8g1j8aDDtruQwVbyDcvHcQy9IulWs5n9d8nDrzR+RbBvdmm+5cUqV7Uh7yfbONkJ0Y7CktXAPzM5TrBOTP6w0Fwh7T0bQaefmKN1THzPAcGhjgNQ2iwTeDG+jXQXpP5z5rpoRwx76GOa7mHmJxtS1EZwvp+JbO3aO47k2KPL7kaIOjeCyeTqN6Z/jaexh2CyFpKFIO8/89gKimeXyAIF/O6+8QhLOF2Dr3F5w37eeHRkM63x4C+tZ1ri0qLKpPHTRA7m4NaIQvwbC4Gi8a/xHFmJSPEBJCYVmU2ab7F9VPDSOYQJDUDaWda9bP5nyP90fXcH4p3cdAup6fkS4vG/Yobq/8d/rOKK8vVJeoYr4N0JDOi8Vs043IlhFKh/cArqWgTKAY8yN3OBmPlPa9JKUAeUQ3Sx830K+QF5Ld5A75BoeAmG5yC2XnVPp/D9FxI+k4Sz+qWhJCEMQ9XXMFzfQOkpRulfqDrmfVJ0YuXQ3oWfFz4TLbs003pE9QultBgvKSLUuI+35D9WqknDPQkM7LxRhipGWJYYlchWFJYgWps5M0otsBgA2kAJBIKkhG37J0pCOuN8glirFEGDcQc+R+R1Gt+x35xGCZjAaUx1uF/HrIpRz5fl2I6JuJ7wlC+mpDEC1LYlcAHgz1jqBHiKKkNqb/n6R7a8IoTkBjSH6hGHbWPaljcnwSe4LadE0KHA2xfCwhFWlHnxRARl4dWUoAeZBeQ6gMO+nDWEKSLJR5cIW8pHRHtU+q3y3935FnKYAgvFvQ9BfJAyXfL+N4f1Kd/pfu7Th9hrxNAd3vQHp+8hQbtd4Z54Pi85Lruhx21ik9e65j1hiRT0MTp9OgQYNnRaNeNWjQ4FnRqFffEGgv7OR7mtfV6k8ziO2QJ/Q/lE5nECpPD7n9KeCT6ux5ad7Rce6btC7RcSItl6GbfU/ndlSebMxeUt5H976011iIZr6dNxpJ5wWBOs3xWzreo5nHH2Fx/8rp1K1iW/1pIB/j363+NGz1p39xR2z1p23dUg1K2kApK6DObbofbewMzW9ro7hh3O8oGnn/lH5Hynm1rCUd/wfd1wDAH3Qso3ubcPpWf5oqeSTIjeI9pSyOcj4azqmMjP4v1ffWQI/GpvMCQI2/DTHCtiG8K3uIhs5eLI4duYVo5LcQHpYQwvjJLvSd9B1CeI96lHaPfBIu7wM2Qe6N+Rl5vMuKrv2Tfs8Pi1FMG7J9ouvvqRz+L6fZS/ncAHinTiZs9adLzlc61kYeSRxCkOwfEBsLxkRUv6n5kRT4EWK31JjuO4Dwhr3jNPS9hSC6jxA7sWaUR0DPsXdYjEIi0pTqGEkklVL6HQQR7ijfn5uJwW40ks7LwQ1EQx4jj1WJIAhnBb89wScQbmLucGPp3AfkwXNjiI43Rt7Bb5EvtsaBeiy9BMhd35+oPr/QMf7/gdKwy31OZbQh4oB4KyAAR5UkQDmCOqA0AQBoOvFRopKktL8gng+7tK+UvLnsgOrCrnQAGEh5BCh67wIuUyHDjwBSUtfmECT3uSEcPzSk83LwgHx9aRl7iE7YVo7FKMaYLCWJYY5iDMmVkn6OfK4VR9vK6lEbxSDAGKLjRchjVzg//s/pudMmyBcsS1BGDGHLOXZy6tgxXX8FZUthSR17giASdp/fkrSSIA9AzOj8I/JAP76GgyUB4L+Qx/kcnxlJORHEM7pB7rZPQGRK1yzpeGpSIxsU0ZDOywEbIlkd4k4xhhiZA+naEPkkTR/skUs3/448GG98WIxmEIQXQ3SwLfLIZM5/idymMkYuRYTS/7cAng6LkUqaJZCUwzYSGaxijqnOiSZ5D0JlejgsRrvDYpQeFqOUVCM+t6X74WM3VLcE+fpNVxAq239zHpoVG3fIJ6JyXViaHENIdVf0+YLztlL6YdDYdL5zsB3iOZah9EWrP51DkOzYeXGD7w4N6TRo0OBZ0ahXDRo0eFb8P9Q/tv0FYdxAAAAAAElFTkSuQmCC"


    @Input() contact: string = 'data:image/png;base64,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'

    constructor() { }

    ngOnInit(): void {
    }

}
