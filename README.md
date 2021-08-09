# Angular Dadan Extension Sample

A lightweight Angular app that shows how to use [angular-dadan-extension](https://www.npmjs.com/package/angular-dadan-extension) package , which used for checking, validating, and manipulating [Google Dadan Extension](https://haal.link.sa/onboarding/download) with Angular.

## Install

```bash
npm install
```

## Usage

In app.module.ts we import the following

```javascript
import { VideosModule } from 'angular-dadan-extension';// our package
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideosModule //our module
  ],
  providers: [],
  bootstrap: [AppComponent]
});
export class AppModule { }
```

In app.component.html add the record button component

```html
<lib-record-video-button
  (onSuccess)="handleResponse($event)"
  (onFailure)="handleResponse($event)"
  title="Select Video"
  type="select"
  buttonClass="dd__record__button__default__class"
  [buttonStyle]="{ color: '#1e3799', 'font-size': '15px' }"
  [showSvg]="true"
  [showPreview]="true"
  [copyToClipboard]="true"
>
</lib-record-video-button>
```

In app.component.ts we add the following

```javascript
export class AppComponent {
  title = 'angular-sample';
  public videos : any[];
  constructor(){
    this.videos = [];
  }
  handleResponse($eventResult : any):void{
    const {success, data, message} = $eventResult;
    if (success) {
      if (data) {
        this.videos = data;
        }
      } else {
        this.videos = [];
        console.log(message);
      }
  }

}
```

the handleResponse function , is a callback function which accept object with three parameters

```javascript
handleResponse($eventResult : any): void {
    const {success, data, message} = $eventResult;
    if (success) {
        // only false when user close extension
        if (data) {
            // represnts the selected videos , or recorded video object after stop recording
        this.videos = data;
            }
        } else {
        this.videos = [];
        console.error(message); //User Closed Extension
        }
    }
```

## Record Button Props

| Parameter         | Type      | Description                                                                                 |
| :---------------- | :-------- | :------------------------------------------------------------------------------------------ |
| `type`            | `string`  | **Required**. either record or select , else will show error                                |
| `title`           | `string`  | **Optional**. button title                                                                  |
| `buttonClass`     | `string`  | **Optional**. the default class , or your custom class                                      |
| `buttonStyle`     | `object`  | **Optional**. the default style , or your custom style as string                            |
| `showSvg`         | `boolean` | **Optional**. to show Svg icon in button                                                    |
| `showPreview`     | `boolean` | **Optional**. to show preview dialog of recorded video                                      |
| `copyToClipboard` | `boolean` | **Optional**. to notify user that video shared url was copied to clipboard as toast message |

## License

[MIT](https://choosealicense.com/licenses/mit/)
