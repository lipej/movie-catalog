import { Crypt } from '@app/protocols/crypt';
import * as c from 'crypto-js';

export class CryptCryptoService implements Crypt {
  constructor(private secure_key: string) {}

  encrypt(value: string) {
    return c.MD5(value + this.secure_key).toString();
  }

  compare(value: string, hash: string) {
    return this.encrypt(value) === hash;
  }
}
