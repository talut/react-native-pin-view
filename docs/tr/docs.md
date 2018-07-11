# React Native Pin View
Kolay, kullanışlı, hızlı şekil alan PinView bileşeni. IOS ve Android üzerinde sorunsuz çalışıyor ve sadece klavye ve giriş'ten oluşuyor. Bu sayede istediğiniz yerde sorunsuzca kullanabilirsiniz. Ayrıca ```react-native link``` komutunu çalıştırmaya gerek yok.

<p align='center'><img src='https://taluttasgiran.com.tr/assets/demo-of-pinview.gif' alt='PinView 1'></p>

## Başlarken

**Yarn ile yüklemek için**

```
yarn add react-native-pin-view
```

**NPM ile yüklemek için**

```
npm install --save react-native-pin-view
```

## Basit Kullanım

```

import PinView from 'react-native-pin-view'

...

<PinView
    password={ [1, 3, 5, 7, 9] }
    onSuccess={ ()=>{alert("ŞİFRE DOĞRU")} }
    onFailure={ ()=>{alert("ŞİFRE HATALI")} }
    />
```

## Öznitelikleri

| Nitelik | Tip | Varsayılan | Açıklama | Gerekli mi? |
|---|---|---|---|---|
|**`buttonTextColor`**|`string`| `#333` | Tuş takımında ki rakamların rengi. | Hayır |
|**`buttonBgColor`**|`string`| `#FFF` | Tuş takımında ki butonların arkplan rengi. | Hayır |
|**`inputBgColor`**|`string`| `#333` | Şifreyi girmeye başlamadan önce ki giriş alanı rengi | Hayır |
|**`inputBgOpacity`**|`number`| `0.1` | Şifreyi girmeye başlamadan önce ki giriş alanı opaklığı.  | Hayır |
|**`inputActiveBgColor`**|`string`| `#333` | Şifreyi girmeye başladıktan sonra ki giriş alanı rengi  | Hayır |
|**`deleteText`**|`string`| `DEL` | Kullanıcı şifreyi girmeye başlığında görünecek olan buton.  | Hayır |
|**`onSuccess`**|`func`| yok | Kullanıcı şifresini doğru girdiğinde çalışır. | Evet |
|**`onFailure`**|`func`| yok | Kullanıcı şifresini hatalı girdiğinde çalışır.  | Evet |
|**`password`**|`array`| yok | Sadece rakamlar kabul edilir. En az 3 en fazla 8 elamanlı bir dizi olmalı. Örn: `[1,3,5,7,9]` | Evet |
|**`disabled`**|`boolean`| `false` | İsteğe bağlı olarak, `true` ya da `false` yapabilirsiniz. EğerIf `true` ise,  kullanıcı şifre girişi yapamaz. | Hayır |


#### Örnek Uygulama

```
import React, { Component } from 'react';
import { View } from 'react-native';
import PinView from 'react-native-pin-view'

type Props = {};
export default class Master extends Component<Props> {
  constructor(props) {
    super(props);
    this.onFailure = this.onFailure.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }
  onFailure() {
    alert('ŞİFRE HATALI')
  }
  onSuccess() {
    alert('ŞİFRE DOĞRU')
  }
  render() {
    return (
      <View style={ {
        flex           : 1,
        backgroundColor: '#f1f1f1',
        justifyContent : 'center'
      } }>
        <PinView
          onSuccess={ this.onSuccess }
          onFailure={ this.onFailure }
          password={ [1, 3, 5, 7, 9] }
        />
      </View>
    );
  }
}
```

## Katkıda Bulunanlar (Hepinize teşekkür ederim.)

- Tüm katkılar mantıklı / geliştirici olduğu takdirde kabul edilir.

## Altyapı

* [React-Native](https://facebook.github.io/react-native/)

## Lisans

Bu proje MIT lisansı koruması altındadır. Ayrıntılar için [LICENSE.md](LICENSE.md) dosyasını görüntüleyin.