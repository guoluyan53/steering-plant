import CryptoJs from 'crypto-js';

//默认的KEY和iv如果没有给
const KEY = CryptoJs.enc.Utf8.parse("1234567890123456");
const IV = CryptoJs.enc.Utf8.parse('1234567890123456');

/**
 * AES加密 ：字符串 key iv  返回base64 
 */
export function Encrypt(word,keyStr,ivStr) {
  let key = KEY;
  let iv = IV;

  if(keyStr){
    key = CryptoJs.enc.Utf8.parse(keyStr);
    iv = CryptoJs.enc.Utf8.parse(ivStr);
  }

  let srcs = CryptoJs.enc.Utf8.parse(word);
  var encrypted = CryptoJs.AES.encrypt(srcs,key,{
    iv: iv,
    mode:CryptoJs.mode.CBC,
    padding:CryptoJs.pad.ZeroPadding
  });
  return CryptoJs.enc.Base64.stringify(encrypted.ciphertext);

}

/**
 * AES解密 ：字符串 key iv  返回base64 
 */
export function Decrypt(word,keyStr,ivStr) {
  let key = KEY;
  let iv = IV;
  
  if(keyStr){
    key = CryptoJs.enc.Utf8.parse(keyStr);
    iv = CryptoJs.enc.Utf8.parse(ivStr);
  }

  let base64 = CryptoJs.enc.Base64.parse(word);
  let src = CryptoJs.enc.Base64.stringify(base64);

  var decrypt = CryptoJs.AES.decrypt(src,key, {
    iv: iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.ZeroPadding
  });
  
  var decryptedStr = decrypt.toString(CryptoJs.enc.Utf8);
  return decryptedStr.toString();
}