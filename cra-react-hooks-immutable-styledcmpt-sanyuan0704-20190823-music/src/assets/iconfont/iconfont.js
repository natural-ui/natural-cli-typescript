import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1565320061289'); /* IE9 */
  src: url('iconfont.eot?t=1565320061289#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1565320061289') format('woff'),
  url('iconfont.ttf?t=1565320061289') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1565320061289#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-41:before {
  content: "\e62b";
}

.icon-jiantou:before {
  content: "\e662";
}

.icon-paixingbang:before {
  content: "\e7bd";
}

.icon-shanchu:before {
  content: "\e63d";
}

.icon-zhongxinshipin:before {
  content: "\e644";
}

.icon-pinglun:before {
  content: "\e6ad";
}

.icon-shoucang:before {
  content: "\e6fc";
}

.icon-shipinbofangyingpian:before {
  content: "\e78f";
}

.icon-stop:before {
  content: "\e650";
}

.icon-shangyiqu101:before {
  content: "\e6e1";
}

.icon-xiayiqu101:before {
  content: "\e718";
}

.icon-xihuan:before {
  content: "\e633";
}

.icon-shoucang1:before {
  content: "\e636";
}

.icon-yonghu:before {
  content: "\e60a";
}

.icon-plus-pause:before {
  content: "\e723";
}

.icon-liebiao:before {
  content: "\e640";
}

.icon-geshou:before {
  content: "\e619";
}

.icon-zuijinbofang:before {
  content: "\e61c";
}

.icon-youcecaidan:before {
  content: "\e606";
}

.icon-xihuan1:before {
  content: "\e86f";
}

.icon-icon-:before {
  content: "\e642";
}

.icon-icon-1:before {
  content: "\e64d";
}

.icon-zanting1:before {
  content: "\e61e";
}

.icon-yinliang:before {
  content: "\e61d";
}

.icon-headset:before {
  content: "\e885";
}

.icon-jiantou1:before {
  content: "\e618";
}

.icon-bofang1:before {
  content: "\e731";
}

.icon-fanhui:before {
  content: "\e655";
}

.icon-shunxubofang:before {
  content: "\e625";
}

.icon-caidan:before {
  content: "\e65c";
}

.icon-tianjia:before {
  content: "\e62d";
}

.icon-xihuan2:before {
  content: "\e601";
}

.icon-suiji:before {
  content: "\e61b";
}

.icon-message-close:before {
  content: "\e600";
}

.icon-bofang:before {
  content: "\e6e3";
}

.icon-danquxunhuan1:before {
  content: "\e653";
}

`
